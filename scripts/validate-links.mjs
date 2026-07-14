#!/usr/bin/env node
/**
 * Link validation for the portfolio.
 *
 * 1. Internal integrity (always runs, offline-safe):
 *    - every case study has a matching project and vice versa for featured projects
 *    - every related-project slug resolves
 *    - no unapproved GitHub repository URL slipped into publishable source
 * 2. External URLs (network): HEAD/GET each store, website, and GitHub link.
 *    Run with --skip-external to only do the offline checks.
 *
 * Exit code is non-zero when any check fails.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skipExternal = process.argv.includes("--skip-external");

// Parse the data as TypeScript syntax without executing application code.
const read = (p) => readFileSync(join(root, p), "utf8");
const dataPaths = [
  "src/data/projects.ts",
  "src/data/case-studies.ts",
  "src/data/profile.ts",
  "src/data/site.ts",
];

function walk(directory) {
  return readdirSync(join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function parseSource(path) {
  const scriptKind = path.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  return ts.createSourceFile(path, read(path), ts.ScriptTarget.Latest, true, scriptKind);
}

const dataSourceFiles = dataPaths.map(parseSource);
const publishableSourceFiles = walk("src")
  .filter((path) => path.endsWith(".ts") || path.endsWith(".tsx"))
  .map(parseSource);

function findArray(sourceFile, variableName) {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === variableName &&
        declaration.initializer &&
        ts.isArrayLiteralExpression(declaration.initializer)
      ) {
        return declaration.initializer.elements.filter(ts.isObjectLiteralExpression);
      }
    }
  }
  throw new Error(`Could not find array export "${variableName}" in ${sourceFile.fileName}`);
}

function getProperty(object, propertyName) {
  return object.properties.find(
    (property) =>
      ts.isPropertyAssignment(property) &&
      ((ts.isIdentifier(property.name) && property.name.text === propertyName) ||
        (ts.isStringLiteral(property.name) && property.name.text === propertyName)),
  );
}

function getStringProperty(object, propertyName) {
  const property = getProperty(object, propertyName);
  if (
    property &&
    ts.isPropertyAssignment(property) &&
    (ts.isStringLiteral(property.initializer) ||
      ts.isNoSubstitutionTemplateLiteral(property.initializer))
  ) {
    return property.initializer.text;
  }
  return undefined;
}

function findDuplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
}

const failures = [];
const warnings = [];

// --- Internal integrity -----------------------------------------------------

const projectEntries = findArray(dataSourceFiles[0], "projects");
const caseStudyEntries = findArray(dataSourceFiles[1], "caseStudies");
const projectSlugs = projectEntries
  .map((entry) => getStringProperty(entry, "slug"))
  .filter(Boolean);
const caseStudySlugs = caseStudyEntries
  .map((entry) => getStringProperty(entry, "slug"))
  .filter(Boolean);
const featuredSlugs = projectEntries
  .filter((entry) => {
    const property = getProperty(entry, "featured");
    return (
      property &&
      ts.isPropertyAssignment(property) &&
      property.initializer.kind === ts.SyntaxKind.TrueKeyword
    );
  })
  .map((entry) => getStringProperty(entry, "slug"))
  .filter(Boolean);

for (const slug of findDuplicates(projectSlugs)) {
  failures.push(`Duplicate project slug "${slug}"`);
}
for (const slug of findDuplicates(caseStudySlugs)) {
  failures.push(`Duplicate case-study slug "${slug}"`);
}

for (const slug of caseStudySlugs) {
  if (!projectSlugs.includes(slug)) {
    failures.push(`Case study "${slug}" has no matching project entry`);
  }
}
for (const slug of featuredSlugs) {
  if (!caseStudySlugs.includes(slug)) {
    failures.push(`Featured project "${slug}" has no matching case study`);
  }
}
for (const slug of caseStudySlugs) {
  if (!featuredSlugs.includes(slug)) {
    failures.push(`Case study "${slug}" belongs to a non-featured project`);
  }
}

const relatedSlugs = caseStudyEntries.flatMap((entry) => {
  const property = getProperty(entry, "related");
  if (
    !property ||
    !ts.isPropertyAssignment(property) ||
    !ts.isArrayLiteralExpression(property.initializer)
  ) {
    return [];
  }
  return property.initializer.elements
    .filter((element) => ts.isStringLiteral(element) || ts.isNoSubstitutionTemplateLiteral(element))
    .map((element) => element.text);
});
for (const slug of relatedSlugs) {
  if (!caseStudySlugs.includes(slug)) {
    failures.push(`Related slug "${slug}" does not resolve to a case study`);
  }
}

// Privacy guard: only these GitHub repos are public and allowed to appear.
const allowedRepos = [
  "alzoldik/cleanz",
  "alzoldik/ffmpeg_kit_flutter_new",
  "alzoldik/base",
  "alzoldik/invest-qr-privacy-policy",
  "alzoldik/neuralx_solutions",
  "alzoldik/minipany-shop",
];
const urls = [];
for (const sourceFile of publishableSourceFiles) {
  function collectUrls(node) {
    if (
      (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) &&
      /^https?:\/\//.test(node.text)
    ) {
      urls.push(node.text);
    }
    ts.forEachChild(node, collectUrls);
  }
  collectUrls(sourceFile);
}

for (const value of urls) {
  const url = new URL(value);
  if (url.hostname !== "github.com") continue;
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length < 2) continue;
  const repo = segments
    .slice(0, 2)
    .join("/")
    .replace(/\.git$/, "");
  if (!allowedRepos.includes(repo)) {
    failures.push(`GitHub repo "${repo}" is not on the public allowlist — possible privacy leak`);
  }
}

// --- External URLs ----------------------------------------------------------

const externalUrls = [...new Set(urls)].filter(
  (url) =>
    !url.includes("your-domain.example") &&
    !url.includes("localhost") &&
    !url.includes("schema.org"),
);

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Mozilla/5.0 (link-validator)" },
    });
    // Some hosts reject HEAD; retry with GET before judging.
    if (res.status >= 400) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "user-agent": "Mozilla/5.0 (link-validator)" },
      });
    }
    if (res.status === 404 || res.status === 410) {
      failures.push(`${url} → HTTP ${res.status}`);
    } else if (res.status >= 400) {
      warnings.push(`${url} → HTTP ${res.status} (may be bot-blocking; verify manually)`);
    } else {
      console.log(`  ok  ${url}`);
    }
  } catch (err) {
    warnings.push(`${url} → ${err.name === "AbortError" ? "timeout" : err.message}`);
  } finally {
    clearTimeout(timer);
  }
}

console.log(
  `Internal checks: ${projectSlugs.length} projects, ${caseStudySlugs.length} case studies, ${featuredSlugs.length} featured`,
);

if (!skipExternal) {
  console.log(`\nChecking ${externalUrls.length} external URLs…`);
  // Small batches to stay polite.
  for (let i = 0; i < externalUrls.length; i += 5) {
    await Promise.all(externalUrls.slice(i, i + 5).map(check));
  }
} else {
  console.log("External URL checks skipped (--skip-external).");
}

if (warnings.length) {
  console.warn(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  warn ${w}`);
}
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error(`  FAIL ${f}`);
  process.exit(1);
}
console.log("\nAll link checks passed.");

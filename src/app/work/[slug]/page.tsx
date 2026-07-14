import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { getProject } from "@/data/projects";
import { ExtLink, Lettermark, Tag } from "@/components/ui";
import { JsonLd } from "@/components/json-ld";

export const dynamic = "force-static";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.shortName} · Case study`,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.shortName} · Case study — Ali Mohamed`,
      description: project.summary,
      type: "article",
      url: `/work/${slug}`,
    },
  };
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title} className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight text-fg">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  const storeLinks = [project.links.appStore, project.links.googlePlay].filter(Boolean);
  const appJsonLd =
    storeLinks.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.shortName,
          operatingSystem: project.platforms.join(", "),
          applicationCategory: "MobileApplication",
          url: project.links.website ?? storeLinks[0],
          installUrl: storeLinks,
        }
      : null;

  const related = study.related
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {appJsonLd ? <JsonLd data={appJsonLd} /> : null}
      <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          All work
        </Link>

        <header className="mt-8 flex items-start gap-4">
          <Lettermark mark={project.mark} size="lg" />
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {project.domainLabel}
            </p>
            <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {study.title}
            </h1>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* Main narrative */}
          <article>
            <p className="text-base leading-relaxed text-muted">{study.purpose}</p>

            <CaseSection title="Context">
              <p className="text-sm leading-relaxed text-muted">{study.context}</p>
            </CaseSection>

            <CaseSection title="Role">
              <p className="text-sm leading-relaxed text-muted">{study.roleDetail}</p>
            </CaseSection>

            <CaseSection title="Engineering responsibilities">
              <ul className="space-y-2">
                {study.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2 text-sm leading-relaxed text-fg/85">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Technical challenges">
              <p className="text-sm leading-relaxed text-muted">{study.challenges}</p>
            </CaseSection>

            <CaseSection title="Engineering approach">
              <p className="text-sm leading-relaxed text-muted">{study.approach}</p>
              {study.publicArtifacts?.length ? (
                <ul className="mt-4 space-y-1.5">
                  {study.publicArtifacts.map((a) => (
                    <li key={a.href}>
                      <ExtLink href={a.href}>{a.label}</ExtLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </CaseSection>

            <CaseSection title="Selected capabilities">
              <ul className="flex flex-wrap gap-1.5">
                {study.capabilities.map((c) => (
                  <li key={c}>
                    <Tag>{c}</Tag>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Outcome">
              <p className="text-sm leading-relaxed text-muted">{study.outcome}</p>
            </CaseSection>
          </article>

          {/* Facts rail */}
          <aside aria-label="Project facts" className="lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-lg border border-edge bg-surface p-5">
              <dl className="space-y-4">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">Role</dt>
                  <dd className="mt-1 text-sm font-medium text-fg">{project.role}</dd>
                </div>
                {project.relationship ? (
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      Engagement
                    </dt>
                    <dd className="mt-1 text-sm text-fg">{project.relationship}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Platforms
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.platforms.map((p) => (
                      <Tag key={p} tone="accent">
                        {p}
                      </Tag>
                    ))}
                  </dd>
                  {project.platformNote ? (
                    <dd className="mt-2 text-xs leading-relaxed text-muted">
                      {project.platformNote}
                    </dd>
                  ) : null}
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                    Technologies
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </dd>
                </div>
                {project.status ? (
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm text-fg">{project.status}</dd>
                  </div>
                ) : null}
              </dl>
              {project.links.appStore ||
              project.links.googlePlay ||
              project.links.website ||
              project.links.github ? (
                <div className="mt-5 flex flex-col gap-2 border-t border-edge pt-4">
                  {project.links.appStore ? (
                    <ExtLink href={project.links.appStore}>App Store</ExtLink>
                  ) : null}
                  {project.links.googlePlay ? (
                    <ExtLink href={project.links.googlePlay}>Google Play</ExtLink>
                  ) : null}
                  {project.links.website ? (
                    <ExtLink href={project.links.website}>
                      {project.links.websiteLabel ?? "Website"}
                    </ExtLink>
                  ) : null}
                  {project.links.github ? (
                    <ExtLink href={project.links.github}>GitHub</ExtLink>
                  ) : null}
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        {/* Related projects */}
        {related.length > 0 ? (
          <section aria-label="Related projects" className="mt-16 border-t border-edge pt-10">
            <h2 className="text-lg font-semibold tracking-tight text-fg">Related projects</h2>
            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li
                  key={p.slug}
                  className="rounded-lg border border-edge bg-surface p-4 transition-colors hover:border-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <Lettermark mark={p.mark} />
                    <div>
                      <h3 className="text-sm font-semibold text-fg">
                        <Link
                          href={`/work/${p.slug}`}
                          className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {p.shortName}
                        </Link>
                      </h3>
                      <p className="text-xs text-muted">{p.domainLabel}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}

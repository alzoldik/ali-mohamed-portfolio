import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Section, Tag, ExtLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { WorkGrid } from "@/components/work-grid";
import { ExperienceTimeline, ProductContributions } from "@/components/experience-timeline";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site";
import { featuredProjects, additionalProducts, tqneeProducts } from "@/data/projects";
import type { AdditionalProduct } from "@/lib/types";
import {
  signals,
  aboutParagraphs,
  experience,
  productContributions,
  capabilityGroups,
  openSourceProjects,
} from "@/data/profile";

export const metadata: Metadata = {
  alternates: { canonical: `${siteConfig.url}/` },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Mohamed",
  jobTitle: "Senior Flutter Developer",
  description:
    "Senior mobile engineer building and maintaining production Flutter applications across enterprise and consumer products.",
  email: `mailto:${siteConfig.contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [siteConfig.contact.github, siteConfig.contact.linkedin],
  knowsAbout: ["Flutter", "Dart", "Swift", "iOS", "Android", "Mobile architecture"],
};

function AdditionalProductList({ products }: { products: readonly AdditionalProduct[] }) {
  return (
    <ul className="mt-5 divide-y divide-edge border-y border-edge">
      {products.map((product) => (
        <li
          key={product.name}
          className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
        >
          <span className="w-40 shrink-0 text-sm font-medium text-fg">{product.name}</span>
          <span className="w-44 shrink-0 font-mono text-xs uppercase tracking-wide text-muted">
            {product.domainLabel}
          </span>
          <span className="flex-1 text-sm text-muted">{product.description}</span>
          <span className="flex shrink-0 gap-3">
            {product.links.appStore ? (
              <ExtLink href={product.links.appStore} context={product.name}>
                App Store
              </ExtLink>
            ) : null}
            {product.links.googlePlay ? (
              <ExtLink href={product.links.googlePlay} context={product.name}>
                Google Play
              </ExtLink>
            ) : null}
            {product.links.website ? (
              <ExtLink href={product.links.website} context={product.name}>
                {product.links.websiteLabel ?? "Website"}
              </ExtLink>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd} />

      {/* Hero */}
      <section aria-label="Introduction" className="border-b border-edge">
        <div className="mx-auto max-w-5xl px-5 pb-12 pt-14 sm:pb-16 sm:pt-24">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Senior Flutter Developer &amp; Mobile Engineer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Ali Mohamed
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I build and ship production mobile apps: enterprise HR platforms used for daily
            attendance, real-estate investment tools, media-heavy learning products, and carpooling
            — live on the App Store and Google Play across Egypt, Saudi Arabia, and the UAE.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              View selected work
            </Link>
            {siteConfig.resume.available ? (
              <a
                href={siteConfig.resume.path}
                download={siteConfig.resume.fileName}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-edge px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download resume
              </a>
            ) : null}
            <span className="flex items-center gap-1">
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ali Mohamed on GitHub; opens in a new tab"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-edge text-muted transition-colors hover:border-fg/30 hover:text-fg"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ali Mohamed on LinkedIn; opens in a new tab"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-edge text-muted transition-colors hover:border-fg/30 hover:text-fg"
              >
                <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email Ali Mohamed"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-edge text-muted transition-colors hover:border-fg/30 hover:text-fg"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </span>
          </div>
          <p className="mt-8 flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Cairo, Egypt ({siteConfig.timezoneNote}) · Senior Flutter Developer at InnovaDigits
          </p>
        </div>
      </section>

      {/* Professional signals */}
      <section aria-label="Professional signals" className="border-b border-edge bg-surface/60">
        <ul className="mx-auto flex max-w-5xl flex-wrap gap-x-7 gap-y-2 px-5 py-4">
          {signals.map((s) => (
            <li key={s} className="font-mono text-xs text-muted">
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Selected work */}
      <Section
        id="work"
        kicker="Selected work"
        title="Products built, shipped, and kept alive"
        intro="Verified featured projects across enterprise, education, real estate, mobility, media, and events. Every claim below is backed by store listings, public repositories, or documented engagement history."
      >
        <Reveal>
          <WorkGrid projects={featuredProjects} />
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <h3 className="text-lg font-semibold tracking-tight text-fg">Additional products</h3>
            <p className="mt-1 text-sm text-muted">
              Earlier and smaller client products, listed for completeness.
            </p>
            <AdditionalProductList products={additionalProducts} />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10">
            <h3 className="text-lg font-semibold tracking-tight text-fg">
              TQNEE portfolio · 2020–2021
            </h3>
            <p className="mt-1 max-w-3xl text-sm text-muted">
              Production Flutter apps I contributed to as a Junior Flutter Developer at TQNEE.
              Snaydi Child and Basher predate my tenure; I contributed to their later development.
              Across the portfolio, my work included feature development, maintenance, bug fixes,
              testing, and releases.
            </p>
            <AdditionalProductList products={tqneeProducts} />
          </div>
        </Reveal>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        kicker="Experience"
        title="Six years of production mobile work"
        intro="Full-time roles first; independent product contributions are listed separately and are not employment positions."
        className="border-t border-edge"
      >
        <Reveal>
          <ExperienceTimeline entries={experience} />
          <ProductContributions items={productContributions} />
        </Reveal>
      </Section>

      {/* Engineering capabilities */}
      <Section
        id="engineering"
        kicker="Engineering"
        title="Capabilities"
        intro="Grouped by how the work actually happens. Everything listed is backed by shipped products or public repositories."
        className="border-t border-edge"
      >
        <Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-edge bg-surface p-5">
                <h3 className="font-mono text-sm font-semibold text-fg">{group.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-snug text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Open source */}
      <Section
        id="open-source"
        kicker="Open source"
        title="Public engineering work"
        intro="Repositories where the work is fully inspectable — including the toolchain fix that unblocks FFmpeg builds on Apple Silicon simulators."
        className="border-t border-edge"
      >
        <Reveal>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {openSourceProjects.map((repo) => (
              <li
                key={repo.name}
                className="flex h-full flex-col rounded-lg border border-edge bg-surface p-5"
              >
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-3">
                  <h3 className="min-w-0 break-words font-mono text-sm font-semibold text-fg [overflow-wrap:anywhere]">
                    {repo.name}
                  </h3>
                  <Tag>{repo.language}</Tag>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fg/85">{repo.what}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{repo.why}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-fg">Contribution:</span> {repo.contribution}
                </p>
                <div className="mt-auto flex gap-4 pt-4">
                  <ExtLink href={repo.githubUrl} context={repo.name}>
                    GitHub
                  </ExtLink>
                  {repo.liveUrl ? (
                    <ExtLink href={repo.liveUrl} context={repo.name}>
                      Live site
                    </ExtLink>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* About */}
      <Section
        id="about"
        kicker="About"
        title="Where product meets platform"
        className="border-t border-edge"
      >
        <Reveal>
          <div className="max-w-2xl space-y-5">
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-[0.95rem] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        kicker="Contact"
        title="Let's build reliable mobile products."
        intro="I'm a Senior Flutter Developer and Mobile Engineer based in Cairo, working across architecture, production delivery, performance, media, security, and platform-specific mobile challenges. Email is the fastest way to reach me."
        className="border-t border-edge"
      >
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-edge px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-md border border-edge px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {siteConfig.resume.available ? (
              <a
                href={siteConfig.resume.path}
                download={siteConfig.resume.fileName}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-edge px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </a>
            ) : null}
          </div>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {siteConfig.location}
          </p>
        </Reveal>
      </Section>
    </>
  );
}

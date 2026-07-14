import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { ExtLink, Lettermark, Tag } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-edge bg-surface p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="flex items-start gap-3">
        <Lettermark mark={project.mark} />
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-tight text-fg">
            <Link
              href={`/work/${project.slug}`}
              className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.shortName}
            </Link>
          </h3>
          <p className="truncate text-xs text-muted">
            {project.domainLabel}
            {project.relationship ? <> · {project.relationship}</> : null}
          </p>
        </div>
      </div>

      <p className="mt-3 font-mono text-xs uppercase tracking-wide text-accent">{project.role}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-3 space-y-1.5">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-sm leading-snug text-fg/85">
            <span
              aria-hidden="true"
              className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent"
            />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.platforms.map((p) => (
          <Tag key={p} tone="accent">
            {p}
          </Tag>
        ))}
        {project.technologies.slice(0, 4).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-edge pt-4 [margin-top:1.25rem]">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
          aria-label={`Read the ${project.shortName} case study`}
        >
          Case study
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
        {project.links.appStore ? (
          <ExtLink href={project.links.appStore} context={project.shortName}>
            App Store
          </ExtLink>
        ) : null}
        {project.links.googlePlay ? (
          <ExtLink href={project.links.googlePlay} context={project.shortName}>
            Google Play
          </ExtLink>
        ) : null}
        {project.links.website ? (
          <ExtLink href={project.links.website} context={project.shortName}>
            {project.links.websiteLabel ?? "Website"}
          </ExtLink>
        ) : null}
        {project.links.github ? (
          <ExtLink href={project.links.github} context={project.shortName}>
            GitHub
          </ExtLink>
        ) : null}
      </div>
    </article>
  );
}

"use client";

import { useState } from "react";
import type { Domain, Project } from "@/lib/types";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const DOMAIN_ORDER: Domain[] = [
  "Education",
  "Enterprise",
  "Real Estate",
  "Mobility",
  "Media",
  "Events",
  "Marketplace",
  "Open Source",
];

/**
 * Accessible domain filter + project grid.
 * Filters are plain toggle buttons (aria-pressed); no animation is required for filtering.
 */
export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Domain | "All">("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.domains.includes(active));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by domain"
        className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {(["All", ...DOMAIN_ORDER] as const).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setActive(d)}
            aria-pressed={active === d}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-3 py-2.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              active === d
                ? "border-accent bg-accent text-on-accent"
                : "border-edge text-muted hover:border-fg/30 hover:text-fg",
            )}
          >
            {d}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} {visible.length === 1 ? "project" : "projects"} shown
      </p>
      {visible.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-edge bg-surface p-5 text-sm text-muted">
          No featured case study in this category. Related work is listed under Additional products.
        </p>
      )}
    </div>
  );
}

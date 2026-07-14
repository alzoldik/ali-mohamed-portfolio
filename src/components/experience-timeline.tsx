import Link from "next/link";
import type { ExperienceEntry, ProductContribution } from "@/lib/types";

/**
 * Vertical employment timeline. Client engagements are nested under the employer,
 * with employer / client / product clearly distinguished.
 */
export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative space-y-12 border-l border-edge pl-6 sm:pl-8">
      {entries.map((entry) => (
        <li key={entry.company} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[1.83rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-page bg-accent sm:-left-[2.33rem]"
          />
          <p className="font-mono text-xs text-muted">
            {entry.start} — {entry.end ?? "Present"}
            {entry.location ? <> · {entry.location}</> : null}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-fg">
            {entry.title} <span className="font-normal text-muted">· {entry.company}</span>
          </h3>
          <p className="text-xs text-muted">{entry.type}</p>
          <ul className="mt-3 space-y-2">
            {entry.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm leading-relaxed text-fg/85">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {h}
              </li>
            ))}
          </ul>
          {entry.clients?.length ? (
            <div className="mt-4 rounded-lg border border-edge bg-surface p-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Client engagements
              </p>
              <dl className="mt-2 space-y-2">
                {entry.clients.map((c) => (
                  <div key={c.client} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <dt className="text-sm font-medium text-fg">{c.client}</dt>
                    <dd className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
                      {c.products.map((p) =>
                        p.slug ? (
                          <Link
                            key={p.name}
                            href={`/work/${p.slug}`}
                            className="underline decoration-edge underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                          >
                            {p.name}
                          </Link>
                        ) : (
                          <span key={p.name}>{p.name}</span>
                        ),
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

/** Independent product engagements — deliberately separate from full-time employment. */
export function ProductContributions({ items }: { items: ProductContribution[] }) {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold tracking-tight text-fg">
        Selected product contributions
      </h3>
      <p className="mt-1 text-sm text-muted">
        Independent product engagements alongside full-time roles — not employment positions.
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.name} className="rounded-lg border border-edge bg-surface p-4">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">{item.role}</p>
            <h4 className="mt-1 text-base font-semibold text-fg">
              {item.slug ? (
                <Link
                  href={`/work/${item.slug}`}
                  className="underline decoration-edge underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

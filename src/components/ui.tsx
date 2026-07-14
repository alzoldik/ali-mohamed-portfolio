import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Section shell with consistent kicker + heading hierarchy and anchor offset. */
export function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className,
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-20", className)}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {kicker}
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
        >
          {title}
        </h2>
        {intro ? (
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted">{intro}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

/** Small uppercase mono tag used for platforms and technologies. */
export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded border px-1.5 py-0.5 font-mono text-xs uppercase tracking-wide",
        tone === "accent" ? "border-accent/30 text-accent" : "border-edge text-muted",
      )}
    >
      {children}
    </span>
  );
}

/** External link with secure rel attributes; opens in a new tab. */
export function ExtLink({
  href,
  children,
  className,
  showIcon = true,
  context,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  context?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-sm text-fg underline decoration-edge underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
        className,
      )}
    >
      {children}
      {showIcon ? <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> : null}
      <span className="sr-only">
        {context ? ` — ${context}; opens in a new tab` : " (opens in a new tab)"}
      </span>
    </a>
  );
}

/** Generated geometric lettermark — used instead of screenshots, logos, or photos. */
export function Lettermark({ mark, size = "md" }: { mark: string; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex shrink-0 select-none items-center justify-center rounded-md border border-edge bg-surface font-mono font-semibold text-fg",
        size === "md" ? "h-10 w-10 text-sm" : "h-12 w-12 text-base",
      )}
    >
      {mark}
      <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-accent" />
    </span>
  );
}

import type { ReactNode } from "react";

/**
 * Progressive CSS scroll reveal. Unsupported browsers and non-visual clients get
 * fully visible content, and no JavaScript is required for the effect.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-reveal="" className={className}>
      {children}
    </div>
  );
}

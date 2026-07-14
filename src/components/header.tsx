import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-page/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
        >
          Ali Mohamed
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {siteConfig.resume.available ? (
            <a
              href={siteConfig.resume.path}
              download={siteConfig.resume.fileName}
              className="hidden rounded-md border border-edge px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent sm:inline-block"
            >
              Resume
            </a>
          ) : null}
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
      <noscript>
        <nav aria-label="Main navigation" className="border-t border-edge md:hidden">
          <ul className="mx-auto flex max-w-5xl gap-5 overflow-x-auto px-5">
            {siteConfig.nav.map((item) => (
              <li key={item.href} className="shrink-0">
                <a href={item.href} className="inline-flex min-h-11 items-center text-sm text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </noscript>
    </header>
  );
}

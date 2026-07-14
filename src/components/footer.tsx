import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-fg">Ali Mohamed</p>
          <p className="text-xs text-muted">Senior Flutter Developer · © {year}</p>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

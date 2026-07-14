# Ali Mohamed — Portfolio

Personal portfolio for **Ali Mohamed, Senior Flutter Developer & Mobile Engineer** (Cairo, Egypt).

Live site: **https://alzoldik.github.io/ali-mohamed-portfolio/**

Typography-first, content-first, static-first. No photos, no screenshots, no fake numbers — every
project shown is backed by the research files in the parent workspace (`portfolio-data.json`,
`profile.json`, `project-case-studies/`), and unverified or non-public-safe projects are excluded
by design.

## Stack

- **Next.js** (App Router, Server Components by default, static generation)
- **TypeScript** (strict)
- **Tailwind CSS v4** (semantic tokens, class-based dark mode)
- Progressive CSS scroll reveals, disabled under `prefers-reduced-motion`
- **Lucide** icons, **next/font** (Inter + JetBrains Mono)

## Getting started

Use Node.js 22 LTS (the repository includes an `.nvmrc`).

```bash
nvm use
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                   | Purpose                                            |
| ------------------------ | -------------------------------------------------- |
| `npm run dev`            | Development server                                 |
| `npm run build`          | Production build (statically generates all routes) |
| `npm run start`          | Serve the production build                         |
| `npm run lint`           | ESLint                                             |
| `npm run typecheck`      | TypeScript, no emit                                |
| `npm run validate-links` | Internal integrity + external URL checks           |
| `npm run format`         | Prettier                                           |
| `npm run format:check`   | Verify formatting without changing files           |

`validate-links` also enforces a **privacy allowlist**: any GitHub URL in publishable source that is
not one of the six approved portfolio repositories fails the check, so a private repository link
cannot ship unnoticed. Use `npm run validate-links -- --skip-external` when offline.

## Content model

All structured project and profile content lives in typed data files — there is no database and no CMS:

| File                       | Contains                                                       |
| -------------------------- | -------------------------------------------------------------- |
| `src/data/site.ts`         | Name, SEO strings, contact links, nav, resume flag             |
| `src/data/projects.ts`     | 9 featured projects + additional products (cards, links, tags) |
| `src/data/case-studies.ts` | Narrative content for each `/work/[slug]` page                 |
| `src/data/profile.ts`      | Signals, about, experience timeline, capabilities, open source |

### Updating content

1. Edit the relevant file in `src/data/`.
2. A featured project needs **both** a `projects.ts` entry (`featured: true`) and a
   `case-studies.ts` entry with the same `slug` — `validate-links` fails if they drift.
3. Run `npm run typecheck && npm run lint && npm run validate-links`.

### Content rules (enforced by convention and by the validator)

- Never add a private repository name or URL, a collaborator identity, or an internal endpoint.
- Never add metrics (users, downloads, ratings, revenue) unless there is documented evidence.
- Store links must match the app's package ID / bundle ID, not just a similar name.
- Projects marked unverified or `publicSafe: false` in the research data stay off the site.
- A-plus must never be described as originally created by Ali; Lamha's dates are fixed
  (Apr–Dec 2022).

## Resume

The published CV lives at:

```
public/resume/Ali-Mohamed-Senior-Flutter-Developer.pdf
```

Resume download controls are enabled through `resume.available` in `src/data/site.ts`. Replace the
PDF while keeping the same filename to publish an updated CV.

## Deploying to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` validates and exports the site, then deploys
the `out/` artifact to GitHub Pages on every push to `main`. It sets both the canonical production
URL and the `/ali-mohamed-portfolio` project-site base path during the build.

The repository's Pages source must be **GitHub Actions**. It can be selected under
**Settings → Pages → Build and deployment**, or configured with the GitHub API. The workflow also
supports a manual run from the repository's **Actions** tab.

All routes are static and there are no server secrets. For another repository name or a custom
domain, update `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` in the workflow.

## SEO & accessibility

- Per-page titles/descriptions, canonical URLs, Open Graph + Twitter metadata
- Code-generated text-only OG image (`src/app/opengraph-image.png/route.tsx`)
- JSON-LD: `Person` (home) and `SoftwareApplication` (published apps' case studies)
- `sitemap.xml` and `robots.txt` generated from the same data as the pages
- Semantic landmarks, one `h1` per page, skip link, visible focus states,
  `aria-pressed` filters, keyboard-reachable everything, WCAG-AA contrast in both themes,
  `prefers-reduced-motion` respected (scroll, reveals, hovers)

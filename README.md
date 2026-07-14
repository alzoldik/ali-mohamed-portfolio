# Ali Mohamed — Portfolio

Personal portfolio for **Ali Mohamed, Senior Flutter Developer & Mobile Engineer** (Cairo, Egypt).

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

Drop the real PDF at:

```
public/resume/Ali-Mohamed-Senior-Flutter-Developer.pdf
```

then set `resume.available: true` in `src/data/site.ts`. Resume buttons are hidden until then —
no fake resume is generated.

## Deploying to Vercel

1. Push this directory to a Git repository.
2. In Vercel: **Add New Project** → import the repo. Framework preset: Next.js (auto-detected).
   No build settings need to change.
3. Add an environment variable:
   `NEXT_PUBLIC_SITE_URL = https://your-production-domain` (no trailing slash).
   This drives canonical URLs, Open Graph URLs, `sitemap.xml`, and `robots.txt`.
   When omitted on Vercel, the app falls back to Vercel's production/deployment URL; setting it
   explicitly is still recommended for a custom domain.
4. Deploy. All routes are statically generated; there are no server secrets
   (see `.env.example`).

Alternatively: `npx vercel` from this directory.

## SEO & accessibility

- Per-page titles/descriptions, canonical URLs, Open Graph + Twitter metadata
- Code-generated text-only OG image (`src/app/opengraph-image.tsx`)
- JSON-LD: `Person` (home) and `SoftwareApplication` (published apps' case studies)
- `sitemap.xml` and `robots.txt` generated from the same data as the pages
- Semantic landmarks, one `h1` per page, skip link, visible focus states,
  `aria-pressed` filters, keyboard-reachable everything, WCAG-AA contrast in both themes,
  `prefers-reduced-motion` respected (scroll, reveals, hovers)

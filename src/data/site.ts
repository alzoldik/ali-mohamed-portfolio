const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const resolvedSiteUrl =
  explicitSiteUrl ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";

export const siteConfig = {
  name: "Ali Mohamed",
  title: "Senior Flutter Developer & Mobile Engineer",
  shortTitle: "Senior Flutter Developer",
  location: "Cairo, Egypt",
  timezoneNote: "GMT+2/+3",
  /** Canonical URL comes from the environment so previews and production stay correct. */
  url: resolvedSiteUrl.replace(/\/$/, ""),
  /** Prefix for project-site assets that are not rendered through Next.js Link. */
  basePath,
  seo: {
    title: "Ali Mohamed — Senior Flutter Developer & Mobile Engineer (Cairo)",
    description:
      "Senior Flutter developer in Cairo with six years of production mobile experience. Shipped enterprise HR, real-estate investment, e-learning, carpooling, and audiobook apps on the App Store and Google Play for clients across Egypt, Saudi Arabia, and the UAE.",
  },
  contact: {
    email: "aly.egy09@gmail.com",
    github: "https://github.com/alzoldik",
    linkedin: "https://www.linkedin.com/in/alzoldik",
  },
  resume: {
    /**
     * Keep this path in sync with the PDF under public/resume.
     */
    available: true,
    path: `${basePath}/resume/Ali-Mohamed-Senior-Flutter-Developer.pdf`,
    fileName: "Ali-Mohamed-Senior-Flutter-Developer.pdf",
  },
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Engineering", href: "/#engineering" },
    { label: "Open Source", href: "/#open-source" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

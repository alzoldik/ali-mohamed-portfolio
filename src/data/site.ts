const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const resolvedSiteUrl =
  explicitSiteUrl ?? (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

export const siteConfig = {
  name: "Ali Mohamed",
  title: "Senior Flutter Developer & Mobile Engineer",
  shortTitle: "Senior Flutter Developer",
  location: "Cairo, Egypt",
  timezoneNote: "GMT+2/+3",
  /** Canonical URL comes from the environment so previews and production stay correct. */
  url: resolvedSiteUrl.replace(/\/$/, ""),
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
     * Flip to true once the real PDF is placed at public/resume/Ali-Mohamed-Senior-Flutter-Developer.pdf.
     * The resume buttons stay hidden until then so the site never links to a missing file.
     */
    available: false,
    path: "/resume/Ali-Mohamed-Senior-Flutter-Developer.pdf",
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

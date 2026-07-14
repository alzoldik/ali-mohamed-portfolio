import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const socialImageUrl = `${siteConfig.url}/opengraph-image.png`;
const socialImageAlt = "Ali Mohamed — Senior Flutter Developer & Mobile Engineer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: "%s — Ali Mohamed",
  },
  description: siteConfig.seo.description,
  keywords: [
    "Flutter developer",
    "Senior mobile engineer",
    "Dart",
    "iOS",
    "Android",
    "Cairo",
    "Mobile architecture",
    "App Store",
    "Google Play",
  ],
  authors: [{ name: "Ali Mohamed", url: siteConfig.contact.github }],
  creator: "Ali Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/`,
    siteName: "Ali Mohamed — Portfolio",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: socialImageUrl, width: 1200, height: 630, alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [{ url: socialImageUrl, alt: socialImageAlt }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#101012" },
  ],
};

/** Applies the persisted (or system) theme before first paint to avoid a flash. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-page font-sans text-fg`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

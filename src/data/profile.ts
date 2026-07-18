import type {
  CapabilityGroup,
  ExperienceEntry,
  OpenSourceProject,
  ProductContribution,
} from "@/lib/types";

/** Compact, verified credibility signals shown under the hero. No invented numbers. */
export const signals: string[] = [
  "6+ years in mobile engineering",
  "iOS & Android production delivery",
  "Enterprise & consumer products",
  "App Store & Google Play release ownership",
  "Flutter · Dart · Swift · Java",
  "Remote-ready — overlaps European & Gulf hours",
];

export const aboutParagraphs: string[] = [
  "I'm a senior Flutter developer based in Cairo with six years of production mobile work. I started at TQNEE in 2020 shipping the company's Flutter portfolio — several of those apps are still live and receiving updates years later — moved through remote product work on Lamha's audiobook platform, and since 2023 I've been a Senior Flutter Developer at InnovaDigits delivering client platforms for enterprise HR and real-estate investment.",
  "Alongside employed work, I've been the founding mobile engineer on products built from the first commit: SAWA (carpooling), Elit3 (a media-heavy learning platform), and Neo Nerd (e-learning). I've also done the opposite job — taking over A-plus, an existing education app, and leading its development and modernization through years of store releases.",
  "The work I enjoy most sits where product meets platform: background audio that survives the OS, geofenced and beacon-based attendance, QR check-in flows, bilingual Arabic/English UX, and the unglamorous release engineering that actually gets apps approved and keeps them shipping. When the toolchain breaks, I fix that too — my public fork of ffmpeg_kit_flutter_new repackages its iOS frameworks so Apple Silicon simulators can link them.",
];

export const experience: ExperienceEntry[] = [
  {
    company: "InnovaDigits",
    title: "Senior Flutter Developer",
    type: "Full-time",
    location: "Cairo, Egypt",
    start: "Jan 2023",
    end: null,
    highlights: [
      "Senior Mobile Engineer on HCM7, an enterprise HR and employee self-service platform: attendance with geofencing, QR and beacon check-in, requests and approvals, leave, schedules, and payroll-related services.",
      "Delivered the Masheed client portfolio: Bsht (bilingual real-estate investment), Masaken (real estate), and SaudiProjects QR (secure event check-in with real-time attendance statistics).",
      "Owned store releases end to end, including release artifacts such as the SaudiProjects QR bilingual privacy-policy site.",
      "Investigated production failures across iOS, Android, APIs, and background services on live client apps.",
    ],
    clients: [
      { client: "Apps Link (UAE)", products: [{ name: "HCM7", slug: "hcm7" }] },
      {
        client: "Masheed",
        products: [
          { name: "Masaken" },
          { name: "Bsht", slug: "bsht" },
          { name: "SaudiProjects QR", slug: "saudiprojects-qr" },
        ],
      },
    ],
  },
  {
    company: "Lamha",
    title: "Flutter Developer",
    type: "Full-time · Remote",
    start: "Apr 2022",
    end: "Dec 2022",
    highlights: [
      "Worked on Lamha – Audiobooks & Podcasts: audio playback, downloads and library, content discovery, user accounts, API integration, and performance and stability work leading into release preparation.",
    ],
    clients: [
      {
        client: "Lamha (product)",
        products: [{ name: "Lamha – Audiobooks & Podcasts", slug: "lamha" }],
      },
    ],
  },
  {
    company: "Matrix Clouds",
    title: "Flutter Developer",
    type: "Full-time",
    location: "Cairo, Egypt",
    start: "Aug 2021",
    end: "Mar 2022",
    highlights: ["Client mobile application development across multiple product domains."],
  },
  {
    company: "TQNEE",
    title: "Junior Flutter Developer",
    type: "Full-time",
    start: "Jan 2020",
    end: "Jul 2021",
    highlights: [
      "Shipped and maintained production Flutter apps across the company portfolio: Kushoof (paperless student evaluation and transcripts — still shipping updates in 2026), Makhdoum (services), Tourz (booking), and contributed to Snaydi Child, Kamsa3r, and Basher.",
    ],
  },
];

/** Independent product engagements — shown separately from full-time employment. */
export const productContributions: ProductContribution[] = [
  {
    name: "Elit3",
    slug: "elit3",
    role: "Founding Mobile Engineer",
    description:
      "Media-heavy learning platform: courses, live sessions, community, podcasts, reels, and a Quran experience with background and offline playback.",
  },
  {
    name: "SAWA",
    slug: "sawa",
    role: "Founding Mobile Engineer",
    description:
      "Carpooling app for Fusion Technologies, built from the ground up as part of a small product team; live on both stores since 2023.",
  },
  {
    name: "Neo Nerd",
    slug: "neo-nerd",
    role: "Founding Mobile Engineer",
    description: "E-learning app live on both stores since late 2025.",
  },
  {
    name: "A-plus",
    slug: "a-plus",
    role: "Lead Mobile Contributor",
    description:
      "Led development and modernization of an existing education platform through years of store releases.",
  },
];

/** Grouped, evidence-backed capabilities. No percentages, no logos. */
export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Mobile Architecture",
    items: [
      "Feature-first, modular application design",
      "SOLID principles and design patterns",
      "Reusable foundations — published in the open-source base template",
      "Localization-first (RTL/LTR) architecture",
    ],
  },
  {
    title: "Application Experience",
    items: [
      "Flutter and Dart",
      "Swift and SwiftUI",
      "Java (Android)",
      "Native iOS/Android platform integration",
      "Responsive and adaptive UI",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Bloc / flutter_bloc",
      "Provider",
      "RxDart",
      "dio and REST APIs",
      "Socket.io and real-time features",
      "Local storage and caching",
      "Supabase (web projects)",
    ],
  },
  {
    title: "Production Engineering",
    items: [
      "FFmpeg media pipelines and background audio playback",
      "Streaming and offline media",
      "Geofencing, location services, and BLE beacons",
      "QR scanning and camera-permission UX",
      "Push notifications and deep links",
      "App security hardening",
      "Performance monitoring and crash investigation",
    ],
  },
  {
    title: "Delivery",
    items: [
      "App Store Connect and Google Play Console releases",
      "Store transfers and privacy-policy compliance",
      "Xcode toolchain: xcframeworks, Mach-O/vtool, CocoaPods",
      "GitHub Actions CI — including APK builds delivered to Telegram",
      "Git, GitHub, GitLab · Jira, Trello, Confluence",
      "Production troubleshooting on live apps",
    ],
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "cleanz",
    language: "Swift",
    githubUrl: "https://github.com/alzoldik/cleanz",
    what: "Native macOS storage cleaner and analyzer built with SwiftUI: system junk, developer caches, large files, app leftovers, and privacy data.",
    why: "Cleanup tools shouldn't require trusting a black box — Cleanz makes you review everything before it moves anything, to Trash, never permanent deletion.",
    contribution:
      "Creator and sole author: scanners, safety layer, review flow, reporting, and the full SwiftUI interface.",
  },
  {
    name: "ffmpeg_kit_flutter_new (fork)",
    language: "Ruby / Mach-O tooling",
    githubUrl: "https://github.com/alzoldik/ffmpeg_kit_flutter_new",
    what: "Fork of the ffmpeg_kit_flutter_new plugin that repackages its eight vendored iOS frameworks as xcframeworks with an arm64-simulator slice.",
    why: "Upstream ships fat frameworks whose arm64 slice targets devices only, so Apple Silicon simulators fail to link with “Building for 'iOS-simulator', but linking in dylib built for 'iOS'.”",
    contribution:
      "iOS distribution changes only: binary slice surgery (lipo/vtool), xcframework layout, and podspec updates. FFmpeg and the upstream plugin remain upstream's work.",
  },
  {
    name: "base",
    language: "Dart",
    githubUrl: "https://github.com/alzoldik/base",
    what: "Flutter starter template: bloc + RxDart state layer, dio networking, feature-first structure, and localization wiring.",
    why: "Bootstrapping production apps repeatedly deserves a production-shaped starting point.",
    contribution:
      "Sole author, including a GitHub Actions pipeline that builds release APKs and delivers them via a Telegram bot for testing.",
  },
  {
    name: "invest-qr-privacy-policy",
    language: "HTML",
    githubUrl: "https://github.com/alzoldik/invest-qr-privacy-policy",
    liveUrl: "https://alzoldik.github.io/invest-qr-privacy-policy/",
    what: "Bilingual (English/Arabic) privacy-policy site for the SaudiProjects QR app, hosted on GitHub Pages.",
    why: "Store compliance is part of release ownership — this is the app's public release artifact.",
    contribution: "Authored and hosts the site; it is the Play listing's linked privacy policy.",
  },
  {
    name: "neuralx_solutions",
    language: "JavaScript",
    githubUrl: "https://github.com/alzoldik/neuralx_solutions",
    liveUrl: "https://alzoldik.github.io/neuralx_solutions/",
    what: "React + Vite marketing site with internationalization and theme switching, live on GitHub Pages.",
    why: "Web-side practice of the same product sensibilities: i18n and theming as first-class concerns.",
    contribution: "Sole author.",
  },
  {
    name: "minipany-shop",
    language: "TypeScript",
    githubUrl: "https://github.com/alzoldik/minipany-shop",
    what: "Next.js 14 + TypeScript + Tailwind storefront: product catalog, WhatsApp ordering, Arabic localization, and dark mode.",
    why: "A practical storefront pattern for small food businesses, Supabase-ready.",
    contribution: "Author of record, including the Arabic localization and dark-mode work.",
  },
];

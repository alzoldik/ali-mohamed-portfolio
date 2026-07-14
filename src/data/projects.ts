import type { AdditionalProduct, Project } from "@/lib/types";

/**
 * Generated from content/portfolio-data.json (research phase).
 * Only entries with publicSafe: true and confidence VERIFIED or STRONG_MATCH are included.
 * GitHub links point exclusively to public repositories.
 */
export const projects: Project[] = [
  {
    slug: "elit3",
    name: "Elit3",
    shortName: "Elit3",
    mark: "E3",
    domainLabel: "E-learning & media",
    domains: ["Education", "Media"],
    role: "Founding Mobile Engineer",
    relationship: "Independent product engagement",
    summary:
      "Media-heavy learning platform combining courses, live sessions, community, podcasts, reels, and a Quran experience — built to keep playing offline and with the screen off.",
    highlights: [
      "Led the Flutter implementation across course, media, and community workflows",
      "Built audio/video playback including background playback and offline functionality",
      "Kept the FFmpeg-based iOS media toolchain building on modern Apple hardware via a public fork",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "FFmpeg", "Xcode toolchain"],
    links: {
      appStore: "https://apps.apple.com/eg/app/id6758868954",
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.elite",
      website: "https://elit3.org/",
    },
    featured: true,
    status: "Live on both stores",
  },
  {
    slug: "hcm7",
    name: "HCM7",
    shortName: "HCM7",
    mark: "H7",
    domainLabel: "Enterprise HR",
    domains: ["Enterprise"],
    role: "Senior Mobile Engineer",
    relationship: "Via InnovaDigits · for Apps Link (UAE)",
    summary:
      "Enterprise HR and employee self-service platform where daily attendance runs on geofencing, QR codes, and BLE beacons.",
    highlights: [
      "Owns production Flutter features across attendance, requests, and self-service workflows",
      "Delivered geofenced check-in/check-out plus QR- and beacon-based attendance",
      "Investigates production issues across iOS, Android, and backend integrations",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "Geofencing", "QR scanning", "BLE beacons", "REST APIs"],
    links: {
      appStore: "https://apps.apple.com/eg/app/hcm7/id1627243893",
      googlePlay: "https://play.google.com/store/apps/details?id=com.appsLink.hcm7",
    },
    featured: true,
    status: "Live on both stores",
  },
  {
    slug: "bsht",
    name: "Bsht",
    shortName: "Bsht",
    mark: "BS",
    domainLabel: "Real-estate investment",
    domains: ["Real Estate"],
    role: "Senior Flutter Developer",
    relationship: "Via InnovaDigits · Masheed portfolio",
    summary:
      "Bilingual Arabic/English real-estate investment platform: opportunities, property studies, reservations, company accounts, and financing plans.",
    highlights: [
      "Delivered bilingual RTL/LTR investment, reservation, and request workflows",
      "Built company-account features including team invitations, documents, and financing plans",
      "Supported simultaneous App Store and Google Play launches with fast follow-up releases",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "REST APIs", "Arabic/English localization"],
    links: {
      appStore: "https://apps.apple.com/app/id6744442461",
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.investment_portal",
      website: "https://www.masakenapp.com",
      websiteLabel: "masakenapp.com",
    },
    featured: true,
    status: "Live on both stores",
  },
  {
    slug: "sawa",
    name: "SAWA",
    shortName: "SAWA",
    mark: "SW",
    domainLabel: "Carpooling & mobility",
    domains: ["Mobility"],
    role: "Founding Mobile Engineer",
    relationship: "For Fusion Technologies Co.",
    summary:
      "Carpooling platform connecting drivers and passengers: ride creation, search, booking, maps and location, and in-app messaging.",
    highlights: [
      "Built the Flutter application from the ground up as part of a small product team",
      "Implemented driver and passenger flows: ride creation, search, and booking",
      "Managed production releases on both stores through a multi-year release stream",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "Google Maps", "Push notifications", "REST APIs"],
    links: {
      appStore: "https://apps.apple.com/eg/app/sawa/id1645381223",
      googlePlay: "https://play.google.com/store/apps/details?id=com.fusion.sawa",
    },
    featured: true,
    status: "Live on both stores since 2023",
  },
  {
    slug: "neo-nerd",
    name: "Neo Nerd",
    shortName: "Neo Nerd",
    mark: "NN",
    domainLabel: "E-learning",
    domains: ["Education"],
    role: "Founding Mobile Engineer",
    relationship: "Independent product engagement",
    summary:
      "Video-first e-learning app with courses, user accounts, student progress tracking, and content discovery.",
    highlights: [
      "Contributed from initial architecture through production delivery",
      "Implemented course, video-learning, and progress-tracking workflows",
      "Delivered App Store and Google Play releases",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart", "Video playback", "REST APIs"],
    links: {
      appStore: "https://apps.apple.com/app/id6752838175",
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.new_nerd",
    },
    featured: true,
    status: "Live on both stores",
  },
  {
    slug: "saudiprojects-qr",
    name: "SaudiProjects QR",
    shortName: "Invest QR",
    mark: "QR",
    domainLabel: "Event operations",
    domains: ["Events", "Enterprise"],
    role: "Senior Flutter Developer",
    relationship: "Via InnovaDigits · Masheed portfolio",
    summary:
      "Secure event check-in: authorized login, invitation verification, QR scanning, on-the-spot validation, and real-time attendance statistics.",
    highlights: [
      "Implemented QR scanning and check-in validation with careful camera-permission handling",
      "Built attendance and event-detail views backed by real-time statistics",
      "Owned store release work, including authoring the app's bilingual privacy-policy site",
    ],
    platforms: ["Android"],
    technologies: ["Flutter", "Dart", "Camera/QR scanning", "REST APIs"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.invest_qr_app",
      website: "https://alzoldik.github.io/invest-qr-privacy-policy/",
      websiteLabel: "Privacy policy",
    },
    featured: true,
    status: "Live on Google Play",
  },
  {
    slug: "lamha",
    name: "Lamha — Audiobooks & Podcasts",
    shortName: "Lamha",
    mark: "LM",
    domainLabel: "Audio content & media",
    domains: ["Media"],
    role: "Flutter Developer",
    relationship: "Full-time role at Lamha · Apr–Dec 2022",
    summary:
      "Arabic audiobook-summary and podcast platform with streaming and offline audio, downloads, and a personal library.",
    highlights: [
      "Implemented and improved audio playback and library/download workflows",
      "Integrated content and account APIs",
      "Worked on performance and stability leading into release preparation",
    ],
    platforms: ["iOS"],
    platformNote:
      "Previously also published on Google Play; the Android listing has since been removed.",
    technologies: ["Flutter", "Dart", "Audio playback", "REST APIs"],
    links: {
      appStore: "https://apps.apple.com/app/id1593939628",
      website: "https://www.lamha.app",
      websiteLabel: "lamha.app",
    },
    featured: true,
    status: "Live on the App Store",
  },
  {
    slug: "cleanz",
    name: "Cleanz",
    shortName: "Cleanz",
    mark: "CZ",
    domainLabel: "macOS utility",
    domains: ["Open Source"],
    role: "Creator & sole author",
    relationship: "Personal open-source project",
    summary:
      "Native macOS storage cleaner and analyzer built with SwiftUI — everything is reviewed before it moves, to Trash, never to oblivion.",
    highlights: [
      "Safety-first architecture: every item is validated before planning and again before trashing",
      "Scanners for system junk, developer caches, large and old files, and app leftovers",
      "Local-first: no account, no cloud, no tracking; exportable cleanup reports",
    ],
    platforms: ["macOS"],
    technologies: ["Swift", "SwiftUI", "Swift Package Manager"],
    links: {
      github: "https://github.com/alzoldik/cleanz",
    },
    featured: true,
    status: "Open source on GitHub",
  },
  {
    slug: "a-plus",
    name: "A-plus",
    shortName: "A-plus",
    mark: "A+",
    domainLabel: "Education",
    domains: ["Education"],
    role: "Lead Mobile Contributor",
    relationship: "Independent engagement · existing product",
    summary:
      "Long-lived education platform, live since 2021 — led major development and modernization of the existing production app through years of store releases.",
    highlights: [
      "Took over major mobile workstreams on an existing production codebase",
      "Modernized aging code paths while the app kept shipping",
      "Managed App Store and Google Play releases and production troubleshooting",
    ],
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Dart"],
    links: {
      appStore: "https://apps.apple.com/eg/app/a-plus/id1543956025",
      googlePlay: "https://play.google.com/store/apps/details?id=com.sellx.aplus_student",
    },
    featured: true,
    status: "Live on both stores",
  },
];

export const additionalProducts: AdditionalProduct[] = [
  {
    name: "Masaken",
    domainLabel: "Real estate",
    description: "Real-estate platform in the Masheed product family, delivered via InnovaDigits.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.masaken",
      website: "https://www.masakenapp.com",
      websiteLabel: "masakenapp.com",
    },
  },
  {
    name: "Roso",
    domainLabel: "Marketplace & live auctions",
    description: "Marketplace with live auctions, real-time bidding, and fixed-price purchases.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.mazaad",
    },
  },
  {
    name: "OtaGo",
    domainLabel: "Travel booking",
    description: "Travel platform for flight and hotel booking and related services.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.Otago",
    },
  },
  {
    name: "First Care",
    domainLabel: "On-demand services",
    description:
      "Laundry-services platform with pickup and delivery workflows, plus a courier-side companion app.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.first_care",
    },
  },
  {
    name: "Infinit Al Rowad",
    domainLabel: "Services",
    description: "Services app in the same product family as OtaGo and First Care.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.infinit_al_rowad",
    },
  },
  {
    name: "Alrowad",
    domainLabel: "Services & rewards",
    description:
      "Service booking (flights, cleaning, more) with cashback-style points redeemable as gifts or bank transfers.",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.app.alrowad",
    },
  },
];

/** Products contributed to as a Junior Flutter Developer at TQNEE, Jan 2020–Jul 2021. */
export const tqneeProducts: AdditionalProduct[] = [
  {
    name: "Kushoof",
    domainLabel: "Education",
    description:
      "Student follow-up, evaluation, and transcript platform; feature development and maintenance as part of the TQNEE team.",
    links: {
      appStore: "https://apps.apple.com/app/id1522198829",
      googlePlay: "https://play.google.com/store/apps/details?id=com.tqnee.kushoof",
    },
  },
  {
    name: "Snaydi Child",
    domainLabel: "E-learning",
    description:
      "Parent-and-child learning product that predated the tenure; contributed later features and maintenance with TQNEE.",
    links: {
      appStore: "https://apps.apple.com/us/app/id1476991744",
      googlePlay: "https://play.google.com/store/apps/details?id=com.tqnee.sanaydiparent",
    },
  },
  {
    name: "Makhdoum",
    domainLabel: "Services",
    description:
      "Services application supported through feature development, bug fixing, and release work with the TQNEE team.",
    links: {
      appStore: "https://apps.apple.com/us/app/1498378815",
    },
  },
  {
    name: "Tourz",
    domainLabel: "Travel booking",
    description:
      "Travel and booking product contributed to through feature development and maintenance at TQNEE.",
    links: {
      appStore: "https://apps.apple.com/eg/app/tourz/id1509103073",
    },
  },
  {
    name: "Kamsa3r",
    domainLabel: "E-commerce",
    description:
      "E-commerce app contributed to during the TQNEE tenure; its store listings have since been removed.",
    links: {},
  },
  {
    name: "Basher",
    domainLabel: "Community",
    description:
      "Community app that predated the tenure; contributed later features and maintenance as part of the TQNEE team.",
    links: {
      appStore: "https://apps.apple.com/us/app/1463982460",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

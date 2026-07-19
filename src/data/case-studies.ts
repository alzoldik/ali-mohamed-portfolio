import type { CaseStudy } from "@/lib/types";

/**
 * Generated from content/project-case-studies/ (research phase).
 * Confidentiality rules applied: no private repository names, no collaborator identities,
 * no internal architecture beyond what store listings and public artifacts evidence.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "elit3",
    title: "Elit3 — Media-Heavy E-Learning Platform",
    context:
      "Elit3 is an independent learning product shipped to both stores in 2026. Ali worked on it as founding mobile engineer as part of a small product team.",
    purpose:
      "A single app combining structured learning with rich media: courses and lessons, live sessions, a community space, podcasts, short-form reels, PDF reading, and a dedicated Quran experience — designed to keep working when the screen is off or the network is gone.",
    roleDetail:
      "Founding Mobile Engineer — led the Flutter implementation and owned the mobile media pipeline through production delivery on the App Store and Google Play.",
    responsibilities: [
      "Course, lesson, live-session, and community workflows",
      "Audio/video playback including background playback and offline functionality",
      "PDF reading, deep links, and notifications",
      "App security hardening, performance monitoring, and internal debug tooling",
      "Store delivery for both platforms",
    ],
    challenges:
      "The app's FFmpeg-based media processing stopped building for Apple Silicon simulators: the upstream ffmpeg_kit_flutter_new plugin ships fat iOS frameworks whose arm64 slice targets devices only, and a fat Mach-O binary structurally cannot carry both an arm64-device and an arm64-simulator slice. On arm64-only simulators, Xcode fails with “Building for 'iOS-simulator', but linking in dylib built for 'iOS'.”",
    approach:
      "Rather than pinning old simulators, Ali repackaged the plugin's eight vendored frameworks: extracting device slices (arm64 + arm64e), producing simulator slices (x86_64 plus arm64 retagged with vtool), and reassembling each as an .xcframework with an updated podspec. The fix was published as a public fork so other teams hitting the same wall can use it.",
    capabilities: [
      "Courses & lessons",
      "Live sessions",
      "Community",
      "Podcasts",
      "Reels",
      "Quran experience",
      "PDF reading",
      "Background & offline playback",
      "Deep links",
      "Performance monitoring",
    ],
    outcome:
      "Live on both stores with an active release stream, and an iOS media toolchain that builds cleanly on current Apple hardware and simulators.",
    publicArtifacts: [
      {
        label: "ffmpeg_kit_flutter_new fork (public repository)",
        href: "https://github.com/alzoldik/ffmpeg_kit_flutter_new",
      },
    ],
    related: ["neo-nerd", "lamha", "a-plus"],
  },
  {
    slug: "hcm7",
    title: "HCM7 — Enterprise HR & Employee Self-Service",
    context:
      "HCM7 is the mobile front end of Apps Link's human-capital-management platform (UAE). Ali works on it through InnovaDigits as part of a product team, alongside backend, QA, product, and client-side teams. The app predates his tenure; he joined the engineering effort in 2023 and the platform has shipped continuously since.",
    purpose:
      "Give employees a single app for daily HR operations: clocking in and out, submitting and approving requests, checking leave and schedules, and accessing payroll-related services — reliable enough to be part of how a company runs its day.",
    roleDetail:
      "Senior Mobile Engineer through InnovaDigits on the HCM7 enterprise HR platform — a senior engineer on a live, evolving enterprise product.",
    responsibilities: [
      "Production Flutter features across attendance, requests/approvals, and self-service workflows",
      "Attendance capture flows: geofenced check-in/check-out, QR-based attendance, beacon-based attendance",
      "Enterprise API integration and notification flows",
      "Production support: investigating live issues across iOS, Android, and backend integrations",
    ],
    challenges:
      "Attendance is an adversarial, precision-sensitive feature: location must be right at the moment of check-in, geofences must behave across OS power-management regimes, and QR and beacon paths must work in real workplaces with imperfect connectivity — all while the app stays acceptable to enterprise IT and the stores.",
    approach:
      "Multiple attendance modalities (geofence, QR, beacon) implemented behind consistent self-service UX, with careful platform-permission handling and server-validated check-in flows. Delivery is continuous: the app has maintained an active release stream on both stores for years.",
    capabilities: [
      "Employee self-service",
      "Geofenced check-in/check-out",
      "QR attendance",
      "Beacon attendance",
      "Requests & approvals",
      "Leave & schedules",
      "Notifications",
      "Payroll-related services",
    ],
    outcome:
      "The platform remains live and actively updated on both stores, years into a continuous enterprise release stream.",
    related: ["saudiprojects-qr", "bsht"],
  },
  {
    slug: "bsht",
    title: "Bsht — Real-Estate Investment Platform",
    context:
      "Bsht (بشت) is the investment app of the Masheed real-estate portfolio. Ali delivered it through InnovaDigits as part of a product team. It launched on both stores in mid-2026.",
    purpose:
      "Let investors browse real-estate assets and investment opportunities, commission property studies and consultations, reserve and request assets, run company accounts with team invitations, and manage documents, proposals, and financing plans — fully bilingual in Arabic and English.",
    roleDetail:
      "Senior Flutter Developer through InnovaDigits, collaborating with backend, QA, product, and design teams.",
    responsibilities: [
      "Bilingual (RTL/LTR) investment, reservation, and request workflows",
      "Company-account features including team invitations",
      "Documents, proposals, and financing-plan flows",
      "Notifications and release support through the launch window",
    ],
    challenges:
      "A launch-stage, fintech-adjacent product: bilingual UX where Arabic is a first-class experience rather than a translation, multi-role company accounts, and document-heavy workflows — shipped to two stores simultaneously with fast follow-up releases.",
    approach:
      "Localization treated as an architectural concern (mirrored layouts, bilingual content models), with workflow screens built over a shared network and state layer. The launch cadence shows tight iteration, with multiple releases inside the first month.",
    capabilities: [
      "Investment opportunities",
      "Property studies & consultations",
      "Reservations & requests",
      "Company accounts & team invitations",
      "Documents & proposals",
      "Financing plans",
      "Arabic/English",
    ],
    outcome:
      "Launched on both stores in mid-2026 and iterating actively, with the product tied into the wider Masaken family.",
    related: ["saudiprojects-qr", "hcm7"],
  },
  {
    slug: "sawa",
    title: "SAWA — Carpooling Platform",
    context:
      "SAWA is a carpooling product from Fusion Technologies Co., live on both stores since April 2023 and still receiving updates. Ali built the mobile application from the ground up as part of a small product team.",
    purpose:
      "Connect drivers and passengers for shared rides: drivers publish rides, passengers search and book them, and both sides coordinate through in-app messaging and manage their rides end to end.",
    roleDetail:
      "Founding Mobile Engineer (Fusion Technologies · Part-time · Oct 2021 – Present) — built the Flutter application from the first commit as part of a small product team, and continues to own the mobile engineering work alongside his primary full-time role.",
    responsibilities: [
      "Built the Flutter application from the first commit as part of a small product team",
      "Driver and passenger flows: ride creation, ride search, booking",
      "Maps and location integration",
      "In-app messaging and notifications",
      "Ride management and production releases on both stores",
    ],
    challenges:
      "Two-sided marketplace mechanics in one app: keeping driver and passenger experiences coherent, location and mapping accurate, and communication reliable enough for people to actually meet at a pickup point.",
    approach:
      "A single Flutter codebase serving both roles with clearly separated flows, maps and location services at the core of ride creation and discovery, and messaging plus push notifications carrying the coordination loop. The product has sustained a multi-year release stream — the strongest public signal of a maintainable original architecture.",
    capabilities: [
      "Ride creation",
      "Ride search",
      "Booking",
      "Maps & location",
      "Messaging",
      "Notifications",
      "Ride management",
    ],
    outcome: "Live on both stores for over two years with continuing updates.",
    related: ["elit3", "neo-nerd"],
  },
  {
    slug: "neo-nerd",
    title: "Neo Nerd — E-Learning App",
    context:
      "Neo Nerd is an e-learning product live on both stores since September 2025. Ali contributed as founding mobile engineer as part of a small product team.",
    purpose:
      "Video-first learning: students discover content, follow courses, watch lessons, and track their own progress under a personal account.",
    roleDetail:
      "Founding Mobile Engineer — contributed from initial architecture through production delivery.",
    responsibilities: [
      "Course browsing and video-learning workflows",
      "User accounts and student progress tracking",
      "Content discovery",
      "App Store and Google Play delivery",
    ],
    challenges:
      "Launching a video-heavy learning app on both stores with a small team: playback that behaves across devices, progress state that survives interruptions, and discovery that stays fast as the catalog grows.",
    approach:
      "A Flutter codebase organized around course, lesson, and progress domains with video playback at the center, delivered to both stores with post-launch updates continuing since.",
    capabilities: [
      "Courses",
      "Video learning",
      "User accounts",
      "Student progress",
      "Content discovery",
    ],
    outcome: "Live on both stores with post-launch updates continuing into mid-2026.",
    related: ["elit3", "a-plus"],
  },
  {
    slug: "saudiprojects-qr",
    title: "SaudiProjects QR — Secure Event Check-In",
    context:
      "SaudiProjects QR is an event-operations app in the Masheed portfolio, delivered through InnovaDigits as part of a product team. Its bilingual privacy-policy site is authored and publicly hosted by Ali — a verifiable release artifact tied to the Play listing.",
    purpose:
      "Run event entry properly: authorized staff log in, look up invitations, scan attendee QR codes, validate check-ins on the spot, and watch attendance statistics update in real time.",
    roleDetail:
      "Senior Flutter Developer through InnovaDigits — mobile implementation plus store release and transfer work.",
    responsibilities: [
      "Secure authorized login and invitation verification",
      "QR scanning with careful camera-permission handling",
      "Check-in validation and event-detail views",
      "Real-time attendance statistics",
      "Store release work, including authoring and hosting the app's English/Arabic privacy-policy site",
    ],
    challenges:
      "Check-in tools live or die at the door: scanning has to be fast under bad lighting and spotty connectivity, camera permissions must be requested in a way that passes store review and doesn't stall staff, and attendance numbers need to stay trustworthy while multiple devices check people in simultaneously.",
    approach:
      "A focused, single-purpose app: a camera/QR pipeline tuned for the check-in flow, validation against backend event services, and attendance views designed for at-a-glance reading during a live event. Release compliance was handled to the letter, including a bilingual privacy policy describing exactly what the camera and event data are used for.",
    capabilities: [
      "Authorized login",
      "Invitation verification",
      "QR scanning",
      "Check-in validation",
      "Event details",
      "Real-time attendance statistics",
    ],
    outcome:
      "Live on Google Play with its release-compliance artifacts publicly authored by Ali — a clear public paper trail of release ownership on client work.",
    publicArtifacts: [
      {
        label: "Bilingual privacy-policy site (EN/AR)",
        href: "https://alzoldik.github.io/invest-qr-privacy-policy/",
      },
      {
        label: "Privacy-policy repository",
        href: "https://github.com/alzoldik/invest-qr-privacy-policy",
      },
    ],
    related: ["hcm7", "bsht"],
  },
  {
    slug: "lamha",
    title: "Lamha — Audiobooks & Podcasts",
    context:
      "Lamha is an Arabic audio-content platform. Ali worked on it as a full-time remote Flutter Developer from April to December 2022 — the app predates him and continued after him.",
    purpose:
      "Make long-form knowledge consumable: audiobook summaries, podcasts, and readable content with a personal library, downloads for offline listening, and discovery that keeps users finding the next thing to hear.",
    roleDetail:
      "Flutter Developer on the product team (remote), joining an existing production app.",
    responsibilities: [
      "Audio playback and library/download workflows",
      "Content discovery and user accounts",
      "API integration with the content platform",
      "Performance and stability work leading into release preparation",
    ],
    challenges:
      "Audio apps are judged on the boring parts: playback that survives interruptions and backgrounding, downloads that complete and stay playable offline, and a library that stays consistent between sessions — all inside an existing codebase with its own history.",
    approach:
      "Incremental, production-first work: improving playback and library paths, tightening API integration, and stabilizing performance ahead of releases.",
    capabilities: [
      "Audiobook summaries",
      "Podcasts",
      "Readable content",
      "Streaming & offline audio",
      "Library & downloads",
      "Content discovery",
      "User accounts",
    ],
    outcome: "The iOS app remains live years after the engagement.",
    related: ["elit3", "sawa"],
  },
  {
    slug: "cleanz",
    title: "Cleanz — Native macOS Storage Cleaner & Analyzer",
    context:
      "Cleanz is Ali's personal open-source macOS app, written in Swift and SwiftUI and structured as a Swift package. It is the portfolio's fully verifiable engineering showcase: every line is his, publicly inspectable.",
    purpose:
      "Show Mac users where their storage went and let them clean it without surrendering control: scan system junk, developer caches (Xcode, SwiftPM, npm, Yarn, pnpm, Gradle, CocoaPods, Homebrew), large and old files, app leftovers, and browser privacy data — then review everything before anything moves, to Trash, never to oblivion.",
    roleDetail: "Creator and sole author.",
    responsibilities: [
      "Everything: scanners, safety layer, review flow, cleanup engine, reporting, and the SwiftUI interface",
    ],
    challenges:
      "A cleaner app's core risk is deleting something that matters. The design problem is building useful automation — finding gigabytes of reclaimable junk — while making destructive mistakes structurally impossible rather than merely unlikely.",
    approach:
      "Safety as architecture, not policy: every cleanup item must pass a SafetyValidator/PathRules check before it can enter a CleanupPlan, and is validated again immediately before trashing. Files move to Trash — the app never permanently deletes. Dangerous locations (Desktop, Documents, Downloads, Mail, Keychains, iCloud Drive, source folders, .git, system files) are blocked or never auto-selected. Maintenance commands are allow-listed; nothing runs arbitrary shell input. Local-first: no account, no cloud, no tracking. Every cleanup run produces a report exportable as JSON, CSV, or TXT.",
    capabilities: [
      "Dashboard storage overview",
      "Smart Scan",
      "System Junk & Developer Junk scanners",
      "Large & Old Files",
      "App Uninstaller with leftover discovery",
      "Privacy cleanup",
      "Allow-listed maintenance tools",
      "Review-before-cleanup",
      "Report export (JSON/CSV/TXT)",
    ],
    outcome:
      "Public repository with full documentation, screenshots of all major views, a changelog, and a contribution guide. Runs on macOS 13+, Apple Silicon and Intel.",
    publicArtifacts: [{ label: "Cleanz repository", href: "https://github.com/alzoldik/cleanz" }],
    related: ["elit3"],
  },
  {
    slug: "a-plus",
    title: "A-plus — Modernizing a Long-Lived Education Platform",
    context:
      "A-plus is an education app live on both stores since January 2021. Ali did not create it — he took over major development on the existing product and led its development and modernization over roughly two years, through successful store releases.",
    purpose:
      "A student-facing learning platform that has stayed in production for over five years, with a public version stream that keeps advancing.",
    roleDetail:
      "Lead Mobile Contributor — led development and store releases on the existing product. Not the original creator.",
    responsibilities: [
      "Leading or owning selected mobile workstreams on an existing production codebase",
      "Modernizing aging code paths while the app kept shipping",
      "Managing App Store and Google Play releases and production troubleshooting",
    ],
    challenges:
      "Inheriting a production app is a different discipline from greenfield work: understanding years of accumulated decisions, upgrading dependencies and platform targets without breaking live users, and carving out modernization work between feature releases.",
    approach:
      "Incremental modernization under a continuous release stream — the app's long, unbroken version history through and beyond the engagement is the public evidence that the approach held.",
    capabilities: ["Student-facing learning workflows", "Long-lived multi-version release stream"],
    outcome:
      "The platform remains live and actively updated on both stores, years after its first release.",
    related: ["neo-nerd", "elit3"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

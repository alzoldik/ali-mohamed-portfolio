export type Domain =
  | "Education"
  | "Enterprise"
  | "Real Estate"
  | "Mobility"
  | "Media"
  | "Events"
  | "Marketplace"
  | "Open Source";

export type Platform = "Android" | "iOS" | "macOS" | "Web";

export interface ProjectLinks {
  appStore?: string;
  googlePlay?: string;
  website?: string;
  /** Public repositories only. Private repository names and URLs are never stored here. */
  github?: string;
  websiteLabel?: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  /** Two-character monogram used for the generated lettermark. */
  mark: string;
  /** Human-readable domain line shown on cards. */
  domainLabel: string;
  /** Domains used for accessible filtering. */
  domains: Domain[];
  role: string;
  /** Public-safe employer/client relationship line, e.g. "Via InnovaDigits · for Apps Link (UAE)". */
  relationship?: string;
  summary: string;
  highlights: string[];
  platforms: Platform[];
  /** Evidence-backed technologies only. */
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
  /** Public-safe status line, e.g. "Live on both stores". */
  status?: string;
  /** Extra note rendered near platforms, e.g. a removed listing. */
  platformNote?: string;
}

export interface CaseStudy {
  slug: string;
  /** Longer case-study title. */
  title: string;
  context: string;
  purpose: string;
  roleDetail: string;
  responsibilities: string[];
  challenges: string;
  approach: string;
  capabilities: string[];
  outcome: string;
  /** Public, verifiable artifacts (open repositories, hosted pages). Never private URLs. */
  publicArtifacts?: { label: string; href: string }[];
  /** Slugs of related featured projects. */
  related: string[];
}

export interface AdditionalProduct {
  name: string;
  domainLabel: string;
  description: string;
  links: ProjectLinks;
}

export interface OpenSourceProject {
  name: string;
  language: string;
  githubUrl: string;
  liveUrl?: string;
  what: string;
  why: string;
  contribution: string;
}

export interface CapabilityGroup {
  title: string;
  items: string[];
}

export interface ClientEngagement {
  client: string;
  products: { name: string; slug?: string }[];
}

export interface ExperienceEntry {
  company: string;
  title: string;
  type: string;
  location?: string;
  start: string;
  end: string | null;
  highlights: string[];
  clients?: ClientEngagement[];
}

export interface ProductContribution {
  name: string;
  slug?: string;
  role: string;
  description: string;
}

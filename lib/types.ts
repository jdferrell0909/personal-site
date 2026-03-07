export interface HeroContent {
  tagline: string;
  heading: string;
  description: string;
  ctaText: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: "code" | "automation" | "consulting" | "design";
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  illustration?: string;
}

export interface ContactContent {
  heading: string;
  description: string;
  ctaText: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServiceItem[];
  projects: ProjectItem[];
  contact: ContactContent;
}

// Blog types

export interface RichText {
  plain_text: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  href?: string | null;
}

export interface ContentBlock {
  type: string;
  richText: RichText[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

export interface BlogPostFull extends BlogPost {
  blocks: ContentBlock[];
}

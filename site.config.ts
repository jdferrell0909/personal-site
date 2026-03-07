export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;

  email: string;
  socials: {
    github?: string;
    linkedin?: string;
  };

  navLinks: { label: string; href: string }[];

  blog: {
    title: string;
    heading: string;
    description: string;
  };

  colors: {
    primary: string;
    accent: string;
    accentDark: string;
    accentWarm: string;
    muted: string;
    light: string;
    border: string;
    background: string;
    foreground: string;
  };
}

const config: SiteConfig = {
  name: "James Ferrell",
  tagline: "Software Consultant",
  description:
    "Custom web applications, business automation, and technical consulting. Helping businesses build better software.",

  email: "hello@jamesferrell.dev",
  socials: {
    github: "https://github.com/jamesferrell",
    linkedin: "https://linkedin.com/in/jamesferrell",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],

  blog: {
    title: "Blog",
    heading: "Writing",
    description:
      "Thoughts on software, building for businesses, and using AI as a tool — not a crutch.",
  },

  colors: {
    primary: "#0f172a",
    accent: "#2563eb",
    accentDark: "#1d4ed8",
    accentWarm: "#f59e0b",
    muted: "#64748b",
    light: "#f8fafc",
    border: "#e2e8f0",
    background: "#ffffff",
    foreground: "#0f172a",
  },
};

export default config;

import type {
  SiteContent,
  HeroContent,
  AboutContent,
  ServiceItem,
  ProjectItem,
  ContactContent,
} from "./types";
import { queryDatabase, text, select, multiSelect, num, url } from "./notion";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Row {
  name: string;
  section: string;
  heading: string;
  body: string;
  tags: string[];
  order: number;
  link: string;
  icon: string;
}

export async function fetchNotionContent(): Promise<SiteContent> {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const results = await queryDatabase(databaseId);

  const rows: Row[] = results.map((page: any) => {
    const props = page.properties;
    return {
      name: text(props["Name"]),
      section: select(props["Section"]).toLowerCase(),
      heading: text(props["Heading"]),
      body: text(props["Body"]),
      tags: multiSelect(props["Tags"]),
      order: num(props["Order"]),
      link: url(props["Link"]),
      icon: select(props["Icon"]).toLowerCase(),
    };
  });

  const bySection = (s: string) =>
    rows.filter((r) => r.section === s).sort((a, b) => a.order - b.order);

  // Hero
  const heroRow = bySection("hero")[0];
  const hero: HeroContent = {
    tagline: heroRow?.name ?? "Software Consultant",
    heading: heroRow?.heading ?? "James Ferrell",
    description: heroRow?.body ?? "",
    ctaText: heroRow?.link ? heroRow.name : "Get in Touch",
  };

  // About
  const aboutRow = bySection("about")[0];
  const about: AboutContent = {
    heading: aboutRow?.heading ?? "",
    paragraphs: aboutRow?.body.split("\n").filter(Boolean) ?? [],
  };

  // Services
  const serviceRows = bySection("services");
  const services: ServiceItem[] = serviceRows.map((r) => ({
    title: r.heading || r.name,
    description: r.body,
    icon: (r.icon || "code") as ServiceItem["icon"],
  }));

  // Projects
  const projectRows = bySection("projects");
  const projects: ProjectItem[] = projectRows.map((r) => ({
    title: r.heading || r.name,
    description: r.body,
    tags: r.tags,
  }));

  // Contact
  const contactRows = bySection("contact");
  const contactMain =
    contactRows.find((r) => r.name.toLowerCase() === "contact") ??
    contactRows[0];
  const emailRow = contactRows.find((r) => r.link.startsWith("mailto:"));
  const githubRow = contactRows.find((r) => r.link.includes("github"));
  const linkedinRow = contactRows.find((r) => r.link.includes("linkedin"));

  const contact: ContactContent = {
    heading: contactMain?.heading ?? "",
    description: contactMain?.body ?? "",
    ctaText: emailRow?.name ?? "Send Me an Email",
    email: emailRow?.link.replace("mailto:", "") ?? "",
    githubUrl: githubRow?.link ?? "",
    linkedinUrl: linkedinRow?.link ?? "",
  };

  return { hero, about, services, projects, contact };
}

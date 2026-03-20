import type { SiteContent } from "./types";
import config from "@/site.config";

const localContent: SiteContent = {
  hero: {
    tagline: config.tagline,
    heading: config.name,
    description: config.description,
    ctaText: "Let's Build Something",
  },

  about: {
    heading: "Building software that solves real problems.",
    paragraphs: [
      "I\u2019m a software consultant who partners with businesses to design, build, and ship software that actually makes a difference. Whether it\u2019s a customer-facing web app, an internal tool, or automating the workflows that slow your team down \u2014 I bring the technical expertise to get it done right.",
      "I believe great software starts with understanding the problem. Before writing a single line of code, I work closely with you to define the goals, map the requirements, and chart the fastest path to results.",
    ],
  },

  services: [
    {
      title: "Custom Web Apps",
      description:
        "Full-stack web applications built with modern frameworks. Fast, responsive, and designed to scale with your business.",
      icon: "code",
    },
    {
      title: "Business Automation",
      description:
        "Eliminate repetitive tasks and streamline operations. I build systems that save your team hours every week.",
      icon: "automation",
    },
    {
      title: "Technical Consulting",
      description:
        "Strategic guidance on architecture, technology choices, and development processes. Make confident decisions about your tech.",
      icon: "consulting",
    },
    {
      title: "Website Design",
      description:
        "Beautiful, fast websites that make a strong first impression. Built for performance and designed to convert visitors into customers.",
      icon: "design",
    },
  ],

  projects: [
    {
      title: "E-Commerce Platform",
      slug: "ecommerce",
      description:
        "A full-featured online store with inventory management, payment processing, and a custom admin dashboard. Built for a local retail business looking to expand online.",
      fullDescription:
        "This project involved building a complete e-commerce solution from the ground up for a local retail business looking to expand their reach online. The platform includes a customer-facing storefront with product browsing, search, and filtering, as well as a full shopping cart and checkout flow powered by Stripe. On the backend, a custom admin dashboard gives the business owner real-time visibility into orders, inventory levels, and customer data. The system handles everything from product catalog management to automated order confirmation emails and shipping label generation.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/projects/ecommerce.png",
    },
    {
      title: "Scheduling & Booking System",
      slug: "scheduling",
      description:
        "An automated appointment scheduling system that reduced no-shows by 40%. Includes SMS reminders, calendar sync, and a client-facing booking portal.",
      fullDescription:
        "Built for a service-based business struggling with no-shows and double bookings, this scheduling platform automates the entire appointment lifecycle. Clients can self-book through a branded portal that shows real-time availability, synced with the team\u2019s Google Calendar. Automated SMS reminders via Twilio go out 24 hours and 1 hour before each appointment, which cut no-shows by 40% within the first month. The admin side includes a drag-and-drop calendar view, client history tracking, and reporting on booking trends and revenue per time slot.",
      tags: ["React", "Node.js", "Twilio", "MongoDB"],
      image: "/projects/scheduling.png",
    },
    {
      title: "Business Dashboard",
      slug: "dashboard",
      description:
        "A real-time analytics dashboard that consolidates data from multiple sources into a single view. Helped a growing team make faster, data-driven decisions.",
      fullDescription:
        "A growing company was pulling data from six different tools \u2014 their CRM, payment processor, support desk, marketing platform, and two internal databases. This dashboard consolidates all of it into a single, real-time view. Built with React and D3.js on the frontend and a Python backend that aggregates data via REST APIs, the dashboard features interactive charts, filterable date ranges, and role-based access so each team member sees the metrics that matter to them. The result: leadership meetings went from 2 hours of report-pulling to 15 minutes of strategic discussion.",
      tags: ["React", "Python", "D3.js", "REST API"],
      image: "/projects/dashboard.png",
    },
  ],

  contact: {
    heading: "Let\u2019s work together.",
    description:
      "Have a project in mind? I\u2019d love to hear about it. Reach out and let\u2019s talk about how I can help.",
    ctaText: "Start a Conversation",
    email: config.email,
    githubUrl: config.socials.github ?? "",
    linkedinUrl: config.socials.linkedin ?? "",
  },
};

export default localContent;

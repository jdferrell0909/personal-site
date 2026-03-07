import type { BlogPost, BlogPostFull, ContentBlock } from "./types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface LocalPost {
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  blocks: ContentBlock[];
}

const posts: LocalPost[] = [
  {
    title: "Why Every Small Business Needs a Website That Actually Works",
    excerpt:
      "Most small business websites are digital brochures collecting dust. Your website should be your hardest-working employee \u2014 here\u2019s how to make that happen.",
    tags: ["Next.js", "React", "Tailwind"],
    date: "2026-03-07",
    blocks: [
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "Most small business websites are digital brochures collecting dust. They load slow, look dated, and don\u2019t actually do anything for the business.",
          },
        ],
      },
      {
        type: "paragraph",
        richText: [
          { plain_text: "Here\u2019s the thing \u2014 your website should be your " },
          { plain_text: "hardest-working employee", bold: true },
          {
            plain_text:
              ". It should be generating leads, answering questions, and making it dead simple for customers to do business with you, 24/7.",
          },
        ],
      },
      {
        type: "heading_2",
        richText: [{ plain_text: "The Problem" }],
      },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "I\u2019ve worked with local businesses that were spending thousands on ads driving traffic to a site that took 8 seconds to load on mobile. That\u2019s not a website problem \u2014 that\u2019s a money bonfire.",
          },
        ],
      },
      {
        type: "heading_2",
        richText: [{ plain_text: "The Fix" }],
      },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "The fix isn\u2019t always a full rebuild. Sometimes it\u2019s a performance overhaul. Sometimes it\u2019s adding one smart feature:",
          },
        ],
      },
      {
        type: "bulleted_list_item",
        richText: [{ plain_text: "Online booking" }],
      },
      {
        type: "bulleted_list_item",
        richText: [{ plain_text: "A quote calculator" }],
      },
      {
        type: "bulleted_list_item",
        richText: [{ plain_text: "A self-service portal" }],
      },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "...that removes friction between your customer and their wallet.",
          },
        ],
      },
      {
        type: "heading_2",
        richText: [{ plain_text: "Why Modern Tools Matter" }],
      },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "The best part? Modern tools make this faster and cheaper than ever. A well-built Next.js site on Vercel costs essentially nothing to host, loads instantly, and can be updated without calling a developer every time you need to change your hours.",
          },
        ],
      },
      { type: "divider", richText: [] },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "If your website isn\u2019t actively helping your business grow, it\u2019s actively holding it back. ",
          },
          { plain_text: "Let\u2019s fix that.", bold: true },
        ],
      },
      {
        type: "paragraph",
        richText: [
          {
            plain_text:
              "This post was drafted with AI assistance and refined with real-world experience. That\u2019s kind of the whole point \u2014 use the tools, add the context.",
            italic: true,
          },
        ],
      },
    ],
  },
];

export function getLocalBlogPosts(): BlogPost[] {
  return posts
    .map((p) => ({
      id: slugify(p.title),
      slug: slugify(p.title),
      title: p.title,
      excerpt: p.excerpt,
      tags: p.tags,
      date: p.date,
    }))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getLocalBlogPost(slug: string): BlogPostFull | null {
  const post = posts.find((p) => slugify(p.title) === slug);
  if (!post) return null;
  return {
    id: slugify(post.title),
    slug: slugify(post.title),
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    date: post.date,
    blocks: post.blocks,
  };
}

import type { BlogPost, BlogPostFull, ContentBlock, RichText } from "./types";
import { queryDatabase, getBlockChildren, text, multiSelect } from "./notion";

/* eslint-disable @typescript-eslint/no-explicit-any */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractRichText(richTextArray: any[]): RichText[] {
  return (richTextArray ?? []).map((rt: any) => ({
    plain_text: rt.plain_text ?? "",
    bold: rt.annotations?.bold ?? false,
    italic: rt.annotations?.italic ?? false,
    strikethrough: rt.annotations?.strikethrough ?? false,
    underline: rt.annotations?.underline ?? false,
    code: rt.annotations?.code ?? false,
    href: rt.href ?? null,
  }));
}

function rowToPost(page: any): BlogPost {
  const props = page.properties;
  const title = text(props["Heading"]) || text(props["Name"]);
  return {
    id: page.id,
    slug: slugify(title),
    title,
    excerpt: text(props["Body"]).split("\n")[0] ?? "",
    tags: multiSelect(props["Tags"]),
    date: (page.created_time ?? "").slice(0, 10),
  };
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const databaseId = process.env.NOTION_DATABASE_ID!;

  const results = await queryDatabase(databaseId, {
    property: "Section",
    select: { equals: "blog" },
  });

  return results
    .map((page: any) => rowToPost(page))
    .sort(
      (a: BlogPost, b: BlogPost) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function fetchBlogPost(
  slug: string
): Promise<BlogPostFull | null> {
  const posts = await fetchBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  const blockResults = await getBlockChildren(post.id);

  const blocks: ContentBlock[] = blockResults.map((block: any) => {
    const blockData = block[block.type];
    return {
      type: block.type,
      richText: extractRichText(blockData?.rich_text ?? []),
    };
  });

  return { ...post, blocks };
}

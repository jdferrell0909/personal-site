import type { BlogPost, BlogPostFull } from "./types";
import { getLocalBlogPosts, getLocalBlogPost } from "./blog.local";

function notionConfigured(): boolean {
  return !!(process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (notionConfigured()) {
    try {
      const { fetchBlogPosts } = await import("./blog.notion");
      return await fetchBlogPosts();
    } catch (err) {
      console.error("Failed to fetch blog posts from Notion:", err);
    }
  }
  return getLocalBlogPosts();
}

export async function getBlogPost(
  slug: string
): Promise<BlogPostFull | null> {
  if (notionConfigured()) {
    try {
      const { fetchBlogPost } = await import("./blog.notion");
      return await fetchBlogPost(slug);
    } catch (err) {
      console.error("Failed to fetch blog post from Notion:", err);
    }
  }
  return getLocalBlogPost(slug);
}

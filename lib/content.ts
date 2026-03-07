import type { SiteContent } from "./types";
import localContent from "./content.local";

export async function getContent(): Promise<SiteContent> {
  // Use Notion if configured, otherwise fall back to local
  if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
    try {
      const { fetchNotionContent } = await import("./content.notion");
      return await fetchNotionContent();
    } catch (err) {
      console.error("Failed to fetch from Notion, using local content:", err);
      return localContent;
    }
  }

  return localContent;
}

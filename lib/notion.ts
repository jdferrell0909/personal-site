/* eslint-disable @typescript-eslint/no-explicit-any */

const NOTION_VERSION = "2022-06-28";

function headers(): Record<string, string> {
  return {
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

export async function queryDatabase(
  databaseId: string,
  filter?: any
): Promise<any[]> {
  const body: any = { page_size: 100 };
  if (filter) body.filter = filter;

  const res = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    { method: "POST", headers: headers(), body: JSON.stringify(body), next: { revalidate: 60 } }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message ?? `Notion API error: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

export async function getBlockChildren(pageId: string): Promise<any[]> {
  const res = await fetch(
    `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
    { headers: headers(), next: { revalidate: 60 } }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message ?? `Notion API error: ${res.status}`);
  }

  const data = await res.json();
  return data.results;
}

// Property helpers

export function text(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title")
    return (prop.title ?? []).map((t: any) => t.plain_text).join("");
  if (prop.type === "rich_text")
    return (prop.rich_text ?? []).map((t: any) => t.plain_text).join("");
  return "";
}

export function select(prop: any): string {
  if (prop?.type === "select" && prop.select) return prop.select.name;
  return "";
}

export function multiSelect(prop: any): string[] {
  if (prop?.type === "multi_select")
    return prop.multi_select.map((s: any) => s.name);
  return [];
}

export function num(prop: any): number {
  if (prop?.type === "number" && prop.number !== null) return prop.number;
  return 0;
}

export function url(prop: any): string {
  if (prop?.type === "url" && prop.url) return prop.url;
  return "";
}

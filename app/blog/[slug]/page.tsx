import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import NotionRenderer from "@/components/NotionRenderer";
import config from "@/site.config";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — ${config.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Top nav */}
      <nav className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-primary"
          >
            {config.name}
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            &larr; All Posts
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-12">
          <time className="text-xs font-medium uppercase tracking-wide text-muted">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-light px-3 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <NotionRenderer blocks={post.blocks} />

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </main>
    </>
  );
}

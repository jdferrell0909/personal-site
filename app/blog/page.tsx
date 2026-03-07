import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — James Ferrell",
  description:
    "Thoughts on software, web development, and building better tools for businesses.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      {/* Simple top nav for blog pages */}
      <nav className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-primary"
          >
            James Ferrell
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            &larr; Home
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <AnimateOnScroll>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Blog
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Writing
          </h1>
          <p className="mb-12 text-lg text-muted">
            Thoughts on software, building for businesses, and using AI as a
            tool &mdash; not a crutch.
          </p>
        </AnimateOnScroll>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <AnimateOnScroll key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="rounded-2xl border border-border p-6 transition-all group-hover:border-accent/20 group-hover:shadow-lg sm:p-8">
                    <time className="text-xs font-medium uppercase tracking-wide text-muted">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-xl font-bold text-primary transition-colors group-hover:text-accent sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
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
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

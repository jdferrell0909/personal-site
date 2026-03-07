import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import config from "@/site.config";
import { getContent } from "@/lib/content";

export const revalidate = 60;

export async function generateStaticParams() {
  const content = await getContent();
  return content.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent();
  const project = content.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ${config.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContent();
  const projectIndex = content.projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = content.projects[projectIndex];
  const nextProject =
    content.projects[(projectIndex + 1) % content.projects.length];

  return (
    <>
      <nav className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-primary"
          >
            {config.name}
          </Link>
          <Link
            href="/#projects"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            &larr; All Projects
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Project
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          {project.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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

        <div className="space-y-6 text-base leading-relaxed text-muted">
          <p>{project.fullDescription ?? project.description}</p>
        </div>

        {/* Next project */}
        {nextProject.slug !== project.slug && (
          <div className="mt-16 border-t border-border pt-8 flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
            >
              &larr; All Projects
            </Link>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-sm font-medium text-accent transition-colors hover:text-accent-dark"
            >
              Next: {nextProject.title} &rarr;
            </Link>
          </div>
        )}
      </main>
    </>
  );
}

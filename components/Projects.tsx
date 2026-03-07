import type { ProjectItem } from "@/lib/types";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects({ items }: { items: ProjectItem[] }) {
  return (
    <section id="projects" className="bg-light px-6 py-24 sm:py-32">
      <AnimateOnScroll className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Recent work.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((project, i) => (
            <div
              key={project.title}
              className={`stagger-${i + 1} group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg`}
            >
              {/* Image placeholder */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10 text-sm text-muted">
                Project Image
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-light px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

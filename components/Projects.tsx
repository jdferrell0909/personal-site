import type { ProjectItem } from "@/lib/types";
import AnimateOnScroll from "./AnimateOnScroll";

function EcommerceIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 p-6">
      <div className="w-full max-w-[200px] space-y-3">
        {/* Storefront header */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-accent/30" />
          <svg className="h-5 w-5 text-accent/50" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square rounded-lg bg-accent/20" />
          <div className="aspect-square rounded-lg bg-accent/15" />
          <div className="aspect-square rounded-lg bg-accent/15" />
          <div className="aspect-square rounded-lg bg-accent/20" />
        </div>
        {/* Price tags */}
        <div className="flex gap-2">
          <div className="h-2 w-10 rounded bg-accent/25" />
          <div className="h-2 w-10 rounded bg-accent/25" />
        </div>
      </div>
    </div>
  );
}

function SchedulingIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-6">
      <div className="w-full max-w-[200px] space-y-3">
        {/* Calendar header */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-20 rounded bg-emerald-500/30" />
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded bg-emerald-500/20" />
            <div className="h-3 w-3 rounded bg-emerald-500/20" />
          </div>
        </div>
        {/* Day labels */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`label-${i}`} className="h-1.5 rounded bg-emerald-500/15" />
          ))}
        </div>
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const isHighlighted = [8, 9, 10, 15, 22, 23].includes(i);
            return (
              <div
                key={i}
                className={`aspect-square rounded ${
                  isHighlighted
                    ? "bg-emerald-500/40"
                    : "bg-emerald-500/10"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DashboardIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-warm/10 to-accent-warm/5 p-6">
      <div className="w-full max-w-[200px] space-y-3">
        {/* Dashboard header */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-14 rounded bg-accent-warm/30" />
          <div className="h-2 w-8 rounded bg-accent-warm/20" />
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-1.5 h-16">
          <div className="w-full rounded-t bg-accent-warm/25" style={{ height: "40%" }} />
          <div className="w-full rounded-t bg-accent-warm/35" style={{ height: "65%" }} />
          <div className="w-full rounded-t bg-accent-warm/45" style={{ height: "85%" }} />
          <div className="w-full rounded-t bg-accent-warm/35" style={{ height: "55%" }} />
          <div className="w-full rounded-t bg-accent-warm/50" style={{ height: "100%" }} />
          <div className="w-full rounded-t bg-accent-warm/30" style={{ height: "45%" }} />
          <div className="w-full rounded-t bg-accent-warm/40" style={{ height: "70%" }} />
        </div>
        {/* Line graph hint */}
        <svg className="h-8 w-full" viewBox="0 0 200 32" fill="none">
          <polyline
            points="0,28 30,20 60,24 90,12 120,16 150,6 180,10 200,4"
            stroke="rgb(245 158 11 / 0.4)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        {/* Stat pills */}
        <div className="flex gap-2">
          <div className="h-2 w-12 rounded bg-accent-warm/20" />
          <div className="h-2 w-8 rounded bg-accent-warm/20" />
          <div className="h-2 w-10 rounded bg-accent-warm/20" />
        </div>
      </div>
    </div>
  );
}

const illustrations: Record<string, React.FC> = {
  ecommerce: EcommerceIllustration,
  scheduling: SchedulingIllustration,
  dashboard: DashboardIllustration,
};

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
          {items.map((project, i) => {
            const Illustration = project.illustration
              ? illustrations[project.illustration]
              : null;

            return (
              <div
                key={project.title}
                className={`stagger-${i + 1} group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg`}
              >
                {/* Illustration area */}
                <div className="h-48 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  {Illustration ? (
                    <Illustration />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10 text-sm text-muted">
                      Project
                    </div>
                  )}
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
            );
          })}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

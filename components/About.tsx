import type { AboutContent } from "@/lib/types";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About({ content }: { content: AboutContent }) {
  return (
    <section id="about" className="bg-light px-6 py-24 sm:py-32">
      <AnimateOnScroll className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Initials avatar */}
          <div className="flex justify-center lg:order-2">
            <div className="flex h-80 w-80 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent ring-4 ring-accent/20 ring-offset-4 ring-offset-light sm:h-96 sm:w-96">
              <span className="text-7xl font-bold tracking-tight text-white sm:text-8xl">
                JF
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {content.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {content.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

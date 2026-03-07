import Image from "next/image";
import type { AboutContent } from "@/lib/types";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About({ content }: { content: AboutContent }) {
  return (
    <section id="about" className="relative bg-light px-6 py-16 sm:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <AnimateOnScroll className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Headshot photo — replace /images/james-headshot.jpg with your own */}
          <div className="flex justify-center lg:order-2">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl ring-4 ring-accent/20 ring-offset-4 ring-offset-light sm:h-96 sm:w-96">
              <Image
                src="/images/james-headshot.jpg"
                alt="James Ferrell, Software Consultant"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 320px, 384px"
                priority
              />
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

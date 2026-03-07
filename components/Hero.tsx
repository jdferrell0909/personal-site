import type { HeroContent } from "@/lib/types";

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-primary px-6 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]" />

      {/* Dot pattern overlay */}
      <div className="dot-pattern absolute inset-0" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          {content.tagline}
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {content.heading}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          {content.description}
        </p>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30"
        >
          {content.ctaText}
        </a>
      </div>
    </section>
  );
}

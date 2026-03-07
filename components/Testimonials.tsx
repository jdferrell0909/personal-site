import AnimateOnScroll from "./AnimateOnScroll";

// TODO: Replace with real client testimonials
const testimonials = [
  {
    quote:
      "James took our rough idea and turned it into a polished product in weeks, not months. The attention to detail and communication throughout was outstanding.",
    name: "Client Name",
    role: "CEO, Company Name",
    initials: "JD",
  },
  {
    quote:
      "Our scheduling system was a mess before James stepped in. He built us something that just works \u2014 no-shows dropped by 40% in the first month.",
    name: "Client Name",
    role: "Operations Director, Company Name",
    initials: "SM",
  },
  {
    quote:
      "Working with James felt like having a senior engineer on the team. He didn\u2019t just write code \u2014 he helped us think through the entire problem.",
    name: "Client Name",
    role: "Founder, Company Name",
    initials: "AK",
  },
];

function StarIcon() {
  return (
    <svg
      className="h-5 w-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <AnimateOnScroll className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            What clients say.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`stagger-${i + 1} rounded-2xl border border-border bg-white p-8`}
            >
              <div className="mb-4 flex gap-1">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

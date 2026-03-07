import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "500K+", label: "Users Impacted" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-primary px-6 py-16 sm:py-20">
      <AnimateOnScroll className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`stagger-${i + 1}`}>
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

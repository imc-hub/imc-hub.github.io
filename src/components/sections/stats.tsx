const stats = [
  { value: "73%", label: "of graduates lack corporate readiness", source: "Industry Report 2025" },
  { value: "$41B", label: "spent annually on corporate retraining", source: "Training Industry" },
  { value: "3x", label: "faster skill acquisition with applied learning", source: "IMC Research" },
  { value: "89%", label: "of IMC learners report higher confidence", source: "User Survey" },
];

export function StatsSection() {
  return (
    <section className="bg-imc-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            The gap is widening. We&apos;re closing it.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-700/50 bg-imc-navy-light/50 p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-imc-teal sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "IMC transformed my approach to business. The simulator gave me confidence I never got from textbooks. I walked into my first job ready to contribute from day one.",
    name: "Emad Anas",
    role: "Data Analyst",
    segment: "University Student",
  },
  {
    quote:
      "After 15 years in marketing, I needed to pivot to tech. IMC's structured tracks and real project experience made the transition possible in under 6 months.",
    name: "Mohamed Saad",
    role: "Product Manager",
    segment: "Career Changer",
  },
  {
    quote:
      "We rolled out IMC to 200+ employees. Engagement is 4x higher than our previous L&D platform, and we can actually measure skill improvement.",
    name: "Ahmed Sabry",
    role: "Head of L&D",
    segment: "HR Department",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
            Social Proof
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real outcomes from real people
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6 sm:p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-imc-gold text-imc-gold"
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-imc-navy text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs font-medium text-imc-teal">
                    {t.segment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "IMC's corporate training program gave me practical data analysis and AI skills I never got from my degree. I walked into my first job ready to contribute from day one.",
    name: "Emad Anas",
    role: "Data Analyst",
    segment: "Corporate & Business Training",
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
      "We rolled out IMC's corporate solutions to 200+ employees. Engagement is 4x higher than our previous L&D platform, and we can actually measure skill improvement across teams.",
    name: "Ahmed Sabry",
    role: "Head of L&D",
    segment: "Corporate Solutions — B2B",
  },
  {
    quote:
      "OCTRI's mental toughness program transformed how I approach high-pressure situations at work. The discipline from triathlon training carries directly into executive performance.",
    name: "Sarah Mansour",
    role: "Senior Consultant",
    segment: "Athletic Performance — OCTRI",
  },
  {
    quote:
      "The gamified learning platform made our onboarding process 60% more engaging. IMC's digital solutions team built exactly what our organization needed.",
    name: "Karim Fathy",
    role: "HR Director",
    segment: "Digital Solutions & Technology",
  },
  {
    quote:
      "As a high school student, I had no idea what career path suited me. IMC's assessment and training programs helped me discover my strengths and build real skills before university.",
    name: "Nour Hassan",
    role: "University Student",
    segment: "Career Discovery",
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
            Real outcomes across our ecosystem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From corporate training to athletic performance and digital solutions —
            measurable impact across all three business units.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

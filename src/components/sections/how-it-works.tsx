import { ClipboardCheck, GraduationCap, Trophy, Briefcase } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Discover",
    description:
      "Take our free career assessment to identify your strengths, gaps, and ideal professional path.",
    detail: "15-minute adaptive assessment",
  },
  {
    step: 2,
    icon: GraduationCap,
    title: "Train",
    description:
      "Build skills through structured courses, applied corporate programs, and hands-on projects.",
    detail: "Academy + Corporate Solutions + OCTRI",
  },
  {
    step: 3,
    icon: Trophy,
    title: "Compete",
    description:
      "Benchmark your capabilities against peers and climb the corporate readiness leaderboard.",
    detail: "Global & company rankings",
  },
  {
    step: 4,
    icon: Briefcase,
    title: "Perform",
    description:
      "Graduate with a corporate readiness score, verified certifications, and a portfolio of real outcomes.",
    detail: "Job-ready and certified",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-secondary/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From assessment to readiness in four steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A structured path that takes you from uncertainty to corporate
            readiness — with measurable proof of your capabilities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-imc-navy">
                  <Icon className="h-7 w-7 text-imc-teal" />
                </div>

                <div className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-imc-teal/10 text-xs font-bold text-imc-teal">
                  {item.step}
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-2 text-xs font-medium text-imc-teal">
                  {item.detail}
                </p>

                {item.step < 4 && (
                  <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-0.5 w-[calc(100%-4rem)] bg-gradient-to-r from-border to-transparent lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ClipboardCheck, GraduationCap, Dumbbell, MonitorSmartphone } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "Take our free capability assessment to identify your strengths, development areas, and optimal path across our three business units.",
    detail: "15-minute adaptive assessment",
  },
  {
    step: 2,
    icon: GraduationCap,
    title: "Train",
    description:
      "Build professional capabilities through structured corporate training — data analysis, AI tools, business skills, and career readiness.",
    detail: "Corporate & Business Training",
  },
  {
    step: 3,
    icon: Dumbbell,
    title: "Strengthen",
    description:
      "Develop mental toughness and physical resilience through OCTRI's athletic performance and executive endurance programs.",
    detail: "Athletic Performance — OCTRI",
  },
  {
    step: 4,
    icon: MonitorSmartphone,
    title: "Scale",
    description:
      "Leverage our digital solutions — gamified platforms, mobile apps, and technology-enabled systems — to accelerate development at scale.",
    detail: "Digital Solutions & Technology",
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
            A structured path across our three business units — taking you from
            uncertainty to measurable readiness with proof of your capabilities.
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

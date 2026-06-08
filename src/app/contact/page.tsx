import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  Mail,
  MapPin,
  MessageSquare,
  Building2,
  Users,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Contact Us — IMC Intelligent Mastery Coaching",
  description:
    "Get in touch with the IMC team. We're here to help with questions about our platform, partnerships, or corporate training programs.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support",
    detail: "hello@imc-hub.com",
    action: "mailto:hello@imc-hub.com",
  },
  {
    icon: Building2,
    title: "Sales & Partnerships",
    description: "Corporate training and institutional partnerships",
    detail: "sales@imc-hub.com",
    action: "mailto:sales@imc-hub.com",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us by appointment",
    detail: "Cairo, EG",
    action: null,
  },
];

const faqs = [
  {
    question: "How do I get started with IMC?",
    answer:
      "Take our free 15-minute career assessment. It will identify your strengths, gaps, and recommend the best learning path for your goals. No credit card required.",
  },
  {
    question: "Is IMC suitable for high school students?",
    answer:
      "Yes. Our Career Discovery track is designed specifically for pupils aged 13-18. It helps identify academic and professional identity before university decisions.",
  },
  {
    question: "Can my company use IMC for employee training?",
    answer:
      "Absolutely. We offer corporate plans with team management, custom training assignments, analytics dashboards, and enterprise SSO integration. Contact our sales team for a demo.",
  },
  {
    question: "What is the Corporate Readiness Score?",
    answer:
      "It's a proprietary metric (0-100) that measures your preparedness for corporate environments based on skills, simulation performance, course completion, project experience, and engagement.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. We offer a 14-day refund window for paid subscriptions, provided you haven't accessed premium content. Enterprise clients have custom refund terms.",
  },
  {
    question: "How does the Corporate Simulator work?",
    answer:
      "You're placed in realistic business scenarios where you make P&L decisions, manage teams, and compete on leaderboards. Each simulation has multiple decision points with real financial consequences.",
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-imc-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Contact Us
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              We&apos;re here to help
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Questions about IMC? Want to explore corporate partnerships? Need
              technical support? Reach out and we&apos;ll respond within 24
              hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const Wrapper = method.action ? "a" : "div";
              const wrapperProps = method.action
                ? { href: method.action, className: "group cursor-pointer" }
                : {};

              return (
                <div
                  key={method.title}
                  className="rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-imc-teal/30"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-imc-navy">
                    <Icon className="h-5 w-5 text-imc-teal" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  {method.action ? (
                    <Wrapper {...wrapperProps}>
                      <p className="mt-2 text-sm font-medium text-imc-teal group-hover:underline">
                        {method.detail}
                      </p>
                    </Wrapper>
                  ) : (
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {method.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
                Send a Message
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Fill out the form below
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    placeholder="Jane"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    placeholder="Doe"
                    required
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiry_type">Inquiry Type</Label>
                <select
                  id="inquiry_type"
                  name="inquiry_type"
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="enterprise">Enterprise Training</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  required
                  rows={5}
                  maxLength={5000}
                />
              </div>

              <Button
                type="button"
                size="lg"
                className="w-full bg-imc-teal text-white hover:bg-imc-teal-dark"
                asChild
              >
                <a href="mailto:hello@imc-hub.com">Send Message</a>
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 24 hours. For urgent matters, email
                us directly at hello@imc-hub.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
                FAQ
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border/60 bg-card p-6"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

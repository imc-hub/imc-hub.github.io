import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";
import {
  Home,
  Info,
  GraduationCap,
  ClipboardCheck,
  Phone,
  HelpCircle,
  Shield,
  FileText,
  Cookie,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap — Navigate IMC",
  description:
    "Browse the complete IMC website sitemap. Find every page including About, Academy, Assessment, Contact, FAQ, Privacy Policy, Terms, and more.",
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/sitemap",
    title: "Sitemap — IMC Intelligent Mastery Coaching",
    description:
      "Complete overview of all IMC pages. Navigate to About, Academy, Assessment, Contact, FAQ, and legal pages.",
  },
};

interface SitemapSection {
  title: string;
  icon: LucideIcon;
  description: string;
  links: { href: string; label: string; description: string }[];
}

const sitemapSections: SitemapSection[] = [
  {
    title: "Main Pages",
    icon: Home,
    description: "Core pages to get started with IMC",
    links: [
      {
        href: "/",
        label: "Homepage",
        description:
          "Explore IMC's mission, ecosystem, pricing, and success stories.",
      },
      {
        href: "/about",
        label: "About Us",
        description:
          "Learn about IMC's mission, vision, principles, and leadership team.",
      },
      {
        href: "/contact",
        label: "Contact",
        description:
          "Get in touch with the IMC team for inquiries and partnerships.",
      },
    ],
  },
  {
    title: "Programs & Learning",
    icon: GraduationCap,
    description: "Structured learning paths and skill development tools",
    links: [
      {
        href: "/academy",
        label: "IMC Academy",
        description:
          "Industry-built courses including Rx Challenger for pharmacy professionals.",
      },
      {
        href: "/assessment",
        label: "Corporate Readiness Assessment",
        description:
          "20-question quiz to measure your workplace readiness across 5 key areas.",
      },
    ],
  },
  {
    title: "Support & Help",
    icon: HelpCircle,
    description: "Resources to answer your questions",
    links: [
      {
        href: "/faq",
        label: "FAQ",
        description:
          "Answers to frequently asked questions about IMC programs and platform.",
      },
    ],
  },
  {
    title: "Legal",
    icon: Shield,
    description: "Policies governing the use of our website and services",
    links: [
      {
        href: "/privacy",
        label: "Privacy Policy",
        description:
          "How we collect, use, and protect your personal information.",
      },
      {
        href: "/terms",
        label: "Terms of Service",
        description:
          "The legal terms and conditions for using IMC services.",
      },
      {
        href: "/cookies",
        label: "Cookie Declaration",
        description:
          "Information about how IMC uses cookies and tracking technologies.",
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Sitemap — IMC Intelligent Mastery Coaching"
        description="Complete sitemap of the IMC website. Navigate to all pages including About, Academy, Assessment, Contact, FAQ, and legal pages."
        url="https://imc-hub.github.io/sitemap"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "Sitemap", item: "https://imc-hub.github.io/sitemap" },
        ]}
      />

      {/* Hero */}
      <section aria-label="Sitemap" className="bg-imc-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Navigation
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Sitemap
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A complete overview of every page on the IMC website. Find what
              you&apos;re looking for quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {sitemapSections.map((section) => {
              const Icon = section.icon;
              return (
                <nav
                  key={section.title}
                  aria-labelledby={`sitemap-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-xl border border-border/60 bg-card p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-imc-navy">
                      <Icon className="h-5 w-5 text-imc-teal" />
                    </div>
                    <div>
                      <h2
                        id={`sitemap-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-lg font-bold text-foreground"
                      >
                        {section.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group block rounded-lg border border-transparent px-3 py-2.5 -mx-3 transition-colors hover:border-border/60 hover:bg-secondary/50 focus-visible:border-imc-teal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imc-teal/20"
                        >
                          <span className="text-sm font-medium text-foreground transition-colors group-hover:text-imc-teal">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block text-sm text-muted-foreground">
                            {link.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Can&apos;t find what you need?
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Reach out to our team and we&apos;ll help you find the right
              resource.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </a>
            <a
              href="/assessment"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Start Free Assessment
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

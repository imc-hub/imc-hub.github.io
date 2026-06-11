"use client";

import Link from "next/link";
import { HelpCircle, ChevronDown, Search, MessageSquare } from "lucide-react";
import { useState, useMemo, useCallback } from "react";

/* ── FAQ Data ── */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General Information",
    items: [
      {
        question: "What is IMC — Intelligent Mastery Coaching?",
        answer:
          "IMC (Intelligent Mastery Coaching) is a modern coaching platform that closes the gap between what people learn and what companies actually need. We combine structured learning paths, applied corporate programs, and skill assessments to prepare students, career changers, and professionals for workplace success. Our flagship programs include the IMC Academy, the Corporate Readiness Assessment, and specialized solutions like Rx Challenger for pharmacy professionals.",
      },
      {
        question: "Who is IMC designed for?",
        answer:
          "IMC serves three primary audiences: (1) Students and recent graduates who want to enter the workforce with practical, job-ready skills; (2) Career changers transitioning into new industries who need to quickly build relevant competencies; and (3) Companies and HR departments looking for measurable ways to assess and develop employee readiness. Whether you are preparing for your first corporate role or pivoting mid-career, IMC provides the structure and tools to accelerate your growth.",
      },
      {
        question:
          "What makes IMC different from other online learning platforms?",
        answer:
          "Unlike traditional platforms that focus on passive video content, IMC uses an active learning approach built around three pillars: structured coaching, applied corporate solutions, and measurable outcomes. Every program leads to a verified result — whether that is a Corporate Readiness Score, a program completion badge, or a course certificate. We do not measure success by content consumed; we measure it by skills demonstrated and outcomes achieved.",
      },
      {
        question: "Where is IMC based?",
        answer:
          "IMC is headquartered in Giza, Egypt, and serves a worldwide audience. Our team operates globally, and all of our programs are delivered online, making them accessible to learners and organizations in any time zone.",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    items: [
      {
        question: "What programs does IMC offer?",
        answer:
          "IMC offers three core programs: (1) IMC Academy — structured, industry-built courses for professional skill development, starting with the Rx Challenger prescription-deciphering course for pharmacy professionals; (2) Corporate Readiness Assessment — a 20-question evaluation across five competency areas that generates a personalized readiness score and improvement roadmap; and (3) Experiential Corporate Learning — immersive applied scenarios where professionals practice real workplace tasks in a risk-free environment. Each program is designed to deliver measurable skill improvement.",
      },
      {
        question: "What is the IMC Corporate Readiness Assessment?",
        answer:
          "The Corporate Readiness Assessment is a free, 20-question multiple-choice quiz that evaluates your preparedness across five key areas: business acumen, professional skills, technical literacy, workplace communication, and corporate mindset. The assessment takes approximately 10 minutes to complete and produces a personalized Corporate Readiness Score along with specific, actionable recommendations for improvement. It is designed for students, job seekers, and working professionals who want an honest benchmark of their workplace readiness.",
      },
      {
        question: "What is Rx Challenger?",
        answer:
          'Rx Challenger is an advanced educational tool designed for pharmacy graduates and practicing pharmacists to master prescription reading. Using real-world, anonymized prescription scenarios, users develop skills in drug recognition, dosage interpretation, clinical decision-making, and patient diagnosis analysis. It is available as a mobile application on Google Play and is also offered as a featured course within the IMC Academy platform. The "Rx" format supports progressive difficulty levels, making it suitable for both beginners and experienced professionals looking to sharpen their skills.',
      },
      {
        question: "Do you offer corporate or B2B training programs?",
        answer:
          "Yes. IMC works directly with companies, HR departments, and training departments to deliver customized corporate readiness programs. These include bulk assessment access for talent acquisition, tailored learning paths aligned to specific roles, and team-level reporting on skill gaps and progress. If you are interested in a corporate partnership, please reach out through our Contact page to schedule a consultation.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Payments",
    items: [
      {
        question: "Is IMC free to use?",
        answer:
          "Yes. The IMC Corporate Readiness Assessment is completely free, and the foundational content in IMC Academy — including Rx Challenger — is available at no cost. We believe everyone deserves access to quality career preparation tools regardless of their financial situation. As we expand our course catalog and introduce premium corporate solutions, those advanced modules will have associated pricing, but core readiness tools will remain free.",
      },
      {
        question: "Will there be paid programs in the future?",
        answer:
          "We are developing advanced corporate solutions and specialized certification tracks that will be offered as paid premium programs. These will provide deeper, more personalized learning experiences with features such as mentor feedback, advanced analytics, and industry-recognized credentials. Free offerings — including the Corporate Readiness Assessment and foundational Academy content — will always remain available. Paid programs will be clearly labeled, and pricing information will be published on the relevant program pages before launch.",
      },
      {
        question: "How does billing work for corporate accounts?",
        answer:
          "Corporate and B2B billing is handled on a custom basis depending on the size of your organization, the number of users, and the specific programs you need. We offer annual subscription packages and per-seat pricing models. Contact our sales team at imc.hub.eg@gmail.com to receive a tailored proposal for your organization.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Projects & Delivery",
    items: [
      {
        question: "How are IMC courses delivered?",
        answer:
          "All IMC courses and assessments are delivered online through our web platform and mobile applications. There is no requirement for in-person attendance or scheduled class times. You progress through material at your own pace, on your own schedule. The platform tracks your progress, scores, and completion status so you can pick up where you left off at any time. For mobile-first experiences like Rx Challenger, courses are available as native apps on Google Play.",
      },
      {
        question: "How long does it take to complete a program?",
        answer:
          "Program length varies by offering. The Corporate Readiness Assessment takes approximately 10 minutes. Individual IMC Academy courses range from 1 to 10 hours of active learning, depending on the topic and depth. Rx Challenger is designed for ongoing practice — users can complete individual scenarios in 5 to 15 minutes and continue building skills over weeks or months. Each course page includes an estimated completion time so you can plan accordingly.",
      },
      {
        question:
          "Do I receive a certificate or credential after completing a program?",
        answer:
          "Yes. Upon completing an IMC Academy course or passing a corporate solutions module, you receive a digital certificate of completion that you can share on LinkedIn or include in your professional portfolio. Corporate Readiness Assessment results can also be shared with employers as a verified readiness benchmark. As we expand, we are working toward industry-recognized credentials that carry weight with hiring managers and HR departments globally.",
      },
      {
        question: "Can I access IMC programs on my phone?",
        answer:
          "Yes. The IMC website and Academy platform are fully responsive and work on smartphones, tablets, laptops, and desktops. Rx Challenger is available as a native Android app via Google Play. We are also developing iOS support and Progressive Web App (PWA) capabilities for offline access to course materials, ensuring you can learn wherever you are.",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Communication",
    items: [
      {
        question: "How do I get help if I have a technical issue?",
        answer:
          "For technical issues, reach out to us at imc.hub.eg@gmail.com with a description of the problem, the device and browser you are using, and any screenshots that might help us diagnose the issue. We aim to respond within one business day. You can also use the Contact form on our website for a structured support request.",
      },
      {
        question: "Is there a community or peer support available?",
        answer:
          "We are actively building a learner community where IMC participants can connect, share experiences, study together, and provide peer feedback. While the full community platform is in development, current learners can connect with us directly through our support channels and will receive early access to community features as they launch.",
      },
      {
        question: "How do I provide feedback or suggest new features?",
        answer:
          "We welcome and actively encourage user feedback. You can submit suggestions through our Contact page, email us directly at imc.hub.eg@gmail.com, or use any feedback forms within the platform. Every piece of feedback is reviewed by our team, and the most requested features are prioritized in our development roadmap.",
      },
    ],
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    items: [
      {
        question: "How does IMC handle my personal data?",
        answer:
          "IMC takes data privacy seriously. We collect only the information necessary to deliver our programs — such as your email address, assessment results, and learning progress. We never sell your personal data to third parties. You can review our full data practices, including what we collect, why we collect it, and how you can request deletion, by reading our Privacy Policy. All data is stored using industry-standard encryption and security practices.",
      },
      {
        question: "Can I delete my account and data?",
        answer:
          "Yes. You have full control over your data. You can request complete account deletion at any time by emailing us at imc.hub.eg@gmail.com with the subject line \"Account Deletion Request.\" We will permanently remove your account, assessment history, and all associated personal data within 30 days, in compliance with applicable data protection regulations.",
      },
      {
        question: "Is my assessment data shared with employers?",
        answer:
          "No. Your Corporate Readiness Score and assessment results are private by default. We never share individual results with employers, recruiters, or any third party without your explicit consent. If you choose to share your results — for example, by sending your score report to a potential employer — that is entirely your decision and your control.",
      },
    ],
  },
  {
    id: "contact",
    label: "Account & Contact Information",
    items: [
      {
        question: "How can I contact the IMC team?",
        answer:
          "You can reach us through several channels: (1) Email us at imc.hub.eg@gmail.com for general inquiries or support; (2) Email imc.hub.eg@gmail.com for corporate and B2B inquiries; (3) Use the Contact form on our website for structured messages; or (4) Connect with us through the Google Play listing for Rx Challenger. We aim to respond to all inquiries within one business day.",
      },
      {
        question: "Do you offer phone or video consultations?",
        answer:
          "Currently, our primary communication channels are email and the website contact form. For corporate and B2B inquiries, we can arrange video consultations to discuss your organization's specific needs. Reach out to imc.hub.eg@gmail.com to schedule a call.",
      },
      {
        question:
          "How do I stay informed about new programs and updates?",
        answer:
          "New course announcements, feature updates, and program launches are communicated through our website and email newsletter. You can also follow our Google Play listing for Rx Challenger updates. The best way to stay current is to visit our Academy page regularly, where new courses are published as they become available.",
      },
    ],
  },
];

/* ── Helpers ── */

function slugify(text: string): string {
  return text
    .slice(0, 50)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ── Accordion Item Component ── */

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItem & { isOpen: boolean; onToggle: () => void }) {
  const slug = slugify(question);
  const buttonId = `faq-btn-${slug}`;
  const panelId = `faq-panel-${slug}`;

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start gap-4 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-imc-teal focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded-lg px-2 -mx-2"
        >
          <span className="flex-1 text-base font-semibold text-foreground group-hover:text-imc-teal transition-colors">
            {question}
          </span>
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
              isOpen
                ? "bg-imc-teal border-imc-teal text-white rotate-180"
                : "text-muted-foreground border-border/60"
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-2 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ── Category Accordion ── */

function CategorySection({ category }: { category: FaqCategory }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = useCallback((question: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setOpenItems(new Set(category.items.map((item) => item.question)));
  }, [category.items]);

  const collapseAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          <span
            className="inline-flex h-8 w-1 rounded-full bg-imc-teal"
            aria-hidden="true"
          />
          {category.label}
          <span className="text-sm font-normal text-muted-foreground">
            ({category.items.length})
          </span>
        </h2>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={expandAll}
            className="text-xs font-medium text-imc-teal hover:text-imc-teal-dark transition-colors"
          >
            Expand all
          </button>
          <span className="text-muted-foreground/40">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs font-medium text-imc-teal hover:text-imc-teal-dark transition-colors"
          >
            Collapse all
          </button>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-border/60 bg-card px-4 sm:px-6">
        {category.items.map((item) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(item.question)}
            onToggle={() => toggleItem(item.question)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Content Component ── */

export function FaqContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return faqCategories;

    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  const totalQuestions = faqCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <>
      {/* Hero Section */}
      <section aria-label="FAQ" className="bg-imc-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-imc-teal/15">
              <HelpCircle className="h-7 w-7 text-imc-teal" />
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Everything you need to know about IMC — Intelligent Mastery
              Coaching. Can&apos;t find what you&apos;re looking for? Reach out
              to our team anytime.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-lg">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <label htmlFor="faq-search" className="sr-only">
                  Search frequently asked questions
                </label>
                <input
                  id="faq-search"
                  type="search"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-xl border border-slate-600 bg-slate-800/60 pl-11 pr-4 text-sm text-white placeholder:text-slate-400 focus:border-imc-teal focus:outline-none focus:ring-2 focus:ring-imc-teal/40"
                />
              </div>
              {searchQuery && (
                <p className="mt-3 text-xs text-slate-400">
                  Showing {filteredCategories.reduce(
                    (s, c) => s + c.items.length,
                    0
                  )}{" "}
                  result
                  {filteredCategories.reduce((s, c) => s + c.items.length, 0) !==
                  1
                    ? "s" : ""}{" "}
                  for &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Controls bar */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {faqCategories.length} categories · {totalQuestions} questions
            </p>
          </div>

          {/* Categories */}
          {filteredCategories.length === 0 ? (
            <div className="rounded-xl border border-border/60 bg-card py-16 text-center">
              <Search
                className="mx-auto h-10 w-10 text-muted-foreground/40"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-lg font-semibold text-foreground">
                No results found
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search terms or browse all categories below.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-4 inline-flex items-center text-sm font-medium text-imc-teal hover:text-imc-teal-dark transition-colors"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredCategories.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-imc-navy">
              <MessageSquare
                className="h-5 w-5 text-imc-teal"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We&apos;re here to help. Reach out to our team and we&apos;ll get
              back to you within one business day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-imc-teal px-6 text-sm font-medium text-white transition-colors hover:bg-imc-teal-dark"
              >
                Contact Us
              </Link>
              <Link
                href="/assessment"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Try the Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

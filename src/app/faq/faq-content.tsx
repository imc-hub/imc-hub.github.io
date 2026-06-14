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
    label: "About IMC",
    items: [
      {
        question: "What is IMC — Intelligent Mastery Coaching?",
        answer:
          "IMC (Intelligent Mastery Coaching) is a tech-enabled ecosystem that closes the gap between education and market reality. We integrate three business units — Corporate & Business Training (B2C & B2B), Athletic Performance (OCTRI), and Digital Solutions & Technology — to build human potential through strategic intellect, digital mastery, and physical & mental endurance. We prepare individuals and organizations for measurable success across academic, professional, entrepreneurial, and corporate domains.",
      },
      {
        question: "Who are your solutions designed for?",
        answer:
          "IMC serves three primary audiences: (1) Students and recent graduates who want to enter the workforce with practical, job-ready skills; (2) Career changers transitioning into new industries who need to quickly build relevant competencies; and (3) Companies, HR departments, and training teams looking for measurable ways to assess and develop employee readiness. Whether you are preparing for your first corporate role or pivoting mid-career, IMC provides the structure and tools to accelerate your growth.",
      },
      {
        question:
          "What makes IMC different from other learning and development platforms?",
        answer:
          "Unlike traditional platforms that focus on passive video content, IMC is a technology-enabled ecosystem integrating three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology. We use gamified EdTech platforms, real-world case simulations, and applied learning methodologies to build capability — not just deliver content. Every program leads to a verified result, whether that is a Capability Score, a program completion badge, or a digital credential.",
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
    label: "Corporate Solutions & Services",
    items: [
      {
        question: "What services does IMC provide?",
        answer:
          "IMC provides a comprehensive suite of corporate development services: (1) Corporate Solutions — tailored programs addressing specific organizational needs; (2) Business Transformation Solutions — strategic initiatives to drive organizational change; (3) Workforce Development — programs that build practical, job-ready skills across teams; (4) Talent Development — targeted growth paths for high-potential employees; (5) Organizational Development — culture, structure, and capability building; (6) Corporate Training — role-specific and industry-specific training modules; (7) Business Performance Improvement — data-driven approaches to measurable outcomes; and (8) Consulting & Advisory Services — expert guidance on learning strategy and capability building.",
      },
      {
        question: "What is the IMC Capability & Readiness Assessment?",
        answer:
          "The Capability & Readiness Assessment is a free, 20-question multiple-choice quiz that evaluates preparedness across five key areas: business acumen, professional skills, technical literacy, workplace communication, and corporate mindset. The assessment takes approximately 10 minutes and produces a personalized Capability Score with actionable recommendations mapped to our three business units — Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
      },
      {
        question: "Do you offer customized corporate solutions?",
        answer:
          "Yes. IMC works directly with companies, HR departments, and training teams to design and deliver customized programs aligned to specific organizational goals. These include bulk assessment access for talent acquisition, tailored learning paths for specific roles, team-level reporting on skill gaps and progress, and integrated development programs that align with your business strategy. Every solution is scoped to your organization's unique needs, size, and industry context.",
      },
      {
        question: "How do your training and development programs work?",
        answer:
          "Our training programs follow a structured approach: we begin with an assessment of current capabilities, identify gaps against desired outcomes, design a targeted development path, deliver the program through our online platform, and measure results against defined KPIs. Programs can be delivered as self-paced online learning, facilitated virtual workshops, blended learning experiences, or fully customized corporate engagements depending on your organization's preferences.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Engagement",
    items: [
      {
        question: "Is IMC free to use?",
        answer:
          "Yes. The IMC Corporate Readiness Assessment is completely free, and foundational content in IMC Academy is available at no cost. We believe everyone deserves access to quality career preparation tools regardless of their financial situation. As we expand our corporate solutions and premium programs, advanced modules will have associated pricing, but core readiness tools will remain free.",
      },
      {
        question: "Will there be paid programs in the future?",
        answer:
          "We are developing advanced corporate solutions and specialized certification tracks that will be offered as paid premium programs. These will provide deeper, more personalized learning experiences with features such as mentor feedback, advanced analytics, and industry-recognized credentials. Free offerings — including the Corporate Readiness Assessment and foundational Academy content — will always remain available. Paid programs will be clearly labeled, and pricing information will be published on the relevant program pages before launch.",
      },
      {
        question: "How does billing work for corporate accounts?",
        answer:
          "Corporate and B2B billing is handled on a custom basis depending on the size of your organization, the number of users, and the specific programs you need. We offer annual subscription packages and per-seat pricing models. Contact our team at imc.hub.eg@gmail.com to receive a tailored proposal for your organization.",
      },
      {
        question: "How can organizations work with the IMC team?",
        answer:
          "Organizations can engage with IMC in several ways: (1) Start with our free Corporate Readiness Assessment to benchmark your team's capabilities; (2) Contact us through our Contact page to schedule a consultation and discuss your specific needs; (3) Request a tailored proposal for corporate training, workforce development, or organizational development programs; or (4) Explore our Academy for immediate access to foundational learning content. We work with organizations of all sizes, from startups to enterprises.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Programs & Delivery",
    items: [
      {
        question: "How are IMC programs delivered?",
        answer:
          "All IMC programs and assessments are delivered online through our web platform. There is no requirement for in-person attendance or scheduled class times for self-paced offerings. You progress through material at your own pace, on your own schedule. The platform tracks your progress, scores, and completion status so you can pick up where you left off at any time. For corporate engagements, we also offer facilitated virtual workshops and blended learning formats.",
      },
      {
        question: "How long does it take to complete a program?",
        answer:
          "Program length varies by offering. The Corporate Readiness Assessment takes approximately 10 minutes. Individual IMC Academy courses range from 1 to 10 hours of active learning, depending on the topic and depth. Corporate training programs are scoped based on organizational needs and can range from single-session workshops to multi-week development journeys. Each program page includes an estimated completion time so you can plan accordingly.",
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
          "Yes. The IMC website and Academy platform are fully responsive and work on smartphones, tablets, laptops, and desktops. We also offer Progressive Web App (PWA) capabilities for offline access to course materials, ensuring you can learn wherever you are.",
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
          'Yes. You have full control over your data. You can request complete account deletion at any time by emailing us at imc.hub.eg@gmail.com with the subject line "Account Deletion Request." We will permanently remove your account, assessment history, and all associated personal data within 30 days, in compliance with applicable data protection regulations.',
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
    label: "Contact & Partnerships",
    items: [
      {
        question: "How can I contact the IMC team?",
        answer:
          "You can reach us through several channels: (1) Email us at imc.hub.eg@gmail.com for general inquiries or support; (2) Use the Contact form on our website for structured messages; or (3) Reach out through our Contact page to schedule a consultation for corporate and B2B inquiries. We aim to respond to all inquiries within one business day.",
      },
      {
        question: "Do you offer phone or video consultations?",
        answer:
          "Currently, our primary communication channels are email and the website contact form. For corporate and B2B inquiries, we can arrange video consultations to discuss your organization's specific needs. Reach out to imc.hub.eg@gmail.com to schedule a call.",
      },
      {
        question: "How do I stay informed about new programs and updates?",
        answer:
          "New program announcements, feature updates, and service launches are communicated through our website and email newsletter. The best way to stay current is to visit our Academy and Corporate Solutions pages regularly, where new offerings are published as they become available.",
      },
      {
        question: "Does IMC work with partners and resellers?",
        answer:
          "Yes. IMC is open to partnerships with training organizations, consulting firms, educational institutions, and corporate training departments that want to integrate our assessments and programs into their offerings. If you are interested in a partnership, please contact us at imc.hub.eg@gmail.com to discuss how we can work together.",
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
            item.answer.toLowerCase().includes(query),
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  const totalQuestions = faqCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
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
                  Showing{" "}
                  {filteredCategories.reduce((s, c) => s + c.items.length, 0)}{" "}
                  result
                  {filteredCategories.reduce(
                    (s, c) => s + c.items.length,
                    0,
                  ) !== 1
                    ? "s"
                    : ""}{" "}
                  for &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section
        aria-label="Frequently asked questions"
        className="bg-background py-16 sm:py-24"
      >
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
      <section
        aria-label="Get in touch"
        className="bg-secondary/30 py-16 sm:py-20"
      >
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

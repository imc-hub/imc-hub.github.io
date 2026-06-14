import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for IMC platforms, including user obligations, content policies, subscription terms, and liability limitations.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/terms",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Terms of Service — IMC",
    description:
      "Read the Terms of Service for IMC platforms, including user obligations, content policies, subscription terms, and liability limitations.",
    images: [
      {
        url: "https://imc-hub.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMC — Intelligent Mastery Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — IMC",
    description:
      "Read the Terms of Service for IMC platforms, including user obligations, content policies, subscription terms, and liability limitations.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "June 7, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the IMC (Intelligent Mastery Coaching) platform, including the IMC Academy, Corporate Solutions, and OCTRI programs (collectively, the 'Service'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, you may not access or use the Service.",
      "These Terms constitute a legally binding agreement between you and IMC Inc. ('IMC,' 'we,' 'us,' or 'our'). Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      "We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on the platform. Continued use after changes constitutes acceptance.",
    ],
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: [
      "You must be at least 13 years of age to use the Service. If you are between 13 and 18 years of age, you may only use the Service with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms.",
      "By using the Service, you represent and warrant that you have the legal capacity to enter into these Terms, that all information you provide is accurate and complete, and that your use of the Service does not violate any applicable law or regulation.",
      "Corporate and institutional users must be authorized to bind their organization to these Terms. The organization is responsible for the actions of all users accessing the Service under its account.",
    ],
  },
  {
    id: "accounts",
    title: "3. Accounts and Registration",
    content: [
      "To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. Failure to do so constitutes a breach of these Terms.",
      "You must notify us immediately of any unauthorized use of your account or any other breach of security. We are not liable for any loss or damage arising from your failure to protect your account credentials.",
      "We reserve the right to suspend or terminate accounts that contain false, inaccurate, or incomplete information, or that are inactive for more than 12 consecutive months.",
    ],
  },
  {
    id: "subscription",
    title: "4. Subscriptions and Payments",
    content: [
      "The Service offers both free and paid subscription plans. Paid plans are billed on a recurring basis (monthly or annually) depending on the plan you select.",
      "All fees are stated in the currency specified at the time of purchase and are exclusive of applicable taxes. We reserve the right to change fees upon 30 days' written notice. Fee changes take effect at the start of the next billing cycle.",
      "Refunds are available within 14 days of initial purchase if you have not accessed premium content. After accessing premium content, refunds are granted at our sole discretion.",
      "Corporate and institutional plans are invoiced according to separate enterprise agreements. Custom terms for enterprise clients supersede standard payment terms described herein.",
    ],
  },
  {
    id: "content",
    title: "5. Content and Intellectual Property",
    content: [
      "All content provided through the Service, including courses, corporate solutions, assessments, text, graphics, logos, software, and other materials ('Platform Content'), is the property of IMC or its licensors and is protected by copyright, trademark, and other intellectual property laws.",
      "Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use Platform Content solely for your personal or internal business purposes.",
      "You may not copy, modify, distribute, sell, lease, sublicense, or create derivative works from Platform Content without our prior written consent. You may not use any data mining, robots, or similar data gathering methods on Platform Content.",
      "User-generated content, including program results, project submissions, and community posts ('User Content'), remains your property. By submitting User Content, you grant IMC a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content for the purpose of operating and improving the Service.",
    ],
  },
  {
    id: "acceptable-use",
    title: "6. Acceptable Use Policy",
    content: [
      "You agree not to use the Service for any unlawful purpose or in any way that violates these Terms. Specifically, you agree not to:",
      "(a) Share your account credentials or allow others to access the Service through your account; (b) Attempt to gain unauthorized access to any part of the Service, other accounts, or computer systems; (c) Use bots, scrapers, or automated means to access or collect data from the Service; (d) Upload, post, or transmit any content that is infringing, defamatory, obscene, or otherwise objectionable; (e) Interfere with or disrupt the Service or servers connected to the Service; (f) Reverse engineer, decompile, or disassemble any part of the Service.",
      "Violation of this Acceptable Use Policy may result in immediate termination of your account and forfeiture of any prepaid fees.",
    ],
  },
  {
    id: "corporate_solutions",
    title: "7. Corporate Solutions Terms",
    content: [
      "The Corporate Solutions programs provide applied business development scenarios. Program results, scores, and readiness assessments are for developmental purposes only and do not constitute professional certification unless explicitly stated.",
      "Leaderboard rankings are based on program performance algorithms determined solely by IMC. We reserve the right to adjust rankings if we detect cheating, manipulation, or algorithmic anomalies.",
      "Certificates issued for program completion represent completion of IMC's internal curriculum and are not accredited by external educational institutions unless specifically noted.",
    ],
  },
  {
    id: "octri",
    title: "8. OCTRI Program Terms",
    content: [
      "OCTRI physical training programs are designed for educational and fitness development purposes. You participate in physical activities at your own risk.",
      "You represent that you are in sufficient physical health to participate in the recommended activities. We recommend consulting a physician before beginning any physical training program.",
      "IMC is not liable for any injury, illness, or health complication arising from participation in OCTRI programs, whether conducted online or at in-person events.",
      "Event registrations are subject to the cancellation and refund policy published on the specific event page. Force majeure events may result in event cancellation without refund liability.",
    ],
  },
  {
    id: "termination",
    title: "9. Termination",
    content: [
      "We may terminate or suspend your access to the Service at any time, with or without cause, including for violation of these Terms. Upon termination, your right to use the Service immediately ceases.",
      "You may terminate your account at any time by contacting support or using the account deletion feature. Upon termination, your account and personal data will be handled in accordance with our Privacy Policy.",
      "The following provisions survive termination: intellectual property provisions, warranty disclaimers, liability limitations, and dispute resolution provisions.",
    ],
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer of Warranties",
    content: [
      'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IMC DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      "IMC does not warrant that the Service will be uninterrupted, error-free, or free of harmful components. We do not guarantee specific outcomes, employment readiness, or career results from using the Service.",
      "Advice, recommendations, or assessments provided through the Service are for informational purposes only and do not constitute professional career, legal, or financial advice.",
    ],
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: [
      "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IMC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.",
      "OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING UNDER OR RELATING TO THESE TERMS SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNTS YOU HAVE PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100).",
      "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.",
    ],
  },
  {
    id: "dispute",
    title: "12. Dispute Resolution",
    content: [
      "Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules.",
      "The arbitration shall be conducted in English in San Francisco, California, unless otherwise agreed by the parties. The arbitrator's decision shall be final and binding.",
      "You agree that any arbitration shall be conducted on an individual basis and not as a class action or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Information",
    content: [
      "For questions about these Terms, please contact us:",
      "Email: imc.hub.eg@gmail.com",
      "Mailing Address: IMC Inc., Attn: Legal Department, Giza, CA, Egypt",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Terms of Service — IMC Intelligent Mastery Coaching"
        description="Read the Terms of Service for IMC platforms including user obligations, content policies, subscription terms."
        url="https://imc-hub.github.io/terms"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "Terms of Service", item: "https://imc-hub.github.io/terms" },
        ]}
      />
      <section
        aria-label="Terms of service"
        className="bg-imc-navy py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              These Terms of Service govern your use of the IMC platform. Please
              read them carefully before using our Service.
            </p>

            <div className="mt-10 space-y-12">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

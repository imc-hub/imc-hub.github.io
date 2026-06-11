import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read IMC's Privacy Policy to understand how we collect, use, and protect your personal data. Learn about GDPR, CCPA compliance, data rights, and cookie usage.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/privacy",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Privacy Policy — IMC",
    description:
      "Read IMC's Privacy Policy to understand how we collect, use, and protect your personal data.",
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
    title: "Privacy Policy — IMC",
    description:
      "Read IMC's Privacy Policy to understand how we collect, use, and protect your personal data.",
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
    id: "introduction",
    title: "1. Introduction",
    content: [
      "IMC Inc. ('IMC,' 'we,' 'us,' or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our platform, including the IMC Academy, Corporate Solutions, and OCTRI programs (collectively, the 'Service').",
      "This policy applies to all users of the Service, including individual learners, corporate employees, mentors, and administrators. By using the Service, you consent to the practices described in this Privacy Policy.",
      "We process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant regulations.",
    ],
  },
  {
    id: "data-collected",
    title: "2. Information We Collect",
    content: [
      "2.1 Information You Provide:",
      "Account Information: Name, email address, password (hashed), phone number, date of birth, country, and profile photo. Professional Information: Job title, department, company name, university, school, and career goals. Assessment Responses: Answers to career discovery quizzes, skills assessments, and personality evaluations. Program Data: Decisions made, scores achieved, and performance metrics within the Corporate Solutions programs. Communication Data: Messages sent through our platform, support requests, and feedback submissions.",
      "2.2 Information Collected Automatically:",
      "Usage Data: Pages visited, features used, time spent on content, click patterns, and navigation paths. Device Information: Browser type, operating system, device type, screen resolution, and language preferences. Log Data: IP address (hashed), access times, error logs, and referral URLs. Cookies and Similar Technologies: Session identifiers, preference cookies, and analytics cookies as described in our Cookie Policy.",
      "2.3 Information from Third Parties:",
      "Social Login Providers: If you register via Google, Apple, or LinkedIn, we receive your name, email, and profile picture as authorized by your privacy settings with those providers. Corporate Clients: If your organization provides access, we may receive your name, email, and employee ID for account provisioning. Payment Processors: Transaction records from Stripe or other payment providers (we do not store full credit card numbers).",
    ],
  },
  {
    id: "data-use",
    title: "3. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "Service Delivery: To provide, maintain, and improve the Service, including course delivery, corporate solutions functionality, and gamification features. Personalization: To recommend learning paths, assessments, and content based on your profile, interests, and performance. Assessment Scoring: To calculate your Corporate Readiness Score, skill levels, and program performance rankings. Communication: To send service-related notifications, respond to inquiries, and provide customer support (with your consent, for marketing communications). Analytics: To understand usage patterns, improve our platform, and conduct research (using aggregated and anonymized data where possible). Security: To detect and prevent fraud, abuse, and unauthorized access. Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
    ],
  },
  {
    id: "data-sharing",
    title: "4. How We Share Your Information",
    content: [
      "We do not sell your personal information. We may share your information in the following circumstances:",
      "Corporate Administrators: If you are part of a corporate account, your organization's administrators can see your name, email, department, training progress, and readiness scores. This is necessary for the performance of our contract with your organization. Mentors: If you participate in mentorship, your mentor can see your name, profile, and the focus areas you share. Service Providers: We engage trusted third-party service providers (e.g., cloud hosting, email delivery, payment processing) who process data on our behalf under strict confidentiality agreements. Legal Requirements: We may disclose information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect rights, safety, or property. Business Transfers: In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction, subject to the same privacy protections.",
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      "We retain your personal information for as long as your account is active or as needed to provide the Service. Specific retention periods:",
      "Account Data: Retained while your account is active. Upon deletion request, data is anonymized within 30 days. Assessment Results: Retained for the lifetime of your account to track progress over time. Program Data: Retained for the lifetime of your account for leaderboard and certification purposes. Usage Logs: Retained for 12 months for security and analytics, then anonymized. Payment Records: Retained for 7 years as required by financial regulations.",
      "You may request deletion of your account and associated data at any time by contacting imc.hub.eg@gmail.com or using the account deletion feature in your settings.",
    ],
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information:",
      "Encryption: All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Passwords are hashed using bcrypt with a cost factor of 12. Access Control: Role-based access controls limit who can access personal data within our organization. Regular Audits: We conduct regular security assessments and penetration testing. Incident Response: We maintain an incident response plan and will notify affected users of any data breach within 72 hours as required by applicable law.",
      "While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    id: "user-rights",
    title: "7. Your Rights",
    content: [
      "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      "Right of Access: You can request a copy of the personal data we hold about you. Right to Rectification: You can request correction of inaccurate or incomplete data. Right to Erasure: You can request deletion of your personal data, subject to legal retention requirements. Right to Restriction: You can request that we limit the processing of your data in certain circumstances. Right to Data Portability: You can request your data in a structured, machine-readable format. Right to Object: You can object to processing based on legitimate interests or for direct marketing purposes. Right to Withdraw Consent: Where processing is based on consent, you can withdraw consent at any time.",
      "To exercise any of these rights, contact us at imc.hub.eg@gmail.com. We will respond within 30 days (or within the timeframe required by applicable law). We may need to verify your identity before processing your request.",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies and Tracking",
    content: [
      "We use cookies and similar tracking technologies to enhance your experience:",
      "Strictly Necessary Cookies: Required for the Service to function (session management, security, authentication). These cannot be disabled. Functional Cookies: Remember your preferences (language, region, display settings). Analytics Cookies: Help us understand how you use the Service (we use PostHog, a privacy-focused analytics platform). Marketing Cookies: Used only with your explicit consent to measure the effectiveness of our campaigns.",
      "You can manage cookie preferences through your browser settings or our cookie consent banner. Disabling certain cookies may affect the functionality of the Service.",
    ],
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: [
      "The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.",
      "Users between 13 and 18 may use the Service with parental or guardian consent. We recommend that parents and guardians monitor their children's use of the Service and review this Privacy Policy together.",
    ],
  },
  {
    id: "international",
    title: "10. International Data Transfers",
    content: [
      "Your information may be transferred to and processed in countries other than your country of residence, including the United States. These countries may have data protection laws that differ from your jurisdiction.",
      "When we transfer personal data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission, or other legally recognized transfer mechanisms.",
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our platform and, where appropriate, sending you an email notification.",
      "Your continued use of the Service after changes become effective constitutes your acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:",
      "Email: imc.hub.eg@gmail.com",
      "Data Protection Officer: imc.hub.eg@gmail.com",
      "Mailing Address: IMC Inc., Attn: Privacy Team, Giza, CA, Egypt",
      "If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Privacy Policy — IMC Intelligent Mastery Coaching"
        description="Read IMC's Privacy Policy covering GDPR, CCPA compliance, data collection, usage, protection, and your rights."
        url="https://imc-hub.github.io/privacy"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "Privacy Policy", item: "https://imc-hub.github.io/privacy" },
        ]}
      />
      <section className="bg-imc-navy py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Privacy Policy
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
              Your privacy matters to us. This Privacy Policy explains how IMC
              collects, uses, and protects your personal information.
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

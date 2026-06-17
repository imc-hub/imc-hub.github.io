import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { WebPageStructuredData } from "@/components/seo/structured-data";
import { PreferenceCenter } from "@/components/cookie-consent/preference-center";

export const metadata: Metadata = {
  title: "Cookie Declaration",
  description:
    "Read IMC's Cookie Declaration to understand how we use cookies, the types of cookies set by our platform, your consent choices, and how to manage cookie preferences. GDPR, CCPA, and ePrivacy compliant.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/cookies",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "Cookie Declaration — IMC",
    description:
      "Read IMC's Cookie Declaration to understand how we use cookies, the types of cookies set by our platform, your consent choices, and how to manage cookie preferences.",
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
    title: "Cookie Declaration — IMC",
    description:
      "Read IMC's Cookie Declaration to understand how we use cookies and how to manage cookie preferences.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "June 10, 2026";

const sections = [
  {
    id: "introduction",
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your computer, smartphone, tablet, or other device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the operators of the site.",
      "Cookies are stored by your web browser and contain information that allows the website to recognize your device and remember certain details about your visit, such as your preferences, session data, or navigation patterns. Each cookie is unique to your browser and can only be read by the server that issued it or by the browser itself.",
      "This Cookie Declaration explains how IMC Inc. ('IMC,' 'we,' 'us,' or 'our') uses cookies and similar tracking technologies on our platform, including the IMC website, IMC Academy, Corporate Solutions, and related services (collectively, the 'Service'). It should be read alongside our Privacy Policy, available at /privacy.",
    ],
  },
  {
    id: "why-cookies",
    title: "2. Why We Use Cookies",
    content: [
      "We use cookies and similar technologies for the following purposes:",
      "Essential Operations: Cookies are required for the basic functioning of the Service, including page navigation, session management, security features, and access to secure areas. Without these cookies, the Service cannot function properly.",
      "Performance and Analytics: Cookies help us understand how visitors interact with the Service by collecting aggregated, anonymized data about page views, traffic sources, and navigation patterns. This information allows us to improve the structure, design, and content of the Service.",
      "Functionality: Cookies remember choices you make, such as your language preference, region, or display settings, to provide a more personalized and convenient experience.",
      "Marketing and Advertising: With your explicit consent, cookies may be used to deliver relevant advertisements, measure the effectiveness of advertising campaigns, and limit the number of times you see an ad.",
      "Security: Cookies support security features, help detect malicious activity, and protect against fraudulent use of the Service.",
    ],
  },
  {
    id: "cookie-categories",
    title: "3. Categories of Cookies We Use",
    content: [
      "3.1 Strictly Necessary Cookies",
      "These cookies are essential for the Service to function. They enable core features such as page navigation, session management, authentication, and security. The Service cannot operate properly without these cookies, and they cannot be disabled in our systems. They are generally set only in response to actions you take that constitute a request for services, such as logging in, filling in forms, or setting privacy preferences.",
      "Under Article 5(3) of the ePrivacy Directive and GDPR Article 6(1)(b) (performance of a contract), strictly necessary cookies do not require your consent.",
      "3.2 Functional Cookies",
      "Functional cookies allow the Service to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. These cookies remember choices you make, such as language, region, or display preferences, so you do not have to re-enter them each time you visit.",
      "If you do not allow these cookies, some or all of these features may not function properly.",
      "3.3 Analytics Cookies",
      "Analytics cookies help us understand how visitors use the Service by collecting and reporting information anonymously. They provide aggregated data on metrics such as the number of visitors, bounce rates, traffic sources, and popular pages. This information is used to improve the Service and your experience.",
      "We use privacy-focused analytics tools (such as PostHog) that minimize data collection and do not track you across websites. Analytics cookies are set only where required by law after obtaining your consent.",
      "3.4 Performance Cookies",
      "Performance cookies collect information about how you use the Service, for instance which pages you visit most often and whether you receive error messages. These cookies are used to improve the performance and reliability of the Service. All information collected by these cookies is aggregated and therefore anonymous.",
      "3.5 Marketing and Advertising Cookies",
      "Marketing cookies are used to track visitors across websites. The intention is to display advertisements that are relevant and engaging for the individual user, thereby making them more valuable for publishers and third-party advertisers. These cookies may also be used to limit the number of times you see an advertisement and to help measure the effectiveness of advertising campaigns.",
      "These cookies are placed by third-party advertising networks with our permission and only with your explicit consent.",
      "3.6 Third-Party Cookies",
      "Some cookies on the Service are placed by third parties, such as analytics providers, advertising networks, and social media platforms. These cookies are governed by the respective third party's own privacy and cookie policies. We do not control these cookies. Below is a list of third parties that may set cookies through our Service:",
      "Google (Analytics, Fonts, Consent Mode), PostHog (privacy-focused analytics), and EmailJS (email delivery for contact forms). For more information about how these third parties use cookies, please refer to their respective privacy policies.",
    ],
  },
  {
    id: "cookie-duration",
    title: "4. Cookie Duration",
    content: [
      "4.1 Session Cookies",
      "Session cookies are temporary cookies that are stored in your browser's memory only during your browsing session. They are automatically deleted when you close your browser. Session cookies are used to maintain your session state, keep you logged in as you navigate between pages, and ensure the security of your session.",
      "4.2 Persistent Cookies",
      "Persistent cookies remain on your device for a predetermined period specified in the cookie (the 'expiry date') or until you manually delete them. These cookies are activated each time you visit the Service that created the particular cookie. Persistent cookies are used to remember your preferences, maintain settings across visits, and collect analytics data over time.",
      "The duration of persistent cookies varies depending on their purpose. Some may expire after a few hours, while others may remain on your device for up to several years. Specific durations for each cookie are listed in the Cookie Table below.",
    ],
  },
  {
    id: "cookie-table",
    title: "5. Cookie Table",
    content: [
      "The following table provides a detailed overview of the cookies used on our Service. If actual cookies are not yet known at the time of publication, entries are clearly labeled as automatically populated by the site's Consent Management Platform (CMP) when cookies are detected.",
    ],
  },
  {
    id: "legal-basis",
    title: "6. Legal Basis for Processing",
    content: [
      "We process personal data collected through cookies on the following legal bases, as applicable under the GDPR, ePrivacy Directive, and other relevant legislation:",
      "Consent (GDPR Article 6(1)(a)): For non-essential cookies (functional, analytics, performance, and marketing), we obtain your informed, specific, and freely given consent before placing cookies on your device. You may withdraw consent at any time.",
      "Legitimate Interest (GDPR Article 6(1)(f)): For certain analytics and performance cookies that are privacy-respecting and collect only aggregated, anonymized data, we may rely on our legitimate interest in improving the Service.",
      "Performance of a Contract (GDPR Article 6(1)(b)): Strictly necessary cookies are required to deliver the Service you have requested, including session management, security, and authentication.",
      "Legal Obligation (GDPR Article 6(1)(c)): Where required by applicable law, we may process cookie data to comply with legal obligations.",
      "Under the ePrivacy Directive (Directive 2002/58/EC as amended by 2009/136/EC), consent is generally required before storing or accessing information on a user's device, except for cookies that are strictly necessary for the provision of an explicitly requested service.",
    ],
  },
  {
    id: "consent-management",
    title: "7. Consent Management",
    content: [
      "7.1 Prior Consent",
      "No non-essential cookies are activated before you provide consent where required by law. When you first visit the Service, you will be presented with a cookie consent banner that allows you to accept, reject, or customize your cookie preferences. Your choice is recorded and respected across your visits.",
      "7.2 Accept, Reject, or Customize",
      "You have the following options: Accept All — Allow all categories of cookies. Reject All — Allow only strictly necessary cookies. Customize — Select which categories of cookies you wish to allow (e.g., allow analytics but reject marketing cookies).",
      "7.3 Consent Records",
      "Where legally required, we maintain records of your consent choices, including the date, time, and scope of your consent. These records are stored securely and are available for audit purposes. Consent records are retained for the period required by applicable law.",
      "7.4 Withdrawal of Consent",
      "You may withdraw your consent to non-essential cookies at any time. Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal. To withdraw or update your cookie preferences, use the cookie preference center accessible via the link in the footer of any page, or contact us at imc.hub.eg@gmail.com.",
      "7.5 Google Consent Mode",
      "We implement Google Consent Mode to respect your cookie consent choices when Google services (such as Google Analytics) are used on our platform. When you decline analytics or marketing cookies, Google Consent Mode adjusts the behavior of Google tags accordingly, preventing data from being used for the purposes you have not consented to. This ensures compliance with GDPR, ePrivacy, and other data protection regulations while allowing us to collect aggregated, privacy-respecting analytics data.",
    ],
  },
  {
    id: "user-rights",
    title: "8. Your Rights",
    content: [
      "Depending on your jurisdiction, you have the following rights regarding cookies and the personal data collected through them:",
      "European Union (GDPR): Right of access, right to rectification, right to erasure ('right to be forgotten'), right to restriction of processing, right to data portability, right to object to processing, and right to withdraw consent at any time.",
      "California (CCPA/CPRA): Right to know what personal information is collected, right to delete personal information, right to opt-out of the sale or sharing of personal information, and right to non-discrimination for exercising your rights.",
      "Brazil (LGPD): Right to confirmation of processing, right of access, right to correction, right to anonymization/blocking/deletion, right to portability, right to information about sharing, and right to revoke consent.",
      "South Africa (POPIA): Right of access, right to rectification, right to erasure, right to restriction of processing, right to object, and right to withdraw consent.",
      "Digital Markets Act (DMA): As applicable, users of designated gatekeeper platforms have additional rights regarding data portability, interoperability, and access to data generated by their activity.",
      "To exercise any of these rights, contact us at imc.hub.eg@gmail.com. We will respond within 30 days (or within the timeframe required by applicable law). We may need to verify your identity before processing your request.",
    ],
  },
  {
    id: "browser-instructions",
    title: "9. Managing Cookies in Your Browser",
    content: [
      "In addition to our cookie consent management tools, you can control and delete cookies through your browser settings. Below are instructions for the most commonly used browsers:",
      "Google Chrome: Settings → Privacy and Security → Cookies and other site data. You can block all cookies, block third-party cookies, or delete existing cookies.",
      "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data. Choose to block cookies, block third-party cookies, or clear cookies.",
      "Apple Safari: Settings → Privacy → Cookies and website data. You can block all cookies or manage website data.",
      "Microsoft Edge: Settings → Cookies and site permissions → Manage and delete cookies. You can block cookies or delete existing cookies.",
      "Opera: Settings → Privacy & Security → Cookies. You can block cookies or delete existing cookies.",
      "Please note that disabling or deleting cookies may affect the functionality of the Service. Strictly necessary cookies cannot be disabled as they are required for the Service to operate.",
    ],
  },
  {
    id: "third-party-services",
    title: "10. Third-Party Services",
    content: [
      "The following third-party services may set cookies or use similar tracking technologies through our Service:",
      "Google Analytics: We use Google Analytics to collect anonymized usage data. Google Analytics cookies help us understand how visitors interact with the Service. Data collected is aggregated and does not identify individual users. Google's privacy policy is available at https://policies.google.com/privacy.",
      "Google Fonts: We use Google Fonts to serve typography. This service may set cookies related to font caching. Google's privacy policy applies.",
      "PostHog: We use PostHog as a privacy-focused analytics platform. PostHog collects aggregated usage data with minimal personal data collection. PostHog's privacy policy is available at https://posthog.com/privacy.",
      "EmailJS: We use EmailJS for contact form delivery. This service may set session-related cookies for form functionality.",
      "We encourage you to review the privacy and cookie policies of these third parties for more information about how they use cookies and your data.",
    ],
  },
  {
    id: "cross-border",
    title: "11. Cross-Border Data Transfers",
    content: [
      "Some of the third-party services we use may transfer data to and process data in countries other than your country of residence, including the United States. These countries may have data protection laws that differ from those in your jurisdiction.",
      "When personal data collected through cookies is transferred internationally, we ensure that appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions, or other legally recognized transfer mechanisms as required by the GDPR and other applicable regulations.",
      "For more information about international data transfers, please refer to Section 10 of our Privacy Policy.",
    ],
  },
  {
    id: "updates",
    title: "12. Updates to This Cookie Declaration",
    content: [
      "We may update this Cookie Declaration from time to time to reflect changes in the cookies we use, changes in applicable legislation, or changes in our data processing practices. We will notify you of material changes by updating the 'Last Updated' date at the top of this page and, where appropriate, by displaying a notice on the Service.",
      "We encourage you to review this Cookie Declaration periodically to stay informed about how we use cookies. Your continued use of the Service after changes become effective constitutes your acceptance of the updated Cookie Declaration.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: [
      "If you have questions about this Cookie Declaration, our use of cookies, or wish to exercise your data rights, please contact us:",
      "Email: imc.hub.eg@gmail.com",
      "Data Protection Officer: imc.hub.eg@gmail.com",
      "Mailing Address: IMC Inc., Attn: Privacy Team, Giza, CA, Egypt",
      "If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority. For EU residents, you may contact your national Data Protection Authority (DPA). For California residents, you may contact the California Attorney General's office.",
    ],
  },
];

const cookieTableColumns = [
  { key: "name", label: "Cookie Name" },
  { key: "provider", label: "Provider" },
  { key: "purpose", label: "Purpose" },
  { key: "type", label: "Type" },
  { key: "duration", label: "Duration" },
];

const cookieTableRows = [
  {
    name: "Automatically populated by the site's Consent Management Platform (CMP) when cookies are detected.",
    provider: "—",
    purpose: "—",
    type: "—",
    duration: "—",
  },
];

export default function CookiesPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Cookie Declaration — IMC Intelligent Mastery Coaching"
        description="Read IMC's Cookie Declaration covering cookie usage, categories, consent management, your rights, and how to manage cookie preferences. GDPR, CCPA, and ePrivacy compliant."
        url="https://imc-hub.github.io/cookies"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          {
            name: "Cookie Declaration",
            item: "https://imc-hub.github.io/cookies",
          },
        ]}
      />

      {/* Hero */}
      <section
        aria-label="Cookie declaration"
        className="bg-imc-navy py-16 sm:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-imc-teal">
              Legal
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Cookie Declaration
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            This Cookie Declaration explains how IMC uses cookies and similar
            technologies on our platform. It describes what cookies are, why we
            use them, the categories we employ, your rights, and how to manage
            your preferences.
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

                {/* Cookie Table — rendered only for section 5 */}
                {section.id === "cookie-table" && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse rounded-xl border border-border/60">
                      <caption className="sr-only">
                        Cookie declaration table listing cookie name, provider,
                        purpose, type, and duration
                      </caption>
                      <thead>
                        <tr className="border-b border-border/60 bg-secondary/30">
                          {cookieTableColumns.map((col) => (
                            <th
                              key={col.key}
                              scope="col"
                              className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                            >
                              {col.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cookieTableRows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="border-b border-border/40 last:border-b-0"
                          >
                            <td
                              className="px-4 py-3 text-sm text-muted-foreground"
                              colSpan={5}
                            >
                              <em className="text-muted-foreground/80">
                                {row.name}
                              </em>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-3 text-xs italic text-muted-foreground/70">
                      Note: This table is automatically populated by the
                      site&apos;s Consent Management Platform (CMP) when cookies
                      are detected. The entries above reflect the current state
                      of the Service at the time of publication.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary/30 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-foreground sm:text-xl">
            Manage Your Cookie Preferences
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You can update your cookie consent preferences at any time. Changes
            take effect immediately.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#preference-center"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-imc-teal px-6 text-sm font-medium text-[#0b1d3a] transition-colors hover:bg-imc-teal-dark"
            >
              Cookie Preference Center
            </a>
            <a
              href="/privacy"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border/60 bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
            >
              View Privacy Policy
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Questions? Contact us at{" "}
            <a
              href="mailto:imc.hub.eg@gmail.com"
              className="text-imc-teal underline underline-offset-2 hover:text-imc-teal-dark"
            >
              imc.hub.eg@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Preference Center */}
      <section
        id="preference-center"
        className="scroll-mt-24 bg-background py-8"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <PreferenceCenter />
        </div>
      </section>
    </PageLayout>
  );
}

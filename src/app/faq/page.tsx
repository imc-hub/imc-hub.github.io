import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import {
  WebPageStructuredData,
  FaqStructuredData,
} from "@/components/seo/structured-data";
import { FaqContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ)",
  description:
    "Find answers to common questions about IMC — Intelligent Mastery Coaching. Learn about our services, pricing, programs, support, privacy, and how to get started.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/faq",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "FAQ — IMC Intelligent Mastery Coaching",
    description:
      "Find answers to common questions about IMC's coaching programs, pricing, services, and more.",
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
    title: "FAQ — IMC Intelligent Mastery Coaching",
    description:
      "Find answers to common questions about IMC's coaching programs, pricing, services, and more.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

const allQuestions = [
  {
    question: "What is IMC — Intelligent Mastery Coaching?",
    answer:
      "IMC (Intelligent Mastery Coaching) is a modern coaching platform that closes the gap between what people learn and what companies actually need. We combine structured learning paths, real-world simulations, and skill assessments to prepare students, career changers, and professionals for workplace success. Our flagship programs include the IMC Academy, the Corporate Readiness Assessment, and specialized simulations like Rx Challenger for pharmacy professionals.",
  },
  {
    question: "Who is IMC designed for?",
    answer:
      "IMC serves three primary audiences: (1) Students and recent graduates who want to enter the workforce with practical, job-ready skills; (2) Career changers transitioning into new industries who need to quickly build relevant competencies; and (3) Companies and HR departments looking for measurable ways to assess and develop employee readiness. Whether you are preparing for your first corporate role or pivoting mid-career, IMC provides the structure and tools to accelerate your growth.",
  },
  {
    question: "What makes IMC different from other online learning platforms?",
    answer:
      "Unlike traditional platforms that focus on passive video content, IMC uses an active learning approach built around three pillars: structured coaching, real-world simulations, and measurable outcomes. Every program leads to a verified result — whether that is a Corporate Readiness Score, a simulation completion badge, or a course certificate. We do not measure success by content consumed; we measure it by skills demonstrated and outcomes achieved.",
  },
  {
    question: "Where is IMC based?",
    answer:
      "IMC is headquartered in Giza, Egypt, and serves a worldwide audience. Our team operates globally, and all of our programs are delivered online, making them accessible to learners and organizations in any time zone.",
  },
  {
    question: "What programs does IMC offer?",
    answer:
      "IMC offers three core programs: (1) IMC Academy — structured, industry-built courses for professional skill development, starting with the Rx Challenger prescription-deciphering course for pharmacy professionals; (2) Corporate Readiness Assessment — a 20-question evaluation across five competency areas that generates a personalized readiness score and improvement roadmap; and (3) Simulation-based learning — immersive scenarios where professionals practice real workplace tasks in a risk-free environment. Each program is designed to deliver measurable skill improvement.",
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
  {
    question: "Is IMC free to use?",
    answer:
      "Yes. The IMC Corporate Readiness Assessment is completely free, and the foundational content in IMC Academy — including Rx Challenger — is available at no cost. We believe everyone deserves access to quality career preparation tools regardless of their financial situation. As we expand our course catalog and introduce premium simulation features, those advanced modules will have associated pricing, but core readiness tools will remain free.",
  },
  {
    question: "Will there be paid programs in the future?",
    answer:
      "We are developing advanced simulation modules and specialized certification tracks that will be offered as paid premium programs. These will provide deeper, more personalized learning experiences with features such as mentor feedback, advanced analytics, and industry-recognized credentials. Free offerings — including the Corporate Readiness Assessment and foundational Academy content — will always remain available. Paid programs will be clearly labeled, and pricing information will be published on the relevant program pages before launch.",
  },
  {
    question: "How does billing work for corporate accounts?",
    answer:
      "Corporate and B2B billing is handled on a custom basis depending on the size of your organization, the number of users, and the specific programs you need. We offer annual subscription packages and per-seat pricing models. Contact our sales team at sales@imc-hub.com to receive a tailored proposal for your organization.",
  },
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
    question: "Do I receive a certificate or credential after completing a program?",
    answer:
      "Yes. Upon completing an IMC Academy course or passing a simulation module, you receive a digital certificate of completion that you can share on LinkedIn or include in your professional portfolio. Corporate Readiness Assessment results can also be shared with employers as a verified readiness benchmark. As we expand, we are working toward industry-recognized credentials that carry weight with hiring managers and HR departments globally.",
  },
  {
    question: "Can I access IMC programs on my phone?",
    answer:
      "Yes. The IMC website and Academy platform are fully responsive and work on smartphones, tablets, laptops, and desktops. Rx Challenger is available as a native Android app via Google Play. We are also developing iOS support and Progressive Web App (PWA) capabilities for offline access to course materials, ensuring you can learn wherever you are.",
  },
  {
    question: "How do I get help if I have a technical issue?",
    answer:
      "For technical issues, reach out to us at hello@imc-hub.com with a description of the problem, the device and browser you are using, and any screenshots that might help us diagnose the issue. We aim to respond within one business day. You can also use the Contact form on our website for a structured support request.",
  },
  {
    question: "Is there a community or peer support available?",
    answer:
      "We are actively building a learner community where IMC participants can connect, share experiences, study together, and provide peer feedback. While the full community platform is in development, current learners can connect with us directly through our support channels and will receive early access to community features as they launch.",
  },
  {
    question: "How do I provide feedback or suggest new features?",
    answer:
      "We welcome and actively encourage user feedback. You can submit suggestions through our Contact page, email us directly at hello@imc-hub.com, or use any feedback forms within the platform. Every piece of feedback is reviewed by our team, and the most requested features are prioritized in our development roadmap.",
  },
  {
    question: "How does IMC handle my personal data?",
    answer:
      "IMC takes data privacy seriously. We collect only the information necessary to deliver our programs — such as your email address, assessment results, and learning progress. We never sell your personal data to third parties. You can review our full data practices, including what we collect, why we collect it, and how you can request deletion, by reading our Privacy Policy. All data is stored using industry-standard encryption and security practices.",
  },
  {
    question: "Can I delete my account and data?",
    answer:
      "Yes. You have full control over your data. You can request complete account deletion at any time by emailing us at hello@imc-hub.com with the subject line \"Account Deletion Request.\" We will permanently remove your account, assessment history, and all associated personal data within 30 days, in compliance with applicable data protection regulations.",
  },
  {
    question: "Is my assessment data shared with employers?",
    answer:
      "No. Your Corporate Readiness Score and assessment results are private by default. We never share individual results with employers, recruiters, or any third party without your explicit consent. If you choose to share your results — for example, by sending your score report to a potential employer — that is entirely your decision and your control.",
  },
  {
    question: "How can I contact the IMC team?",
    answer:
      "You can reach us through several channels: (1) Email us at hello@imc-hub.com for general inquiries or support; (2) Email sales@imc-hub.com for corporate and B2B inquiries; (3) Use the Contact form on our website for structured messages; or (4) Connect with us through the Google Play listing for Rx Challenger. We aim to respond to all inquiries within one business day.",
  },
  {
    question: "Do you offer phone or video consultations?",
    answer:
      "Currently, our primary communication channels are email and the website contact form. For corporate and B2B inquiries, we can arrange video consultations to discuss your organization's specific needs. Reach out to sales@imc-hub.com to schedule a call.",
  },
  {
    question:
      "How do I stay informed about new programs and updates?",
    answer:
      "New course announcements, feature updates, and program launches are communicated through our website and email newsletter. You can also follow our Google Play listing for Rx Challenger updates. The best way to stay current is to visit our Academy page regularly, where new courses are published as they become available.",
  },
];

export default function FaqPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Frequently Asked Questions — IMC Intelligent Mastery Coaching"
        description="Find answers to common questions about IMC's coaching programs, pricing, services, privacy, and how to get started."
        url="https://imc-hub.github.io/faq"
        breadcrumb={[
          { name: "Home", item: "https://imc-hub.github.io/" },
          { name: "FAQ", item: "https://imc-hub.github.io/faq" },
        ]}
      />
      <FaqStructuredData questions={allQuestions} />
      <FaqContent />
    </PageLayout>
  );
}

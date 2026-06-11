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
    "Find answers to common questions about IMC — Intelligent Mastery Coaching. Learn about our three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    url: "https://imc-hub.github.io/faq",
    siteName: "IMC — Intelligent Mastery Coaching",
    title: "FAQ — IMC Intelligent Mastery Coaching",
    description:
      "Find answers to common questions about IMC's corporate solutions, assessments, training programs, and more.",
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
      "Find answers to common questions about IMC's corporate solutions, assessments, training programs, and more.",
    images: ["https://imc-hub.github.io/og-image.png"],
  },
};

const allQuestions = [
  {
    question: "What is IMC — Intelligent Mastery Coaching?",
    answer:
      "IMC (Intelligent Mastery Coaching) is a tech-enabled ecosystem that closes the gap between education and market reality. We integrate three business units — Corporate & Business Training (B2C & B2B), Athletic Performance (OCTRI), and Digital Solutions & Technology — to build human potential through strategic intellect, digital mastery, and physical & mental endurance.",
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
      "Unlike traditional platforms that focus on passive video content, IMC is a technology-enabled ecosystem integrating three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology. We use gamified EdTech platforms, real-world case simulations, and applied learning methodologies to build capability — not just deliver content.",
  },
  {
    question: "Where is IMC based?",
    answer:
      "IMC is headquartered in Giza, Egypt, and serves a worldwide audience. Our team operates globally, and all of our programs are delivered online, making them accessible to learners and organizations in any time zone.",
  },
  {
    question: "What services does IMC provide?",
    answer:
      "IMC provides a comprehensive suite of corporate development services: (1) Corporate Solutions — tailored programs addressing specific organizational needs; (2) Business Transformation Solutions — strategic initiatives to drive organizational change; (3) Workforce Development — programs that build practical, job-ready skills across teams; (4) Talent Development — targeted growth paths for high-potential employees; (5) Organizational Development — culture, structure, and capability building; (6) Corporate Training — role-specific and industry-specific training modules; (7) Business Performance Improvement — data-driven approaches to measurable outcomes; and (8) Consulting & Advisory Services — expert guidance on learning strategy and capability building.",
  },
  {
    question: "What is the IMC Capability & Readiness Assessment?",
    answer:
      "The Capability & Readiness Assessment is a free, 20-question multiple-choice quiz that evaluates preparedness across five key areas: business acumen, professional skills, technical literacy, workplace communication, and corporate mindset. It produces a personalized Capability Score and actionable recommendations mapped to our three business units.",
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
    question:
      "How do I stay informed about new programs and updates?",
    answer:
      "New program announcements, feature updates, and service launches are communicated through our website and email newsletter. The best way to stay current is to visit our Academy and Corporate Solutions pages regularly, where new offerings are published as they become available.",
  },
  {
    question: "Does IMC work with partners and resellers?",
    answer:
      "Yes. IMC is open to partnerships with training organizations, consulting firms, educational institutions, and corporate training departments that want to integrate our assessments and programs into their offerings. If you are interested in a partnership, please contact us at imc.hub.eg@gmail.com to discuss how we can work together.",
  },
];

export default function FaqPage() {
  return (
    <PageLayout>
      <WebPageStructuredData
        title="Frequently Asked Questions — IMC Intelligent Mastery Coaching"
        description="Find answers to common questions about IMC's corporate solutions, assessments, training programs, partnerships, and how to get started."
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

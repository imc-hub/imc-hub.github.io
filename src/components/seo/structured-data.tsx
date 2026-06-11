const SITE_URL = "https://imc-hub.github.io";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Organization ── */
export function OrganizationStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "IMC — Intelligent Mastery Coaching",
    alternateName: "IMC",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      caption: "IMC — Intelligent Mastery Coaching",
    },
    image: `${SITE_URL}/og-image.png`,
    description:
      "IMC is a tech-enabled ecosystem that builds human potential through three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Giza",
        addressCountry: "EG",
      },
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "imc.hub.eg@gmail.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "imc.hub.eg@gmail.com",
      },
    ],
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en",
      "https://github.com/imc-hub",
    ],
  };
  return <JsonLd data={data} />;
}

/* ── WebSite ── */
export function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "IMC — Intelligent Mastery Coaching",
    description:
      "Close the gap between education and market reality. Three business units: Corporate & Business Training, Athletic Performance (OCTRI), and Digital Solutions & Technology.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "AssessAction",
        target: `${SITE_URL}/assessment`,
        description: "Take the free Capability & Readiness Assessment",
      },
    ],
  };
  return <JsonLd data={data} />;
}

/* ── WebPage ── */
export function WebPageStructuredData({
  title,
  description,
  url,
  breadcrumb,
}: {
  title: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; item: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    ...(breadcrumb && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      },
    }),
  };
  return <JsonLd data={data} />;
}

/* ── EducationalOrganization / Course for Academy ── */
export function AcademyStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IMC Academy",
    url: `${SITE_URL}/academy`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    description:
      "IMC Academy is our Corporate & Business Training hub — structured learning paths in business readiness, data analysis, AI skills, corporate soft skills, and professional development.",
    course: {
      "@type": "Course",
      name: "Business Readiness Track",
      description:
        "Structured learning path covering workplace fundamentals, professional communication, and corporate culture navigation.",
      provider: { "@id": `${SITE_URL}/#organization` },
      educationalLevel: "Professional",
      teaches: [
        "Professional communication",
        "Workplace fundamentals",
        "Corporate culture navigation",
        "Business readiness",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT5H",
      },
    },
  };
  return <JsonLd data={data} />;
}

/* ── SoftwareApplication for Rx Challenger ── */
export function RxChallengerStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rx Challenger",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android",
    description:
      "A gamified mobile application for pharmacy graduates and professionals to master prescription reading using real-world, anonymized patient scenarios with context-rich clinical data.",
    url: `${SITE_URL}/digital-solutions`,
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.pharmacycafe.goodrx&hl=en",
    author: {
      "@type": "Person",
      name: "Ahmed Ezzat",
      url: "https://www.linkedin.com/in/ahmed-m-ezzat/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "4",
      bestRating: "5",
      worstRating: "1",
    },
  };
  return <JsonLd data={data} />;
}

/* ── FAQ Page ── */
export function FaqStructuredData({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
  return <JsonLd data={data} />;
}

/* ── Review / AggregateRating for testimonials ── */
export function TestimonialStructuredData({
  testimonials,
}: {
  testimonials: {
    name: string;
    role: string;
    text: string;
    rating: number;
  }[];
}) {
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IMC Digital Solutions",
    description:
      "Gamified EdTech platforms and mobile learning applications built on real-world case simulations and applied learning methodologies.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.text,
    })),
  };
  return <JsonLd data={reviewSchema} />;
}

/* ── Assessment / Quiz structured data ── */
export function AssessmentStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: "IMC Capability & Readiness Assessment",
    description:
      "20 multiple-choice questions across 5 key areas. Get your Capability Score and personalized recommendations mapped to IMC's three business units.",
    url: `${SITE_URL}/assessment`,
    creator: { "@id": `${SITE_URL}/#organization` },
    educationalLevel: "Intermediate",
    assesses: [
      "Capability assessment",
      "Business acumen",
      "Professional skills",
      "Technical literacy",
      "Workplace communication",
    ],
    hasPart: {
      "@type": "Question",
      text: "20 MCQ questions covering 5 competency categories",
    },
  };
  return <JsonLd data={data} />;
}

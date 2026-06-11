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
      "IMC helps students, career changers, and companies build real-world readiness through structured coaching, corporate solutions, and skill development.",
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
      "Close the gap between human potential and corporate reality. Structured coaching, corporate solutions, and skill development.",
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
        description: "Take the free Corporate Readiness Assessment",
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
      "IMC Academy delivers industry-built courses that bridge the gap between academic knowledge and workplace performance.",
    course: {
      "@type": "Course",
      name: "Rx Challenger — Prescription Deciphering",
      description:
        "Master prescription reading with real-world, anonymized scenarios. Built for pharmacy graduates and professionals.",
      provider: { "@id": `${SITE_URL}/#organization` },
      educationalLevel: "Professional",
      teaches: [
        "Prescription reading",
        "Drug recognition",
        "Clinical decision-making",
        "Patient diagnosis interpretation",
      ],
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT1H",
      },
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
    name: "Rx Challenger",
    description:
      "An advanced educational tool for pharmacy professionals to master prescription reading.",
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
    name: "IMC Corporate Readiness Assessment",
    description:
      "20 multiple-choice questions across 5 key areas. Get your Corporate Readiness Score and personalized recommendations in ~10 minutes.",
    url: `${SITE_URL}/assessment`,
    creator: { "@id": `${SITE_URL}/#organization` },
    educationalLevel: "Intermediate",
    assesses: [
      "Corporate readiness",
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

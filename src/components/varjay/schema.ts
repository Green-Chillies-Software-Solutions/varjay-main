// JSON-LD schema helpers for SEO. Each returns an object ready for
// <script type="application/ld+json"> { JSON.stringify(...) }
const SITE = "https://instrument-story-spark.lovable.app";
const NAME = "Varjay Music Academy";
const PHONE = "+91-7770003036";
const ADDR = {
  "@type": "PostalAddress",
  streetAddress: "Sanpada",
  addressLocality: "Navi Mumbai",
  addressRegion: "MH",
  postalCode: "400705",
  addressCountry: "IN",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: NAME,
    url: SITE,
    logo: "https://varjaymusic.com/wp-content/uploads/2024/05/logo.png",
    telephone: PHONE,
    email: "info@varjaymusic.com",
    address: ADDR,
    sameAs: [
      "https://www.youtube.com/channel/UCxrYgHmwDxVIpVjFvVadKYA",
      "https://www.facebook.com/p/Varjay-Music-Academy-100077740792261/",
      "https://www.instagram.com/varjay.music.academy/",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: NAME,
    image: "https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg",
    url: SITE,
    telephone: PHONE,
    priceRange: "₹₹",
    address: ADDR,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "35",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.url}`,
    })),
  };
}

export function courseSchema(opts: {
  name: string;
  description: string;
  slug: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: NAME,
      sameAs: SITE,
    },
    educationalLevel: "Beginner to Advanced",
    courseMode: ["Onsite", "Online"],
    inLanguage: ["en", "hi", "mr"],
    offers: {
      "@type": "Offer",
      category: opts.category ?? "Music lessons",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      courseWorkload: "PT1H",
    },
  };
}

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

export function ldJson(obj: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(obj),
  };
}

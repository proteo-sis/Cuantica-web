import Script from "next/script";

interface DisciplineSEOProps {
  name: string;
  slug: string;
  description: string;
  image: string;
  faqs: Array<{ question: string; answer: string }>;
}

const AREA_SERVED = ["Toluca", "Metepec", "Zinacantepec", "Lerma"];

export default function DisciplineSEO({
  name,
  slug,
  description,
  image,
  faqs,
}: DisciplineSEOProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: `${name} en Cuántica Studio Toluca`,
    description,
    image,
    url: `https://cuantica-studio.mx/disciplinas/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Cuántica Studio",
      url: "https://cuantica-studio.mx",
    },
    areaServed: AREA_SERVED.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  return (
    <>
      <Script
        id={`faq-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}

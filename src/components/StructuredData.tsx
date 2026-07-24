import Script from "next/script";

interface StructuredDataProps {
  type?: "organization" | "localBusiness" | "place";
  city?: string;
}

const NAP = {
  streetAddress: "Calle Horacio Zúñiga, P.º Colón 155-interior 7, Colonia Ciprés",
  postalCode: "50120",
  telephone: "+52-722-670-9287",
  email: "ventas1@cuantica-studio.mx",
  url: "https://cuantica-studio.mx",
  logo: "https://cuantica-studio.mx/logo.jpeg",
  latitude: 19.2811291,
  longitude: -99.6625421,
  sameAs: [
    "https://www.facebook.com/profile.php?id=61575709835566",
    "https://www.instagram.com/cuantica_studio11",
    "https://www.tiktok.com/@cuantica_studio11",
  ],
};

export default function StructuredData({
  type = "localBusiness",
  city = "Toluca",
}: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === "organization" ? "Organization" : "LocalBusiness",
    name: "Cuántica Studio",
    description: `Estudio de yoga, bienestar y flexibilidad en ${city}, Estado de México. Clases de yoga, meditación, danza y entrenamiento de flexibilidad.`,
    url: NAP.url,
    logo: NAP.logo,
    image: NAP.logo,
    telephone: NAP.telephone,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: city === "Toluca" ? "Toluca de Lerdo" : city,
      addressRegion: "Estado de México",
      postalCode: NAP.postalCode,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    openingHours: "Mo-Su 06:00-22:00",
    priceRange: "$$",
    currenciesAccepted: "MXN",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    sameAs: NAP.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Bienestar",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clases de Yoga",
            description: "Yoga integral, acroyoga y yoga terapéutico",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meditación Guiada",
            description: "Sesiones de meditación y mindfulness",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entrenamiento de Flexibilidad",
            description: "Clases para mejorar la flexibilidad y movilidad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Danza y Movimiento",
            description: "Heels dance y danza polinesia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Terapia con Cuencos del Himalaya",
            description: "Sesiones de sanación con cuencos tibetanos",
          },
        },
      ],
    },
    areaServed: [
      { "@type": "City", name: "Toluca" },
      { "@type": "City", name: "Metepec" },
      { "@type": "City", name: "Zinacantepec" },
      { "@type": "City", name: "Lerma" },
    ],
  };

  if (type === "organization") {
    Object.assign(baseData, {
      foundingDate: "2020",
      numberOfEmployees: "10-50",
      slogan: "Vive el equilibrio, la armonía y la transformación personal",
      knowsAbout: [
        "Yoga",
        "Meditación",
        "Bienestar integral",
        "Flexibilidad",
        "Danza",
        "Terapias alternativas",
      ],
    });
  }

  return (
    <Script
      id={`structured-data-${city.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData),
      }}
    />
  );
}

import Script from "next/script";

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'place';
  city?: string;
}

export default function StructuredData({ type = 'localBusiness', city = 'Toluca' }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === 'organization' ? "Organization" : "LocalBusiness",
    "name": "Cuántica Studio",
    "description": `Estudio de yoga, bienestar y flexibilidad en ${city}, Estado de México. Clases de yoga, meditación, danza y entrenamiento de flexibilidad.`,
    "url": "https://cuantica-studio.com",
    "logo": "https://www.cuantica-studio.mx/logo.png",
    "image": "https://www.cuantica-studio.mx/logo.png",
    "telephone": "+52-722 670 9287",
    "email": "ventas@cuantica-studio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Estado de México",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4326,
      "longitude": -99.1332
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "$$",
    "currenciesAccepted": "MXN",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "sameAs": [
      "https://www.facebook.com/cuanticastudio",
      "https://www.instagram.com/cuanticastudio",
      "https://www.youtube.com/cuanticastudio"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Bienestar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clases de Yoga",
            "description": "Yoga integral, acroyoga y yoga terapéutico"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meditación Guiada",
            "description": "Sesiones de meditación y mindfulness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Entrenamiento de Flexibilidad",
            "description": "Clases para mejorar la flexibilidad y movilidad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Danza y Movimiento",
            "description": "Heels dance y danza polinesia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terapia con Cuencos del Himalaya",
            "description": "Sesiones de sanación con cuencos tibetanos"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toluca"
      },
      {
        "@type": "City",
        "name": "Metepec"
      },
      {
        "@type": "City",
        "name": "Zinacantepec"
      },
      {
        "@type": "City",
        "name": "Lerma"
      }
    ]
  };

  // Agregar información específica de la organización si es necesario
  if (type === 'organization') {
    Object.assign(baseData, {
      "foundingDate": "2020",
      "numberOfEmployees": "10-50",
      "slogan": "Vive el equilibrio, la armonía y la transformación personal",
      "knowsAbout": [
        "Yoga",
        "Meditación",
        "Bienestar integral",
        "Flexibilidad",
        "Danza",
        "Terapias alternativas"
      ]
    });
  }

  return (
    <Script
      id={`structured-data-${city.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseData)
      }}
    />
  );
}

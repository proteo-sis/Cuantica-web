import { Metadata } from "next";
import StructuredData from "./StructuredData";

interface CitySEOProps {
  city: string;
  citySlug: string;
  description?: string;
  image?: string;
}

export function generateCityMetadata({
  city,
  citySlug,
  description,
  image = "https://www.cuantica-studio.mx/logo.png"
}: CitySEOProps): Metadata {
  const baseTitle = `Cuántica Studio – Yoga y Bienestar en ${city}, Estado de México`;
  const baseDescription = description || `Descubre el mejor estudio de yoga y bienestar en ${city}. Clases de yoga, meditación, danza y flexibilidad en Cuántica Studio. Profesores certificados, horarios flexibles. ¡Reserva tu clase hoy en ${city}!`;
  
  return {
    title: baseTitle,
    description: baseDescription,
    keywords: [
      `yoga en ${city}`,
      `meditación en ${city}`,
      `bienestar en ${city}`,
      `flexibilidad en ${city}`,
      `danza en ${city}`,
      `cuencos tibetanos ${city}`,
      `yoga cerca de ${city}`,
      `meditación cerca de ${city}`,
      `bienestar integral ${city}`,
      `transformación personal ${city}`,
      "yoga Estado de México",
      "meditación Estado de México",
      "bienestar Estado de México"
    ].join(", "),
    openGraph: {
      title: baseTitle,
      description: baseDescription,
      url: `https://cuantica-studio.com/${citySlug}`,
      siteName: 'Cuántica Studio',
      locale: 'es_MX',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Cuántica Studio - Yoga y Bienestar en ${city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description: baseDescription,
      images: [image],
    },
    alternates: {
      canonical: `https://cuantica-studio.com/${citySlug}`,
    },
    other: {
      'geo.region': 'MX-MEX',
      'geo.placename': city,
      'geo.position': '19.4326;-99.1332',
      'ICBM': '19.4326, -99.1332',
    },
  };
}

export default function CitySEO({ city, citySlug, description, image }: CitySEOProps) {
  return (
    <>
      <StructuredData type="localBusiness" city={city} />
      <meta name="geo.placename" content={city} />
      <meta name="business:contact_data:locality" content={city} />
      <link rel="canonical" href={`https://cuantica-studio.com/${citySlug}`} />
    </>
  );
}

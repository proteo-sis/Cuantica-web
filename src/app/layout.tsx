import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Cuántica Studio – Yoga, Bienestar y Flexibilidad en Toluca y Metepec",
  description: "En Cuántica Studio, tu santuario de bienestar integral en Toluca, Metepec, Zinacantepec y Lerma, nutrimos tu cuerpo, mente y espíritu. Disfruta de clases de yoga, meditación guiada, danza, cuencos del Himalaya y entrenamientos de flexibilidad en un ambiente cálido y acogedor. Vive el equilibrio, la armonía y la transformación personal cerca de ti.",
  keywords: "yoga en Toluca, yoga en Metepec, yoga en Zinacantepec, yoga en Lerma, clases de yoga Toluca, meditación Toluca, cuencos tibetanos Toluca, bienestar integral Toluca, flexibilidad Toluca, yoga cerca de mi, meditación cerca de mi, bienestar Toluca, transformación personal Estado de México",
  authors: [{ name: "Cuántica Studio" }],
  creator: "Cuántica Studio",
  publisher: "Cuántica Studio",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/isologo_cuantica.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.jpeg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cuantica-studio.mx'),
  alternates: {
    canonical: 'https://cuantica-studio.mx',
  },
  openGraph: {
    title: "Cuántica Studio – Yoga, Bienestar y Flexibilidad en Toluca y Metepec",
    description: "En Cuántica Studio, tu santuario de bienestar integral en Toluca, Metepec, Zinacantepec y Lerma, nutrimos tu cuerpo, mente y espíritu. Disfruta de clases de yoga, meditación guiada, danza, cuencos del Himalaya y entrenamientos de flexibilidad en un ambiente cálido y acogedor.",
    url: 'https://cuantica-studio.mx',
    siteName: 'Cuántica Studio',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://www.cuantica-studio.mx/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cuántica Studio - Yoga, Bienestar y Flexibilidad en Toluca y Metepec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cuántica Studio – Yoga, Bienestar y Flexibilidad en Toluca y Metepec",
    description: "En Cuántica Studio, tu santuario de bienestar integral en Toluca, Metepec, Zinacantepec y Lerma. Clases de yoga, Clases de meditación, Clases de danza y Clases de flexibilidad.",
    images: ['https://www.cuantica-studio.mx/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-verification',
  },
  other: {
    'geo.region': 'MX-MEX',
    'geo.placename': 'Estado de México',
    'geo.position': '19.4326;-99.1332',
    'ICBM': '19.4326, -99.1332',
    'distribution': 'global',
    'rating': '4.8',
    'reviewCount': '150+',
    'priceRange': '$$',
    'acceptsReservations': 'true',
    'servesCuisine': 'wellness',
    'amenityFeature': 'yoga studio, meditation room, dance studio, wellness center',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        {/* Favicon real de Cuántica Studio */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/isologo_cuantica.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        
        {/* Meta tags específicos para favicon */}
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Metadatos para SEO local */}
        <meta name="geo.region" content="MX-MEX" />
        <meta name="geo.placename" content="Toluca, Metepec, Zinacantepec, Lerma" />
        <meta name="geo.position" content="19.4326;-99.1332" />
        <meta name="ICBM" content="19.4326, -99.1332" />
        
        {/* Metadatos adicionales para posicionamiento local */}
        <meta name="business:contact_data:street_address" content="Av. Principal, Toluca, Estado de México" />
        <meta name="business:contact_data:locality" content="Toluca" />
        <meta name="business:contact_data:administrative_area" content="Estado de México" />
        <meta name="business:contact_data:country_name" content="México" />
        <meta name="business:contact_data:postal_code" content="50000" />
        <meta name="business:contact_data:phone_number" content="+52-722-XXX-XXXX" />
        <meta name="business:contact_data:email" content="info@cuantica-studio.com" />
        <meta name="business:contact_data:website" content="https://cuantica-studio.mx" />
        
        {/* Marcado estructurado principal */}
        <StructuredData type="organization" city="Toluca" />
      </head>
      <body>
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <WhatsAppButton 
          phoneNumber="+573001234567" 
          message="¡Hola! Me gustaría obtener más información sobre las clases en Cuantica Studio." 
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import { Alex_Brush } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-league-spartan",
});

const alexBrush = Alex_Brush({
  weight: "400", // solo tiene 400
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuántica Studio - Yoga, Meditación y Danza en Estado de México | Toluca, Metepec, Zinacantepec, Lerma",
  description: "Descubre el mejor estudio de yoga, meditación y danza en Estado de México. Clases de acroyoga, flexibilidad, heels dance y más en Toluca, Metepec, Zinacantepec y Lerma. Profesores certificados, horarios flexibles. ¡Reserva tu clase hoy!",
  keywords: "yoga estado mexico, meditacion estado mexico, danza estado mexico, acroyoga estado mexico, flexibilidad estado mexico, heels dance estado mexico, estudio yoga estado mexico, clases yoga estado mexico, yoga toluca, yoga metepec, yoga zinacantepec, yoga lerma, meditacion toluca, meditacion metepec, meditacion zinacantepec, meditacion lerma, danza toluca, danza metepec, danza zinacantepec, danza lerma, acroyoga toluca, acroyoga metepec, acroyoga zinacantepec, acroyoga lerma, flexibilidad toluca, flexibilidad metepec, flexibilidad zinacantepec, flexibilidad lerma, heels dance toluca, heels dance metepec, heels dance zinacantepec, heels dance lerma, estudio yoga toluca, estudio yoga metepec, estudio yoga zinacantepec, estudio yoga lerma, clases yoga toluca, clases yoga metepec, clases yoga zinacantepec, clases yoga lerma, yoga cerca de mi, meditacion cerca de mi, danza cerca de mi, acroyoga cerca de mi, flexibilidad cerca de mi, heels dance cerca de mi, estudio yoga cerca de mi, clases yoga cerca de mi",
  authors: [{ name: "Cuántica Studio" }],
  creator: "Cuántica Studio",
  publisher: "Cuántica Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cuantica-studio.com'),
  alternates: {
    canonical: 'https://cuantica-studio.com',
  },
  openGraph: {
    title: "Cuántica Studio - Yoga, Meditación y Danza en Estado de México",
    description: "El mejor estudio de yoga, meditación y danza en Estado de México. Clases de acroyoga, flexibilidad, heels dance y más en Toluca, Metepec, Zinacantepec y Lerma.",
    url: 'https://cuantica-studio.com',
    siteName: 'Cuántica Studio',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cuántica Studio - Yoga, Meditación y Danza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cuántica Studio - Yoga, Meditación y Danza en Estado de México",
    description: "El mejor estudio de yoga, meditación y danza en Estado de México. Clases de acroyoga, flexibilidad, heels dance y más.",
    images: ['/logo.jpeg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://cuantica-studio.com" />
        <meta name="geo.region" content="MX-MEX" />
        <meta name="geo.placename" content="Estado de México" />
        <meta name="geo.position" content="19.4326;-99.1332" />
        <meta name="ICBM" content="19.4326, -99.1332" />
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

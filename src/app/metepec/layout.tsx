import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuántica Studio - Yoga, Meditación y Danza en Metepec, Estado de México',
  description: 'Descubre el mejor estudio de yoga, meditación y danza en Metepec. Clases de acroyoga, flexibilidad, heels dance y más. Profesores certificados, horarios flexibles. ¡Reserva tu clase hoy!',
  keywords: 'yoga metepec, meditacion metepec, danza metepec, acroyoga metepec, flexibilidad metepec, heels dance metepec, estudio yoga metepec, clases yoga metepec, yoga estado mexico, meditacion estado mexico, danza estado mexico, acroyoga estado mexico, flexibilidad estado mexico, heels dance estado mexico, estudio yoga estado mexico, clases yoga estado mexico, yoga cerca de mi, meditacion cerca de mi, danza cerca de mi, acroyoga cerca de mi, flexibilidad cerca de mi, heels dance cerca de mi, estudio yoga cerca de mi, clases yoga cerca de mi',
  openGraph: {
    title: 'Cuántica Studio - Yoga, Meditación y Danza en Metepec, Estado de México',
    description: 'El mejor estudio de yoga, meditación y danza en Metepec. Clases de acroyoga, flexibilidad, heels dance y más. ¡Reserva tu clase hoy!',
    url: 'https://cuantica-studio.com/metepec',
    siteName: 'Cuántica Studio',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuántica Studio - Yoga, Meditación y Danza en Metepec, Estado de México',
    description: 'El mejor estudio de yoga, meditación y danza en Metepec. Clases de acroyoga, flexibilidad, heels dance y más.',
  },
  alternates: {
    canonical: 'https://cuantica-studio.com/metepec',
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
};

export default function MetepecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

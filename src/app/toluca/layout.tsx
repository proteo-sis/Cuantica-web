import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuántica Studio - Yoga, Meditación y Danza en Toluca, Estado de México',
  description: 'Descubre el mejor estudio de yoga, meditación y danza en Toluca. Clases de acroyoga, flexibilidad, heels dance y más. Profesores certificados, horarios flexibles. ¡Reserva tu clase hoy!',
  keywords: 'yoga toluca, meditacion toluca, danza toluca, acroyoga toluca, flexibilidad toluca, heels dance toluca, estudio yoga toluca, clases yoga toluca, yoga estado mexico, meditacion estado mexico, danza estado mexico, acroyoga estado mexico, flexibilidad estado mexico, heels dance estado mexico, estudio yoga estado mexico, clases yoga estado mexico, yoga cerca de mi, meditacion cerca de mi, danza cerca de mi, acroyoga cerca de mi, flexibilidad cerca de mi, heels dance cerca de mi, estudio yoga cerca de mi, clases yoga cerca de mi',
  openGraph: {
    title: 'Cuántica Studio - Yoga, Meditación y Danza en Toluca, Estado de México',
    description: 'El mejor estudio de yoga, meditación y danza en Toluca. Clases de acroyoga, flexibilidad, heels dance y más. ¡Reserva tu clase hoy!',
    url: 'https://cuantica-studio.com/toluca',
    siteName: 'Cuántica Studio',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cuántica Studio - Yoga, Meditación y Danza en Toluca, Estado de México',
    description: 'El mejor estudio de yoga, meditación y danza en Toluca. Clases de acroyoga, flexibilidad, heels dance y más.',
  },
  alternates: {
    canonical: 'https://cuantica-studio.com/toluca',
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

export default function TolucaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import { generateCityMetadata } from "@/components/CitySEO";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = generateCityMetadata({
  city: "Toluca",
  citySlug: "toluca",
  description:
    "Yoga, meditación y danza en Toluca. Cuántica Studio en Plaza Maneca: clases de yoga, flexibilidad, heels dance y bienestar integral. ¡Reserva tu clase hoy!",
});

export default function TolucaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="localBusiness" city="Toluca" />
      {children}
    </>
  );
}

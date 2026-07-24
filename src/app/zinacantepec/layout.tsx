import type { Metadata } from "next";
import { generateCityMetadata } from "@/components/CitySEO";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = generateCityMetadata({
  city: "Zinacantepec",
  citySlug: "zinacantepec",
  description:
    "Yoga y bienestar cerca de Zinacantepec. Cuántica Studio en Toluca: clases de yoga, meditación, danza y flexibilidad. ¡Reserva tu clase hoy!",
});

export default function ZinacantepecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="localBusiness" city="Zinacantepec" />
      {children}
    </>
  );
}

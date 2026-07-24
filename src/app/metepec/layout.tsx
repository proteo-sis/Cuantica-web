import type { Metadata } from "next";
import { generateCityMetadata } from "@/components/CitySEO";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = generateCityMetadata({
  city: "Metepec",
  citySlug: "metepec",
  description:
    "Yoga y bienestar cerca de Metepec. Cuántica Studio en Toluca ofrece clases de yoga, meditación, danza y flexibilidad a minutos de Metepec. ¡Reserva hoy!",
});

export default function MetepecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="localBusiness" city="Metepec" />
      {children}
    </>
  );
}

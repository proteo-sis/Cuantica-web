import type { Metadata } from "next";
import { generateCityMetadata } from "@/components/CitySEO";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = generateCityMetadata({
  city: "Lerma",
  citySlug: "lerma",
  description:
    "Yoga y bienestar cerca de Lerma, Estado de México. Cuántica Studio: clases de yoga, meditación, danza y flexibilidad. Fácil acceso desde Lerma. ¡Reserva hoy!",
});

export default function LermaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData type="localBusiness" city="Lerma" />
      {children}
    </>
  );
}

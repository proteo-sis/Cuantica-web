import StudioClientWrapper from "./StudioClient";

export const metadata = {
  title: "Blog – Cuántica Studio",
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  return (
    <StudioClientWrapper projectId={projectId} dataset={dataset} />
  );
}

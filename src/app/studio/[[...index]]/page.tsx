import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

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
  return <NextStudio config={config} />;
}

"use client";

import dynamic from "next/dynamic";

// Sanity Studio usa createContext y solo puede ejecutarse en el cliente.
// Cargamos todo el Studio con ssr: false para que nunca se ejecute en el servidor.
const StudioLoader = dynamic(
  () => import("./StudioLoader").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div style={{ padding: 24, fontFamily: "sans-serif" }}>
        Cargando Studio…
      </div>
    ),
  }
);

interface Props {
  projectId: string;
  dataset: string;
}

export default function StudioClientWrapper({ projectId, dataset }: Props) {
  return <StudioLoader projectId={projectId} dataset={dataset} />;
}

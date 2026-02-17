"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

interface Props {
  projectId: string;
  dataset: string;
}

export default function StudioLoader({ projectId, dataset }: Props) {
  const hasValidProjectId =
    projectId && projectId.length > 0 && projectId !== "missing-project-id";

  if (!hasValidProjectId) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          fontFamily: "system-ui, sans-serif",
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            maxWidth: 480,
            background: "white",
            padding: 32,
            borderRadius: 8,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ margin: "0 0 16px", fontSize: 20 }}>
            Configuración de Sanity
          </h1>
          <p style={{ margin: "0 0 16px", color: "#555", lineHeight: 1.5 }}>
            Falta el <strong>Project ID</strong> de Sanity. Sin él, el Studio
            no puede conectar con tu proyecto.
          </p>
          <ol
            style={{
              margin: "0 0 16px",
              paddingLeft: 20,
              color: "#555",
              lineHeight: 1.8,
            }}
          >
            <li>
              Entra en{" "}
              <a
                href="https://www.sanity.io/manage"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#e03e2f" }}
              >
                sanity.io/manage
              </a>
            </li>
            <li>Crea un proyecto o abre uno existente</li>
            <li>Copia el <strong>Project ID</strong> (ej: abc123xy)</li>
            <li>
              En la raíz del proyecto, crea o edita el archivo <code>.env</code>:
            </li>
          </ol>
          <pre
            style={{
              margin: 0,
              padding: 16,
              background: "#1e1e1e",
              color: "#d4d4d4",
              borderRadius: 6,
              fontSize: 13,
              overflow: "auto",
            }}
          >
            {`NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production`}
          </pre>
          <p style={{ margin: "16px 0 0", color: "#666", fontSize: 14 }}>
            Sustituye <code>tu_project_id_aqui</code> por tu Project ID real.
            Luego reinicia el servidor (<code>npm run dev</code>).
          </p>
        </div>
      </div>
    );
  }

  const configWithEnv = { ...config, projectId, dataset };
  return <NextStudio config={configWithEnv} />;
}

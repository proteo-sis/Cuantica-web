"use client";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[var(--color-black-soft)]">¿Qué es </span>
            <span
              style={{
                color: "var(--color-pink-vibrant)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Cuántica Studio
            </span>
            <span className="text-[var(--color-black-soft)]">?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-lavender-dark)] to-[var(--color-pink-vibrant)] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              {/* Glassmorphism y borde elegante */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-lavender-light)]/60 to-[var(--color-pink-pastel)]/40 rounded-2xl transform rotate-2 blur-[2px]" />
              <div
                className="relative rounded-2xl p-8 shadow-2xl border"
                style={{
                  background: "rgba(255,255,255,0.95)", // más translúcido
                  borderColor: "var(--color-pink-vibrant)",
                  boxShadow:
                    "1px 12px 48px 0 rgba(238,33,127,0.28), 0 0 0 6px rgba(255,192,208,0.22), 0 1.5px 24px 0 rgba(255,255,255,0.45) inset",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <div className="space-y-6 text-[var(--color-black-soft)] leading-relaxed">
                  <p className="text-lg">
                    <strong>Cuántica Studio</strong> es un centro de bienestar
                    holístico dedicado a promover el equilibrio físico, mental y
                    emocional a través de prácticas integrativas.
                  </p>
                  <p className="text-lg">
                    Nuestro estudio ofrece una combinación cuidadosamente
                    seleccionada de disciplinas que incluyen yoga, meditación
                    guiada, sanación con sonido terapéutico y artes de
                    movimiento expresivo como la danza.
                  </p>
                  <p className="text-lg">
                    Proporcionamos un ambiente de apoyo e inclusivo diseñado
                    para fomentar la transformación personal, el equilibrio
                    interior y la vida consciente.
                  </p>
                  <p className="text-lg">
                    A través de un enfoque multidisciplinario arraigado en la
                    sabiduría antigua y las metodologías contemporáneas de
                    bienestar, Cuántica Studio empodera a los individuos para
                    reconectarse consigo mismos y cultivar un estado sostenible
                    de armonía y vitalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bienestar Holístico
                </h3>
              </div>
              <p className="text-gray-700">
                Enfoque integral que considera cuerpo, mente y espíritu como un
                todo interconectado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Prácticas Integrativas
                </h3>
              </div>
              <p className="text-gray-700">
                Combinación de yoga, meditación, sanación con sonido y artes de
                movimiento.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ambiente Inclusivo
                </h3>
              </div>
              <p className="text-gray-700">
                Espacio de apoyo donde todos son bienvenidos sin importar su
                nivel de experiencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

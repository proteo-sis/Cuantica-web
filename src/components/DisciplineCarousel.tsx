"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localDisciplinesJson from "./disciplines22.json";

interface LocalDiscipline {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function DisciplineCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [disciplines, setDisciplines] = useState<LocalDiscipline[]>([]);

  const getImageUrl = (url: string) => url;

  useEffect(() => {
    const loadLocalDisciplines = async () => {
      try {
        const mapped: LocalDiscipline[] = (localDisciplinesJson as unknown as Array<{
          name: string;
          image: string;
          description: string;
        }>).map((d, idx) => ({
          id: idx + 1,
          name: d.name,
          image: d.image,
          description: d.description,
        }));
        setDisciplines(mapped);

        // Precargar imágenes
        const imagePromises = mapped.map((discipline) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            const imageUrl = getImageUrl(discipline.image);
            img.src = imageUrl;
            img.onload = resolve as () => void;
          });
        });

        Promise.all(imagePromises).then(() => {
          setIsLoaded(true);
        });
      } catch (error) {
        console.error("Error al cargar las disciplinas locales:", error);
      }
    };

    loadLocalDisciplines();
  }, []);

  // Redirección desactivada temporalmente

  if (!isLoaded) {
    return (
      <div className="w-full min-h-[90vh] bg-black flex items-center justify-center">
        <div className="animate-pulse bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl w-full h-[70vh] max-w-7xl mx-4" />
      </div>
    );
  }

  return (
    <section className="w-full min-h-[90vh] bg-black overflow-hidden relative flex flex-col items-center justify-center px-4 py-20">
      {expandedIndex !== null && disciplines[expandedIndex] && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${getImageUrl(
              disciplines[expandedIndex].image
            )})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.9)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--color-lavender) 30%, var(--color-lavender-light) 70%, rgba(255,255,255,0.1) 100%)",
              opacity: 0.45,
              mixBlendMode: "darken",
            }}
          />
        </div>
      )}

      <div className="relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
        <div className="text-center mb-12 h-[120px]">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NUESTRAS DISCIPLINAS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explora el camino hacia tu transformación integral
          </p>
        </div>

        <div className="flex w-screen h-[60vh] items-center overflow-hidden">
          {disciplines.map((discipline, index) => {
            const imageUrl = getImageUrl(discipline.image);

            return (
              <div
                key={discipline.id}
                onMouseEnter={() => setExpandedIndex(index)}
                className={`
                  relative h-full
                  transition-[width] duration-700 ease-out
                  ${
                    expandedIndex !== null
                      ? expandedIndex === index
                        ? "w-[65%]"
                        : "w-[15%]"
                      : "w-[25%]"
                  }
                  rounded-3xl overflow-hidden
                  border-2 border-white/20 hover:border-white/40
                `}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={discipline.name}
                    fill
                    className={`
                      object-cover w-full h-full transition-transform duration-700
                      ${
                        expandedIndex === index
                          ? "scale-105"
                          : "hover:scale-110"
                      }
                    `}
                    priority={index < 2}
                    quality={90}
                    unoptimized // Añadimos esta prop para evitar la optimización de Next.js
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3
                    className={`
                      block font-bold text-white mb-3 text-center transition-all duration-700
                      ${
                        expandedIndex !== null && expandedIndex !== index
                          ? "text-lg lg:text-xl opacity-80"
                          : "text-2xl lg:text-3xl opacity-100"
                      }
                    `}
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}
                  >
                    {discipline.name}
                  </h3>

                  {expandedIndex === index && (
                    <div className="animate-fade-in mt-4 w-full max-w-md mx-auto space-y-4">
                      <p className="text-white/90 leading-relaxed text-center backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10">
                        {discipline.description}
                      </p>
                      <button
                        onClick={() => {
                          // Redirigir a la página de contacto
                          const element = document.getElementById("contacto");
                          if (element) {
                            const headerHeight = 100; // Altura del header en desktop
                            const additionalOffset = 32;
                            const headerOffset = headerHeight + additionalOffset;

                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg
                                 text-white font-medium text-sm
                                 bg-white/10 backdrop-blur-sm
                                 border border-white/20
                                 transition-all duration-300
                                 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Contactar
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

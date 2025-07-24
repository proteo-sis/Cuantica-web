"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getDisciplineSlug } from "@/utils/disciplineUtils";
// @ts-ignore
import disciplines from "./disciplines.json";

interface Discipline {
  name: string;
  image: string;
  description: string;
}

export default function DisciplineCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const data: Discipline[] = disciplines as Discipline[];

  useEffect(() => {
    const imagePromises = data.map((discipline) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = discipline.image;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  const handleDisciplineClick = (discipline: Discipline) => {
    const slug = getDisciplineSlug(discipline.name);
    router.push(`/disciplinas/${slug}`);
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-[90vh] bg-black flex items-center justify-center">
        <div className="animate-pulse bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl w-full h-[70vh] max-w-7xl mx-4" />
      </div>
    );
  }

  return (
    <section className="w-full min-h-[90vh] bg-black overflow-hidden relative flex flex-col items-center justify-center px-4 py-20">
      {/* Fondo con optimización */}
      {expandedIndex !== null && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${data[expandedIndex].image})`,
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
        {/* Título con dimensiones fijas */}
        <div className="text-center mb-12 h-[120px]">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NUESTRAS DISCIPLINAS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explora el camino hacia tu transformación integral
          </p>
        </div>

        {/* Carrusel optimizado */}
        <div className="flex w-screen h-[60vh] items-center overflow-hidden">
          {data.map((discipline, index) => (
            <div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              onClick={() => handleDisciplineClick(discipline)}
              className={`
                relative h-full cursor-pointer
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
              {/* Imagen con aspect ratio fijo */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={discipline.image}
                  alt={discipline.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`
                    object-cover transition-transform duration-700
                    ${expandedIndex === index ? "scale-105" : "hover:scale-110"}
                  `}
                  priority={index < 2}
                  quality={90}
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
                      className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg
                               text-white font-medium text-sm
                               bg-white/10 backdrop-blur-sm
                               border border-white/20
                               transition-all duration-300
                               hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Descubre más
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
          ))}
        </div>
      </div>
    </section>
  );
}

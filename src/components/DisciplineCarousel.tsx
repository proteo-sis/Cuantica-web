"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// @ts-ignore
import disciplines from "./disciplines.json";

interface Discipline {
  name: string;
  image: string;
  description: string;
}

// Función para convertir el nombre a un slug URL-friendly
function nameToSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function DisciplineCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();
  const data: Discipline[] = disciplines as Discipline[];

  const handleDisciplineClick = (discipline: Discipline) => {
    const slug = nameToSlug(discipline.name);
    router.push(`/disciplinas/${slug}`);
  };

  return (
    <section className="w-full min-h-[90vh] bg-black overflow-hidden relative flex flex-col items-center justify-center px-4 py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${data[expandedIndex || 0].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.9)",
        }}
      >
        {/* Overlay mejorado */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, var(--color-lavender) 30%, var(--color-lavender-light) 70%, rgba(255,255,255,0.1) 100%)",
            opacity: 0.45,
            mixBlendMode: "darken",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
        {/* Título mejorado */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-4xl font-bold text-white mb-4 text-center"
            style={{
              textShadow:
                "3px 3px 6px rgba(0,0,0,0.1), -3px -3px 6px rgba(0,0,0,0.1), 3px -3px 6px rgba(0,0,0,0.5), -3px 3px 6px rgba(0,0,0,0.7)",
              letterSpacing: "0.05em",
            }}
          >
            NUESTRAS DISCIPLINAS
          </h2>
          <p
            className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Descubre las prácticas que transformarán tu bienestar físico, mental
            y espiritual
          </p>
        </div>

        {/* Carousel mejorado */}
        <div className="flex w-screen h-[60vh] items-center overflow-hidden">
          {data.map((discipline, index) => (
            <div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              onClick={() => handleDisciplineClick(discipline)}
              className={`
                relative h-full cursor-pointer
                transition-[flex-grow,transform] duration-1000 ease-in-out
                ${
                  expandedIndex !== null
                    ? expandedIndex === index
                      ? "w-[65%]"
                      : "w-[15%]"
                    : "flex-1"
                }
                rounded-3xl overflow-hidden
                border-2 border-white/20 hover:border-white/40
              `}
              style={{
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <img
                src={discipline.image}
                alt={discipline.name}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-transform duration-1000
                  ${expandedIndex === index ? "scale-105" : "hover:scale-125"}
                `}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span
                  className={`
                  block font-bold text-white mb-2 drop-shadow-lg text-center transition-all duration-1000
                  ${
                    expandedIndex !== null && expandedIndex !== index
                      ? "opacity-80 text-lg lg:text-xl"
                      : "text-2xl lg:text-3xl opacity-100"
                  }
                `}
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {discipline.name}
                </span>

                {expandedIndex === index && (
                  <div className="animate-fade-in mt-4 w-full max-w-md mx-auto">
                    <p
                      className="text-base text-white/90 leading-relaxed mb-4 bg-black/70 rounded-xl p-4 backdrop-blur-md text-center border border-white/20"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {discipline.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-block text-[var(--color-pink-vibrant)] font-semibold bg-black/60 rounded-full px-4 py-2 border border-[var(--color-pink-vibrant)]/30 backdrop-blur-sm hover:bg-[var(--color-pink-vibrant)]/20 transition-all duration-300">
                        Descubre más
                      </span>
                    </div>
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

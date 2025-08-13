"use client";
import React, { useState, useCallback, useMemo, useRef } from "react";
import OptimizedImage from "./OptimizedImage";
import localDisciplinesJson from "./disciplines22.json";

interface LocalDiscipline {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function DisciplineCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoizar las disciplinas para evitar recreaciones innecesarias
  const disciplines = useMemo<LocalDiscipline[]>(() => {
    return (localDisciplinesJson as unknown as Array<{
      name: string;
      image: string;
      description: string;
    }>).map((d, idx) => ({
      id: idx + 1,
      name: d.name,
      image: d.image,
      description: d.description,
    }));
  }, []);

  // Memoizar la función de manejo del hover con debounce para evitar múltiples cambios rápidos
  const handleMouseEnter = useCallback((index: number) => {
    // Limpiar timeout anterior si existe
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Aplicar un pequeño delay para evitar cambios muy rápidos que puedan causar lentitud
    hoverTimeoutRef.current = setTimeout(() => {
      setExpandedIndex(index);
    }, 50);
  }, []);

  // Limpiar timeout al desmontar
  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setExpandedIndex(null);
  }, []);

  // Memoizar la función de scroll para evitar recreaciones
  const handleContactClick = useCallback(() => {
    const element = document.getElementById("contacto");
    if (element) {
      const headerHeight = 100;
      const additionalOffset = 32;
      const headerOffset = headerHeight + additionalOffset;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Calcular bgImage fuera de JSX para evitar recrear objetos en cada render
  const bgImage = useMemo(() => {
    if (expandedIndex === null || !disciplines[expandedIndex]) return null;
    return disciplines[expandedIndex].image;
  }, [expandedIndex, disciplines]);

  // Memoizar el estilo del fondo expandido para evitar recrear objetos
  const expandedBackgroundStyle = useMemo(() => {
    if (!bgImage) return {};
    
    return {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(4px) brightness(0.9)",
    };
  }, [bgImage]);

  // Memoizar las clases CSS estáticas para evitar recálculos
  const staticClasses = useMemo(() => ({
    container: "w-full min-h-[90vh] bg-black overflow-hidden relative flex flex-col items-center justify-center px-4 py-20",
    title: "text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400",
    subtitle: "text-xl text-white/80 max-w-3xl mx-auto leading-relaxed",
    carousel: "flex w-screen h-[60vh] items-center overflow-hidden",
    disciplineBase: "relative h-full transition-[width] duration-700 ease-in-out rounded-3xl overflow-hidden border-2 border-white/20 hover:border-white/40",
    imageContainer: "absolute inset-0 w-full h-full",
    gradient: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent",
    contentContainer: "absolute bottom-0 left-0 right-0 p-6 z-10",
    description: "text-white/90 leading-relaxed text-center backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10",
    button: "w-full inline-flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium text-sm bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
  }), []);

  // Memoizar las clases CSS dinámicas para evitar recálculos
  const getDisciplineClasses = useCallback((index: number) => {
    if (expandedIndex !== null) {
      return expandedIndex === index ? "w-[65%]" : "w-[15%]";
    }
    return "w-[25%]";
  }, [expandedIndex]);

  const getImageClasses = useCallback((index: number) => {
    if (expandedIndex === index) {
      return "scale-105 will-change-transform";
    }
    return "hover:scale-110 will-change-transform";
  }, [expandedIndex]);

  const getTitleClasses = useCallback((index: number) => {
    if (expandedIndex !== null && expandedIndex !== index) {
      return "text-lg lg:text-xl opacity-80";
    }
    return "text-2xl lg:text-3xl opacity-100";
  }, [expandedIndex]);

  // Función única para manejar el hover usando data-index
  const handleMouseEnterIndex = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const index = parseInt(e.currentTarget.getAttribute('data-index') || '0');
    handleMouseEnter(index);
  }, [handleMouseEnter]);

  return (
    <section className={staticClasses.container}>
      {/* Fondo expandido optimizado - solo se renderiza cuando cambia expandedIndex */}
      {bgImage && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={expandedBackgroundStyle}
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
          <h2 className={staticClasses.title}>
            NUESTRAS DISCIPLINAS
          </h2>
          <p className={staticClasses.subtitle}>
            Explora el camino hacia tu transformación integral
          </p>
        </div>

        <div className={staticClasses.carousel}>
          {disciplines.map((discipline, index) => (
            <div
              key={discipline.id}
              data-index={index}
              onMouseEnter={handleMouseEnterIndex}
              onMouseLeave={handleMouseLeave}
              className={`
                ${staticClasses.disciplineBase}
                ${getDisciplineClasses(index)}
              `}
            >
              <div className={staticClasses.imageContainer}>
                <OptimizedImage
                  src={discipline.image}
                  alt={discipline.name}
                  priority={index === 0}
                  loading={index > 0 ? "lazy" : "eager"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`
                    object-cover w-full h-full transition-transform duration-700
                    ${getImageClasses(index)}
                  `}
                />
              </div>

              <div className={staticClasses.gradient} />

              <div className={staticClasses.contentContainer}>
                <h3
                  className={`
                    block font-bold text-white mb-3 text-center transition-all duration-700
                    ${getTitleClasses(index)}
                  `}
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}
                >
                  {discipline.name}
                </h3>

                {expandedIndex === index && (
                  <div className="animate-fade-in mt-4 w-full max-w-md mx-auto space-y-4">
                    <p className={staticClasses.description}>
                      {discipline.description}
                    </p>
                    <button
                      onClick={handleContactClick}
                      className={staticClasses.button}
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
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getDisciplineSlug } from "@/utils/disciplineUtils";
import disciplines from "./disciplines22.json";

interface Discipline {
  name: string;
  image: string;
  description: string;
}

export default function DisciplineCarouselMinimal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
  }, [data]);

  const handleClick = (index: number) => {
    if (activeIndex === index && isExpanded) {
      // Redirigir a la página de contacto
      const element = document.getElementById("contacto");
      if (element) {
        const headerHeight = 80; // Altura del header en móvil
        const additionalOffset = 32;
        const headerOffset = headerHeight + additionalOffset;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      setActiveIndex(index);
      setIsExpanded(activeIndex === index ? !isExpanded : true);
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-[80vh] bg-black/95 flex items-center justify-center">
        <div className="animate-pulse bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl w-full h-[60vh] max-w-7xl mx-4" />
      </div>
    );
  }

  return (
    <section className="w-full min-h-[80vh] bg-black/95 relative py-16 px-4 overflow-hidden">
      {/* Fondo minimalista */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-pink-900/5" />
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NUESTRAS DISCIPLINAS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explora el camino hacia tu transformación integral
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {data.map((discipline, index) => (
            <motion.div
              key={index}
              className={`
                relative overflow-hidden rounded-xl cursor-pointer
                transition-all duration-500 ease-out transform-gpu
                ${
                  activeIndex === index && isExpanded
                    ? "lg:col-span-2 lg:row-span-2"
                    : ""
                }
              `}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                height: activeIndex === index && isExpanded ? 500 : 300,
              }}
              transition={{ duration: 0.5 }}
              onClick={() => handleClick(index)}
            >
              {/* Contenedor de imagen con efecto parallax */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  scale: activeIndex === index && isExpanded ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={discipline.image}
                  alt={discipline.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  quality={90}
                />

                {/* Overlay gradual */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </motion.div>

              {/* Contenido */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <motion.h3
                  className="text-2xl font-bold text-white mb-3"
                  animate={{
                    fontSize:
                      activeIndex === index && isExpanded ? "2.5rem" : "1.5rem",
                  }}
                >
                  {discipline.name}
                </motion.h3>

                <AnimatePresence>
                  {activeIndex === index && isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="space-y-4"
                    >
                      <p className="text-white/90 leading-relaxed">
                        {discipline.description}
                      </p>
                      <motion.button
                        className="inline-flex items-center px-4 py-2 rounded-lg
                                 text-white font-medium text-sm
                                 bg-white/10 backdrop-blur-sm
                                 border border-white/20
                                 transition-all duration-300"
                        whileHover={{
                          backgroundColor: "rgba(255,255,255,0.2)",
                          scale: 1.02,
                        }}
                        whileTap={{ scale: 0.98 }}
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
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Indicador de estado */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white"
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                  opacity: activeIndex === index ? 1 : 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

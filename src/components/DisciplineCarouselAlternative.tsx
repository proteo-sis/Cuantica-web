"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getDisciplineSlug } from "@/utils/disciplineUtils";
// @ts-ignore
import disciplines from "./disciplines22.json";

interface Discipline {
  name: string;
  image: string;
  description: string;
}

export default function DisciplineCarouselAlternative() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<number | null>(
    null
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const handleDisciplineClick = (index: number, discipline: Discipline) => {
    if (!isDragging) {
      if (selectedDiscipline === index) {
        const slug = getDisciplineSlug(discipline.name);
        router.push(`/disciplinas/${slug}`);
      } else {
        setSelectedDiscipline(index);
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-screen bg-black/95 flex items-center justify-center">
        <div className="animate-pulse bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl w-full h-[70vh] max-w-7xl mx-4" />
      </div>
    );
  }

  return (
    <section className="w-full min-h-screen bg-black/95 relative py-20 px-4 overflow-hidden">
      {/* Efecto de fondo dinámico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        {selectedDiscipline !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${data[selectedDiscipline].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px) brightness(0.4)",
            }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NUESTRAS DISCIPLINAS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explora el camino hacia tu transformación integral
          </p>
        </motion.div>

        <div
          ref={carouselRef}
          className="relative flex flex-wrap justify-center gap-6 perspective-1000"
        >
          {data.map((discipline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: selectedDiscipline === null ? 1.05 : 1 }}
              className={`
                relative cursor-pointer transition-all duration-500
                ${
                  selectedDiscipline === null
                    ? "w-[300px] h-[400px]"
                    : selectedDiscipline === index
                    ? "w-[600px] h-[500px]"
                    : "w-[200px] h-[300px] opacity-50"
                }
                rounded-2xl overflow-hidden
                transform-gpu
              `}
              onClick={() => handleDisciplineClick(index, discipline)}
              onDragEnd={() => setIsDragging(false)}
              onDragStart={() => setIsDragging(true)}
              drag="x"
              dragConstraints={carouselRef}
              dragElastic={0.2}
            >
              <Image
                src={discipline.image}
                alt={discipline.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
                quality={90}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <motion.h3
                  initial={false}
                  animate={{
                    scale: selectedDiscipline === index ? 1.1 : 1,
                  }}
                  className="text-2xl font-bold text-white mb-3 text-center"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.9)" }}
                >
                  {discipline.name}
                </motion.h3>

                <AnimatePresence>
                  {selectedDiscipline === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="space-y-4"
                    >
                      <p className="text-white/90 leading-relaxed text-center backdrop-blur-sm bg-black/40 p-4 rounded-xl">
                        {discipline.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold 
                                 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                      >
                        Descubre más
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

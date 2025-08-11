"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import rawEvents from "../data/events.json";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  description: string;
  image: string;
  category: string;
  spots: number;
}

const events = rawEvents as Event[];

export default function EventsCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // No side-effects required here

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentEventIndex(
      (prevIndex) => (prevIndex + newDirection + events.length) % events.length
    );
  };

  const currentEvent = events[currentEventIndex];
  const eventDate = new Date(currentEvent.date);

  return (
    <section className="w-full bg-gradient-to-br from-[var(--color-lavender-light)] via-[var(--color-white-pure)] to-[var(--color-lavender-light)] py-20 overflow-hidden relative">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-pink-vibrant)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-lavender)]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[var(--color-pink-vibrant)]/5 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[var(--color-lavender)]/8 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-[var(--color-black-soft)] relative">
              Próximos
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-pink-vibrant)] to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
            <span
              className="relative inline-block ml-4"
              style={{
                color: "var(--color-pink-vibrant)",
                textShadow: "0 4px 20px rgba(238,33,127,0.3)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Eventos
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[var(--color-pink-vibrant)]/20 to-[var(--color-lavender)]/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h2>
          <p className="text-lg text-[var(--color-black-soft)]/70 max-w-2xl mx-auto">
            Descubre experiencias únicas y transformadoras que te inspirarán
          </p>
        </motion.div>

        <div className="relative h-[700px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentEventIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative group h-[600px]">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="grid lg:grid-cols-2 gap-8 h-full relative z-10">
                  {/* Imagen del evento */}
                  <div className="relative h-[300px] lg:h-[600px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${currentEvent.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Efecto de partículas flotantes */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/30 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Categoría flotante con efecto mejorado */}
                    <motion.div
                      className="absolute top-6 left-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="px-6 py-3 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] text-white rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                        {currentEvent.category}
                      </span>
                    </motion.div>

                    {/* Badge de "Nuevo" o "Popular" */}
                    <motion.div
                      className="absolute top-6 right-6"
                      initial={{ rotate: -10, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    ></motion.div>
                  </div>

                  {/* Contenido del evento */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between h-[600px]">
                    <div className="flex-1">
                      <motion.h3
                        className="text-3xl font-bold text-[var(--color-black-soft)] mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentEvent.title}
                      </motion.h3>

                      <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <svg
                            className="w-5 h-5 text-[var(--color-pink-vibrant)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-[var(--color-black-soft)]/80 font-medium">
                            {format(eventDate, "d 'de' MMMM, yyyy", {
                              locale: es,
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <svg
                            className="w-5 h-5 text-[var(--color-pink-vibrant)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-[var(--color-black-soft)]/80 font-medium">
                            {currentEvent.time} hrs
                          </span>
                        </div>
                      </motion.div>

                      <motion.p
                        className="text-[var(--color-black-soft)]/70 mb-8 text-lg leading-relaxed overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentEvent.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center gap-4 mb-8 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm p-4 rounded-2xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-pink-vibrant)] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {currentEvent.instructor
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-bold text-[var(--color-black-soft)] text-lg">
                            {currentEvent.instructor}
                          </p>
                          <p className="text-sm text-[var(--color-black-soft)]/60">
                            Instructor Certificado
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="flex items-center justify-between bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm p-6 rounded-2xl mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div>
                        <p className="text-sm text-[var(--color-black-soft)]/60 mb-1">
                          Lugares disponibles
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-3xl font-bold text-[var(--color-pink-vibrant)]">
                            {currentEvent.spots}
                          </p>
                          <motion.div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>
                      <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[var(--color-pink-vibrant)]/30 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Reservar lugar
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación mejorados */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-pink-vibrant)] hover:bg-[var(--color-pink-vibrant)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <div className="flex items-center gap-3">
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentEventIndex ? 1 : -1);
                    setCurrentEventIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentEventIndex
                      ? "w-10 h-3 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)]"
                      : "w-3 h-3 bg-[var(--color-pink-vibrant)]/30 hover:bg-[var(--color-pink-vibrant)]/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-pink-vibrant)] hover:bg-[var(--color-pink-vibrant)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

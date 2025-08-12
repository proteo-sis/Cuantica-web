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
  price: number;
  currency: string;
  departureLocation: string;
  destination: string;
  duration: string;
  departureTime: string;
  returnTime: string;
  included: string[];
  highlights: string[];
  difficulty: string;
  minAge: number;
  maxAge: number;
  groupSize: string;
  whatToBring: string[];
  isComingSoon?: boolean;
}

const events = rawEvents as Event[];

export default function EventsCarousel() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-rotación cada 5 segundos
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pausar auto-rotación cuando el usuario interactúa
  const handleManualNavigation = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentEventIndex(
      (prevIndex) => (prevIndex + newDirection + events.length) % events.length
    );
    
    // Reanudar auto-rotación después de 10 segundos de inactividad
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const paginate = (newDirection: number) => {
    handleManualNavigation(newDirection);
  };

  // Resetear expansión cuando cambia el evento
  useEffect(() => {
    setIsExpanded(false);
  }, [currentEventIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const currentEvent = events[currentEventIndex];
  const eventDate = new Date(currentEvent.date);

  return (
    <section className="w-full bg-gradient-to-br from-[var(--color-lavender-light)] via-[var(--color-white-pure)] to-[var(--color-lavender-light)] py-12 md:py-20 overflow-hidden relative">
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
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block text-[var(--color-black-soft)] pb-2 md:pb-0">
              Próximos
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 transform w-[85%] md:left-0 md:translate-x-0 md:w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-pink-vibrant)] to-transparent z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
            <br className="md:hidden" />
            <span
              className="relative inline-block md:ml-4 mt-2 md:mt-0"
              style={{
                color: "var(--color-pink-vibrant)",
                textShadow: "0 4px 20px rgba(238,33,127,0.3)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Eventos
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[var(--color-pink-vibrant)]/20 to-[var(--color-lavender)]/20 rounded-full blur-xl -z-10"
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
          <p className="text-base md:text-lg text-[var(--color-black-soft)]/70 max-w-2xl mx-auto">
            Descubre experiencias únicas y transformadoras que te inspirarán
          </p>
        </motion.div>

        {/* Contenedor responsivo que se adapta al contenido */}
        <div className="relative w-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentEventIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
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
              className="w-full relative"
            >
              {/* Tarjeta principal con altura automática */}
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative group">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Layout responsivo: columna única en móvil, dos columnas en desktop */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 relative z-10">
                  {/* Imagen del evento - altura adaptativa */}
                  <div className="relative h-48 sm:h-64 md:h-80 lg:h-full min-h-[300px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${currentEvent.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Efecto de partículas flotantes - solo en desktop */}
                    <div className="hidden lg:block absolute inset-0">
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

                    {/* Categoría flotante con efecto mejorado - solo para eventos reales */}
                    {!currentEvent.isComingSoon && (
                      <motion.div
                        className="absolute top-4 left-4 md:top-6 md:left-6 z-20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] text-white rounded-full text-xs md:text-sm font-bold shadow-lg backdrop-blur-sm">
                          {currentEvent.category}
                        </span>
                      </motion.div>
                    )}

                    {/* Badge de precio flotante */}
                    <motion.div
                      className="absolute top-4 right-4 md:top-6 md:right-6 z-20"
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      {currentEvent.isComingSoon ? (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-2 shadow-lg backdrop-blur-sm">
                          <span className="text-sm md:text-base font-bold">Próximamente</span>
                        </div>
                      ) : (
                        <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                          <span className="text-lg md:text-xl font-bold text-[var(--color-pink-vibrant)]">
                            ${currentEvent.price.toLocaleString()}
                          </span>
                          <span className="text-xs md:text-sm text-[var(--color-black-soft)]/70 ml-1">
                            {currentEvent.currency}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Contenido del evento - completamente rediseñado */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
                    <div className="flex-1">
                      {/* Título principal */}
                      <motion.h3
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-black-soft)] mb-3 md:mb-4 leading-tight"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {currentEvent.title}
                      </motion.h3>

                      {/* Información esencial: fecha y duración */}
                      <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {!currentEvent.isComingSoon ? (
                          <>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-pink-vibrant)]/10 to-[var(--color-lavender)]/10 backdrop-blur-sm px-3 py-2 rounded-full w-full sm:w-auto justify-center sm:justify-start border border-[var(--color-pink-vibrant)]/20">
                              <svg
                                className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-pink-vibrant)] flex-shrink-0"
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
                              <span className="text-sm md:text-base text-[var(--color-black-soft)]/80 font-medium text-center sm:text-left">
                                {format(eventDate, "d 'de' MMMM, yyyy", {
                                  locale: es,
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-lavender)]/10 to-[var(--color-pink-vibrant)]/10 backdrop-blur-sm px-3 py-2 rounded-full w-full sm:w-auto justify-center sm:justify-start border border-[var(--color-lavender)]/20">
                              <svg
                                className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-lavender)] flex-shrink-0"
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
                              <span className="text-sm md:text-base text-[var(--color-black-soft)]/80 font-medium text-center sm:text-left">
                                {currentEvent.duration}
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-medium text-purple-700">En Preparación</span>
                              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-lg font-bold text-purple-800">¡Pronto anunciaremos nuevos eventos!</p>
                          </div>
                        )}
                      </motion.div>

                      {/* Descripción compacta */}
                      <motion.p
                        className="text-sm md:text-base lg:text-lg text-[var(--color-black-soft)]/70 mb-6 md:mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentEvent.description}
                      </motion.p>

                      {/* Botón para expandir/contraer información - solo para eventos reales */}
                      {!currentEvent.isComingSoon && (
                        <motion.button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="w-full mb-6 md:mb-8 p-3 bg-gradient-to-r from-[var(--color-lavender)]/10 to-[var(--color-pink-vibrant)]/10 border border-[var(--color-lavender)]/30 rounded-xl hover:from-[var(--color-lavender)]/20 hover:to-[var(--color-pink-vibrant)]/20 transition-all duration-300 group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-sm md:text-base font-medium text-[var(--color-black-soft)]">
                              {isExpanded ? "Mostrar menos" : "Ver más detalles"}
                            </span>
                            <motion.svg
                              className="w-5 h-5 text-[var(--color-lavender)] transition-transform duration-300"
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </div>
                        </motion.button>
                      )}

                      {/* Información expandida - solo visible cuando isExpanded es true */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {/* Horarios de salida y regreso */}
                            <motion.div
                              className="mb-6 md:mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-green-700">Salida</span>
                                  </div>
                                  <p className="text-sm font-bold text-green-800">{currentEvent.departureTime}</p>
                                  <p className="text-xs text-green-600">{currentEvent.departureLocation}</p>
                                </div>
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-xl border border-orange-200">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-orange-700">Regreso</span>
                                  </div>
                                  <p className="text-sm font-bold text-orange-800">{currentEvent.returnTime}</p>
                                  <p className="text-xs text-orange-600">A {currentEvent.departureLocation}</p>
                                </div>
                              </div>
                            </motion.div>

                            {/* Destino */}
                            <motion.div
                              className="mb-6 md:mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-blue-800 mb-1">Destino</h4>
                                    <p className="text-sm text-blue-700">{currentEvent.destination}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>

                            {/* Beneficios incluidos */}
                            <motion.div
                              className="mb-6 md:mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <h4 className="font-bold text-[var(--color-black-soft)] mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full"></span>
                                Todo incluido
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {currentEvent.included.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-green-50 p-2 rounded-lg border border-green-200">
                                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm text-green-800">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>

                            {/* Información adicional */}
                            <motion.div
                              className="mb-6 md:mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-200 text-center">
                                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                  </div>
                                  <p className="text-xs font-medium text-purple-700 mb-1">Dificultad</p>
                                  <p className="text-sm font-bold text-purple-800">{currentEvent.difficulty}</p>
                                </div>
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl border border-amber-200 text-center">
                                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                  </div>
                                  <p className="text-xs font-medium text-amber-700 mb-1">Edad</p>
                                  <p className="text-sm font-bold text-amber-800">{currentEvent.minAge}-{currentEvent.maxAge} años</p>
                                </div>
                                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-3 rounded-xl border border-teal-200 text-center">
                                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                  </div>
                                  <p className="text-xs font-medium text-teal-700 mb-1">Grupo</p>
                                  <p className="text-sm font-bold text-teal-800">{currentEvent.spots} personas</p>
                                </div>
                              </div>
                            </motion.div>

                            {/* Qué llevar */}
                            <motion.div
                              className="mb-6 md:mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <h4 className="font-bold text-[var(--color-black-soft)] mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[var(--color-lavender)] rounded-full"></span>
                                Qué llevar
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {currentEvent.whatToBring.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-200">
                                    <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    <span className="text-sm text-blue-800">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Sección de reserva mejorada */}
                    <motion.div
                      className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      {currentEvent.isComingSoon ? (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2z" />
                            </svg>
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-[var(--color-black-soft)] mb-2">
                            ¡Mantente Atento!
                          </h4>
                          <p className="text-sm md:text-base text-[var(--color-black-soft)]/70 mb-4">
                            Pronto anunciaremos nuevos eventos emocionantes
                          </p>
                          <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-purple-600)]">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span>Sigue nuestras redes sociales</span>
                            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-center sm:text-left">
                            <p className="text-xs md:text-sm text-[var(--color-black-soft)]/60 mb-1">
                              Lugares disponibles
                            </p>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                              <p className="text-2xl md:text-3xl font-bold text-[var(--color-pink-vibrant)]">
                                {currentEvent.spots}
                              </p>
                              <motion.div
                                className="w-2 h-2 bg-green-500 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </div>
                            <p className="text-xs text-[var(--color-black-soft)]/50">
                              {currentEvent.groupSize}
                            </p>
                          </div>
                          <motion.button
                            onClick={() => {
                              const element = document.getElementById("contacto");
                              if (element) {
                                const isMobile = window.innerWidth < 1024;
                                const headerHeight = isMobile ? 80 : 100;
                                const additionalOffset = 32;
                                const headerOffset = headerHeight + additionalOffset;

                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition =
                                  elementPosition + window.pageYOffset - headerOffset;

                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[var(--color-pink-vibrant)]/30 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Reservar lugar
                          </motion.button>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación mejorados y responsivos */}
          <div className="absolute -bottom-16 md:bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-4 md:gap-6">
            {/* Flechas - visibles en desktop, ocultas en móvil */}
            <motion.button
              onClick={() => paginate(-1)}
              className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm items-center justify-center text-[var(--color-pink-vibrant)] hover:bg-[var(--color-pink-vibrant)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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

            {/* Indicadores de puntos - siempre visibles */}
            <div className="flex items-center gap-2 md:gap-3">
              {events.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > currentEventIndex ? 1 : -1);
                    setCurrentEventIndex(index);
                    
                    // Reanudar auto-rotación después de 10 segundos de inactividad
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentEventIndex
                      ? "w-8 h-2 md:w-10 md:h-3 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)]"
                      : "w-2 h-2 md:w-3 md:h-3 bg-[var(--color-pink-vibrant)]/30 hover:bg-[var(--color-pink-vibrant)]/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            {/* Indicador de auto-rotación solo en móvil */}
            <div className="md:hidden flex items-center gap-2 ml-2">
              <div className="w-2 h-2 bg-[var(--color-pink-vibrant)]/40 rounded-full animate-pulse"></div>
              <span className="text-xs text-[var(--color-pink-vibrant)]/60 font-medium">Auto</span>
            </div>

            {/* Flechas - visibles en desktop, ocultas en móvil */}
            <motion.button
              onClick={() => paginate(1)}
              className="hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-sm items-center justify-center text-[var(--color-pink-vibrant)] hover:bg-[var(--color-pink-vibrant)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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

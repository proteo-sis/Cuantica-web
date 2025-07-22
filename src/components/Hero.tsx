"use client";

import Header from "./Header";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-0">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-test.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(0.85) blur(0.5px)" }}
        />

        {/* Gradiente sutil para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent z-0" />

        {/* Menú minimalista */}
        <nav className="absolute top-0 right-0 z-20 flex gap-8 p-8 text-white text-lg font-light">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <a href="#about" className="hover:underline">
            Sobre
          </a>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </nav>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center px-4 pt-32">
          <div
            className="mb-6 text-base tracking-widest text-white/80 font-light animate-fade-in"
            style={{ letterSpacing: "0.18em" }}
          >
            CENTRO DE BIENESTAR HOLÍSTICO
          </div>
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col w-fit mx-auto">
              <h1
                className="animate-fade-in text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-0 drop-shadow-lg tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1 }}
              >
                CUÁNTICA
              </h1>
              <span
                className="block text-3xl sm:text-5xl font-cormorant italic text-white"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  textAlign: "right",
                  marginTop: "-0.2em",
                }}
              >
                Studio
              </span>
            </div>
          </div>
          <div
            className="animate-fade-in max-w-2xl mx-auto mb-12"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg sm:text-2xl text-white/90 leading-relaxed font-light">
              Un centro de bienestar holístico dedicado a promover el equilibrio
              físico, mental y emocional a través de prácticas integrativas.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="inline-block">
              <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none">
                Reserva tu clase <FaArrowRight className="ml-1" />
              </button>
            </a>
          </div>
        </div>

        {/* Flecha animada centrada abajo */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => {
              const el = document.getElementById("discipline-carousel");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Ir a disciplinas"
            className="bg-white/80 rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 focus:outline-none"
            style={{
              backdropFilter: "blur(2.2px)",
              WebkitBackdropFilter: "blur(2.2px)",
            }}
          >
            <svg
              className="w-7 h-7 text-black opacity-80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

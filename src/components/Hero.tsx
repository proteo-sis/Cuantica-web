"use client";

import Header from "./Header";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-lavender-light)] pt-0">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-test.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(0.7) blur(1px)" }}
        />
        {/* Overlay lavanda oscuro */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, var(--color-lavender) 40%, transparent 100%)",
            opacity: 0.45,
          }}
        />
        {/* Menú minimalista */}
        <nav className="absolute top-0 right-0 z-20 flex gap-8 p-8 text-[var(--color-black-soft)] text-lg font-light">
          <a href="#" className="hover:text-[var(--color-lavender-dark)]">
            Inicio
          </a>
          <a href="#about" className="hover:text-[var(--color-lavender-dark)]">
            Sobre
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-lavender-dark)]"
          >
            Contacto
          </a>
        </nav>
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center px-4 pt-32">
          <div className="relative flex flex-col items-center w-full">
            <div className="flex flex-col w-fit mx-auto">
              <h1
                className=" font-spartan animate-fade-in text-5xl sm:text-7xl lg:text-8xl font-bold mb-0 drop-shadow-lg tracking-tight"
                style={{
                  fontFamily: "'Times', sans-serif",
                  lineHeight: 1,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(44, 0, 80, 0.18)",
                }}
              >
                CUÁNTICA
              </h1>
              <span
                className="block text-3xl sm:text-5xl font-cormorant italic"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  textAlign: "right",
                  marginTop: "-0.2em",
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(44, 0, 80, 0.18)",
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
            <p
              className="text-lg sm:text-2xl leading-relaxed font-light mt-5"
              style={{
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 8px rgba(44, 0, 80, 0.12)",
              }}
            >
              Un centro de bienestar holístico dedicado a promover el equilibrio
              físico, mental y emocional a través de prácticas integrativas.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="inline-block">
              <button
                className="flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold shadow-xl focus:outline-none"
                style={{
                  background: "var(--color-lavender)",
                  color: "#fff",
                  border: "none",
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "var(--color-lavender-dark)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--color-lavender)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
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
            className="bg-white/80 rounded-full p-3 shadow-lg hover:bg-[var(--color-lavender)] transition-all duration-300 focus:outline-none"
            style={{
              backdropFilter: "blur(2.2px)",
              WebkitBackdropFilter: "blur(2.2px)",
            }}
          >
            <svg
              className="w-7 h-7 text-[var(--color-lavender-dark)] opacity-80"
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

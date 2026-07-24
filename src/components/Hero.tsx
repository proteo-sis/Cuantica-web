"use client";

import { useEffect, useRef } from "react";
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa";

interface HeroProps {
  city?: string;
  tagline?: string;
}

export default function Hero({ city, tagline }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.dataset.src && !video.src) {
            video.src = video.dataset.src;
            video.load();
          }
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const supportingText =
    tagline ||
    (city
      ? `Santuario de paz y conexión en ${city} y alrededores. Un espacio para salir de la rutina y descubrir lo que tu cuerpo y mente pueden experimentar.`
      : "Santuario de paz y conexión, donde darás un salto cuántico. Un espacio donde podrás salir de la rutina y conocerás las diferentes disciplinas que tu cuerpo y mente es capaz de experimentar.");

  return (
    <>
      <Header />
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-white-pure)] pt-0"
      >
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-[#2a1038] via-[#1a0a22] to-[#3a1528]"
          aria-hidden
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          data-src="/video-hero.mp4"
          poster="/hero-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{ filter: "brightness(0.7) blur(1px)" }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, var(--color-lavender) 40%, transparent 100%)",
            opacity: 0.15,
          }}
        />
        <nav className="absolute top-0 right-0 z-20 flex gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 text-white/90 text-sm sm:text-base lg:text-lg font-light">
          <a
            href="#inicio"
            className="hover:text-white transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#profesores"
            className="hover:text-white transition-colors duration-200"
          >
            Sobre
          </a>
          <a
            href="#contacto"
            className="hover:text-white transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 sm:pb-24 lg:pb-32">
          <div className="relative flex flex-col items-center w-full max-w-6xl mx-auto">
            <div className="flex flex-col w-fit mx-auto mb-6 sm:mb-8 lg:mb-12">
              <h1
                className="font-spartan animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-0 drop-shadow-lg tracking-tight leading-tight"
                style={{
                  fontFamily: "'Times', sans-serif",
                  lineHeight: 0.9,
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(44, 0, 80, 0.18)",
                }}
              >
                CUÁNTICA
              </h1>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cormorant italic leading-tight"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  textAlign: "right",
                  marginTop: "-0.1em",
                  color: "#fff",
                  textShadow: "0 2px 12px rgba(44, 0, 80, 0.18)",
                }}
              >
                Studio
              </span>
              {city ? (
                <p className="mt-4 text-white/90 text-sm sm:text-base tracking-wide uppercase">
                  Yoga y bienestar en {city}
                </p>
              ) : null}
            </div>
          </div>
          <div
            className="animate-fade-in max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4"
            style={{ animationDelay: "0.2s" }}
          >
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light"
              style={{
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 8px rgba(44, 0, 80, 0.12)",
              }}
            >
              {supportingText}
            </p>
          </div>
          <div
            className="animate-fade-in px-4"
            style={{ animationDelay: "0.3s" }}
          >
            <button
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
              className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl focus:outline-none transition-all duration-300"
              style={{
                background: "var(--color-pink-vibrant)",
                color: "#fff",
                border: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--color-pink-pastel)";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--color-pink-vibrant)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Reserva tu clase <FaArrowRight className="ml-1" />
            </button>
          </div>
        </div>
        <div
          className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <button
            onClick={() => {
              const element = document.getElementById("disciplinas");
              if (element) {
                const isMobile = window.innerWidth < 1024;
                const headerHeight = isMobile ? 80 : 100;
                const additionalOffset = 32;
                const headerOffset = headerHeight + additionalOffset;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            aria-label="Ir a disciplinas"
            className="bg-white/80 rounded-full p-2 sm:p-3 shadow-lg hover:bg-[var(--color-lavender)] transition-all duration-300 focus:outline-none"
            style={{
              backdropFilter: "blur(2.2px)",
              WebkitBackdropFilter: "blur(2.2px)",
            }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[var(--color-pink-vibrant)] opacity-80"
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

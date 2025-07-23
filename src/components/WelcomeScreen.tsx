"use client";
import { useState, useEffect } from "react";

const title = "Cuántica Studio";

interface WelcomeScreenProps {
  onHide?: () => void;
  forceHide?: boolean;
}

export default function WelcomeScreen({
  onHide,
  forceHide,
}: WelcomeScreenProps) {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const handleScroll = () => setHide(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (forceHide) setHide(true);
  }, [forceHide]);

  useEffect(() => {
    if (hide && onHide) onHide();
  }, [hide, onHide]);

  const handleClick = () => setHide(true);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900 to-pink-900 transition-transform duration-700 ease-in-out ${
        hide ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      onClick={handleClick}
      style={{ fontFamily: "Montserrat, sans-serif", cursor: "pointer" }}
    >
      {/* Animación letra por letra */}
      <h1 className="flex flex-wrap justify-center mb-8 select-none">
        {title.split("").map((char, i) => (
          <span
            key={i}
            className={`text-5xl sm:text-7xl font-extrabold drop-shadow-lg tracking-widest text-white transition-all duration-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              letterSpacing: "0.1em",
              transitionDelay: `${i * 60}ms`,
              textShadow: "0 0 16px #e879f9, 0 0 32px #a21caf",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      {/* Frase con animación bounce */}
      <p
        className={`text-2xl sm:text-3xl text-pink-200 font-semibold text-center mb-4 transition-all duration-700 ${
          show ? "opacity-100 animate-bounce-slow" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${title.length * 60 + 200}ms` }}
      >
        Hoy vas a dar un salto cuántico
      </p>
      {/* Indicador interactivo animado */}
      <div className="flex flex-col items-center mt-10 animate-pulse">
        <span className="text-white/70 text-lg font-medium mb-2 flex items-center gap-2">
          <svg
            className="w-6 h-6 animate-tap"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19V6M12 6l-4 4m4-4l4 4"
            />
          </svg>
          Haz click o desliza para continuar
        </span>
        <svg
          className="w-8 h-8 text-pink-400 animate-bounce mt-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l-5-5m5 5l5-5"
          />
        </svg>
      </div>
      {/* Animaciones personalizadas */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        @keyframes tap {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-tap {
          animation: tap 1.2s infinite;
        }
      `}</style>
    </div>
  );
}

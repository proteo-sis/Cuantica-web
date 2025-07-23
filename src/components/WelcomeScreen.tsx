"use client";
import { useState, useEffect } from "react";

// Función para verificar si ya se mostró la pantalla de bienvenida
const hasBeenShown = () => {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("welcome_shown") === "1";
};

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
  // Inicializar alreadyShown con el valor correcto desde el principio
  const [alreadyShown, setAlreadyShown] = useState(hasBeenShown);

  useEffect(() => {
    // Si ya se mostró, no necesitamos hacer nada más
    if (hasBeenShown()) {
      setAlreadyShown(true);
      setHide(true);
      return;
    }

    // Si no se ha mostrado, iniciamos la animación
    setShow(true);
    const handleScroll = () => {
      setHide(true);
      localStorage.setItem("welcome_shown", "1");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (forceHide) setHide(true);
  }, [forceHide]);

  useEffect(() => {
    if (hide && onHide) onHide();
  }, [hide, onHide]);

  const handleClick = () => {
    setHide(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("welcome_shown", "1");
    }
  };

  // Si ya se mostró, no renderizamos nada
  if (alreadyShown) return null;

  // Agregamos una clase para ocultar inicialmente y luego mostrar suavemente
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-white-pure)] transition-transform duration-700 ease-in-out opacity-0
        ${show ? "opacity-100" : ""}
        ${
          hide
            ? "animate-hide-welcome pointer-events-none"
            : "animate-show-welcome"
        }
      `}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Contenedor principal con logo y texto */}
      <div className="flex flex-col items-center">
        {/* Logo y título alineados */}
        <div className="flex flex-row items-center gap-0 mb-8">
          {/* Logo placeholder */}
          <div
            className="w-64 h-64 flex items-center justify-center animate-fade-in -ml-32"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <img
              src="/isologo_cuantica.svg"
              alt="Cuántica Studio"
              className="w-56 h-56 object-contain"
            />
          </div>
          {/* Títulos */}
          <div className="flex flex-col justify-center items-start -ml-8">
            <span
              className="text-5xl sm:text-8xl font-spartan tracking-wide text-[var(--color-black-soft)] drop-shadow-[0_2px_2px_rgba(30,30,30,0.10)] animate-slide-up"
              style={{
                fontFamily: "'Times', sans-serif",
                textShadow: "0 2px 6px #ededed",
                animationDelay: "0.3s",
                animationFillMode: "both",
              }}
            >
              CUÁNTICA
            </span>
            <span
              className="text-3xl sm:text-5xl font-spartan text-[var(--color-black-soft)] -mt-2 ml-86 drop-shadow-[0_2px_2px_rgba(30,30,30,0.10)] animate-slide-up"
              style={{
                fontFamily: "'Cormorant', serif",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                textShadow: "0 2px 6px #ededed",
                animationDelay: "0.5s",
                animationFillMode: "both",
              }}
            >
              Studio
            </span>
          </div>
        </div>

        {/* Frase animada letra por letra separada y centrada */}
        <div className="flex justify-center">
          {"Hoy vas a dar un salto cuántico".split("").map((char, i) => (
            <span
              key={i}
              className="text-2xl md:text-5xl text-center font-alex-brush animate-bounce-letter"
              style={{
                color: "#1d1d1b",
                textShadow: "0 2px 6px #ededed",
                animationDelay: `${i * 0.06}s`,
                animationDuration: "3.2s",
                animationIterationCount: "infinite",
                display: "inline-block",
                fontFamily: "'Alex Brush', cursive",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Indicador de interacción UX/UI */}
        <div className="mt-16 flex flex-col items-center animate-pulse">
          <span className="text-lg text-[var(--color-black-soft)]/70 font-medium mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            Haz click o desliza para continuar
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full animate-ping"></div>
            <div
              className="w-2 h-2 bg-[var(--color-lavender)] rounded-full animate-ping"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full animate-ping"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Animaciones personalizadas */}
      <style jsx>{`
        @keyframes bounce-letter {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          10% {
            transform: translateY(-18px) scale(1.08);
            opacity: 1;
          }
          18% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-bounce-letter {
          animation-name: bounce-letter;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 2px 6px #ededed, 0 0 0px #ee217f;
          }
          50% {
            text-shadow: 0 2px 16px #ededed, 0 0 12px #ee217f;
          }
        }
        .animate-glow {
          animation: glow 2.2s ease-in-out infinite;
        }
        @keyframes show-welcome {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-show-welcome {
          animation: show-welcome 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes hide-welcome {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-60px);
          }
        }
        .animate-hide-welcome {
          animation: hide-welcome 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>
  );
}

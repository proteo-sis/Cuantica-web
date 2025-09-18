"use client";
import { useState, useEffect } from "react";

const profesores = [
  {
    nombre: "María López",
    especialidad: "Yoga & Meditación",
    descripcion:
      "Especialista en yoga integral y mindfulness con más de 10 años de experiencia ayudando a personas a encontrar su equilibrio.",
    imagen: "/professors/profesor1.jpg",
  },
  {
    nombre: "Carlos Pérez",
    especialidad: "Terapia Física & Ocupacional",
    descripcion:
      "Terapeuta especializado en adultos mayores, apasionado por mejorar la calidad de vida y mantener la independencia.",
    imagen: "/professors/profesor2.jpg",
  },
  {
    nombre: "Ana Torres",
    especialidad: "Heels Dance",
    descripcion:
      "Bailarina profesional y coreógrafa, experta en empoderar a través del movimiento y la danza moderna.",
    imagen: "/professors/profesor3.jpg",
  },
  {
    nombre: "Luis Gómez",
    especialidad: "Danzas Polinesias",
    descripcion:
      "Instructor de danzas polinesias, transmitiendo cultura y alegría a través del ritmo y la expresión corporal.",
    imagen: "/professors/profesor4.jpg",
  },
  {
    nombre: "Sofía Ramírez",
    especialidad: "Meditación & Mindfulness",
    descripcion:
      "Guía de meditación con enfoque en reducción de estrés y bienestar emocional.",
    imagen: "/professors/profesor1.jpg",
  },
  {
    nombre: "Pedro Sánchez",
    especialidad: "Flexibilidad",
    descripcion:
      "Especialista en movilidad y flexibilidad, ayudando a mejorar el rango de movimiento de sus alumnos.",
    imagen: "/professors/profesor2.jpg",
  },
];

type Profesor = (typeof profesores)[number];

function getIndices(current: number, length: number): number[] {
  return [
    (current - 1 + length) % length,
    current % length,
    (current + 1) % length,
  ];
}

function getNextIndex(current: number, length: number): number {
  return (current + 1) % length;
}
function getPrevIndex(current: number, length: number): number {
  return (current - 1 + length) % length;
}

export default function Profesores() {
  const [current, setCurrent] = useState<number>(0);
  const length = profesores.length;
  const indices = getIndices(current, length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 3) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section
      id="profesores"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-950 to-pink-950 pt-28 pb-16 px-4"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Conoce a nuestros profesores
        </h2>
        <div className="relative flex items-center justify-center">
          <button
            aria-label="Anterior"
            onClick={() => setCurrent(getPrevIndex(current, length))}
            className="absolute left-0 z-10 bg-black/60 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition top-1/2 -translate-y-1/2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center justify-center w-full gap-8">
            {indices.map((idx, i) => (
              <ProfesorCard
                key={idx}
                {...profesores[idx]}
                principal={i === 1}
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            aria-label="Siguiente"
            onClick={() => setCurrent(getNextIndex(current, length))}
            className="absolute right-0 z-10 bg-black/60 hover:bg-pink-700 text-white rounded-full p-3 shadow-lg transition top-1/2 -translate-y-1/2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

type ProfesorCardProps = Profesor & { principal: boolean };

function ProfesorCard({
  nombre,
  especialidad,
  descripcion,
  imagen,
  principal,
}: ProfesorCardProps) {
  return (
    <div
      className={`bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg w-64 mx-auto hover:scale-105 transition ${
        principal ? "ring-4 ring-pink-400 scale-105 z-10" : "opacity-80"
      }`}
    >
      <div className="w-40 h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img src={imagen} alt={nombre} className="object-cover w-full h-full" />
      </div>
      <span className="text-xl font-bold text-white mb-1">{nombre}</span>
      <span className="text-base text-purple-100 mb-2">{especialidad}</span>
      <p className="text-sm text-white/80 leading-relaxed">{descripcion}</p>
    </div>
  );
}

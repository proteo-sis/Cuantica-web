"use client";
import React, { useState } from "react";
// @ts-ignore
import disciplines from "./disciplines.json";

interface Discipline {
  name: string;
  image: string;
  description: string;
}

export default function DisciplineCarousel() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const data: Discipline[] = disciplines as Discipline[];

  return (
    <section className="w-full min-h-[9 0vh] bg-black overflow-hidden relative flex flex-col items-center justify-center px-0 py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${data[expandedIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay lavanda con blur para mantener la paleta */}
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            background:
              "linear-gradient(120deg, var(--color-lavender) 60%, var(--color-lavender-light) 100%)",
            opacity: 0.55,
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
          NUESTRAS DISCIPLINAS
        </h2>
        <div className="flex w-full max-w-7x h-[60vh] gap-2 items-center justify-center">
          {data.map((discipline, index) => (
            <div
              key={index}
              onClick={() => setExpandedIndex(index)}
              className={`
                h-full rounded-2xl bg-white/10 cursor-pointer
                transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center justify-end relative group
                ${
                  expandedIndex === index
                    ? "w-[60%]"
                    : "w-[10%] hover:bg-white/20"
                }
                min-w-[40px] block
                border-2 border-white/10
              `}
              tabIndex={0}
            >
              <img
                src={discipline.image}
                alt={discipline.name}
                className="w-full h-full object-cover object-center absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="relative z-20 w-full flex flex-col items-center justify-end h-full p-6">
                <span className="text-2xl font-bold text-white mb-1 drop-shadow-lg text-center">
                  {discipline.name}
                </span>
                {expandedIndex === index && (
                  <div className="animate-fade-in mt-2 w-full">
                    <p className="text-base text-white/80 leading-relaxed mb-2 bg-black/60 rounded p-2 backdrop-blur text-center">
                      {discipline.description}
                    </p>
                    <span className="inline-block text-pink-300 font-semibold bg-black/40 rounded px-2 py-1">
                      Join the class now!
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

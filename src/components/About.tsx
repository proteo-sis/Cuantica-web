"use client";
import { TbTransform } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { GiYinYang } from "react-icons/gi";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[var(--color-black-soft)]">¿Qué es </span>
            <span
              style={{
                color: "var(--color-pink-vibrant)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Cuántica Studio
            </span>
            <span className="text-[var(--color-black-soft)]">?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-lavender-dark)] to-[var(--color-pink-vibrant)] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              {/* Glassmorphism y borde elegante */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-lavender-light)]/60 to-[var(--color-pink-pastel)]/40 rounded-2xl transform rotate-2 blur-[2px]" />
              <div
                className="relative rounded-2xl p-8 shadow-2xl border"
                style={{
                  background: "rgba(255,255,255,0.95)", // más translúcido
                  borderColor: "var(--color-pink-vibrant)",
                  boxShadow:
                    "1px 12px 48px 0 rgba(238,33,127,0.28), 0 0 0 6px rgba(255,192,208,0.22), 0 1.5px 24px 0 rgba(255,255,255,0.45) inset",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                }}
              >
                <div className="space-y-6 text-[var(--color-black-soft)] leading-relaxed">
                  <p className="text-lg">
                    Nuestro estudio ofrece una combinación cuidadosamente seleccionada de disciplinas que incluyen yoga, meditación guiada, sanación con sonido terapéutico y artes de movimiento expresivo como la danza.
                  </p>
                  <p className="text-lg">
                    Proporcionamos un ambiente de apoyo e inclusivo diseñado para fomentar la transformación personal, el equilibrio interior y la vida consciente.
                  </p>
                  <p className="text-lg">
                    A través de un enfoque multidisciplinario arraigado en la sabiduría antigua y las metodologías contemporáneas de bienestar, Cuántica Studio empodera a los individuos para reconectarse consigo mismos y cultivar un estado sostenible de armonía y vitalidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <TbTransform size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Transformación Integral
                </h3>
              </div>
              <p className="text-gray-700">
                Nos enfocamos en cuerpo, mente y energía para una evolución profunda y sostenible.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                  <MdPeopleAlt size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Comunidad Consciente
                </h3>
              </div>
              <p className="text-gray-700">
                Creamos un espacio seguro, cercano e inclusivo donde puedas crecer acompañado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <GiYinYang size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Prácticas Modernas y Ancestrales
                </h3>
              </div>
              <p className="text-gray-700">
                Fusionamos técnicas tradicionales con enfoques contemporáneos para un bienestar integral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

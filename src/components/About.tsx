"use client";
import { TbTransform } from "react-icons/tb";
import { MdPeopleAlt } from "react-icons/md";
import { GiYinYang } from "react-icons/gi";
import { FaHeart, FaLightbulb, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[var(--color-black-soft)]">¿Qué es </span>
            <span
              className="relative"
              style={{
                color: "var(--color-pink-vibrant)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Cuántica Studio
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-pink-vibrant)] to-transparent"></div>
            </span>
            <span className="text-[var(--color-black-soft)]">?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un <span className="font-semibold text-purple-600">espacio transformador</span> donde la sabiduría ancestral se encuentra con las metodologías modernas de bienestar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Tarjeta principal compacta */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-indigo-400/20 rounded-2xl transform rotate-2 blur-lg group-hover:rotate-3 transition-all duration-500"></div>
            
            <div
              className="relative rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 group-hover:scale-[1.01]"
              style={{
                background: "rgba(255,255,255,0.95)",
                borderColor: "var(--color-pink-vibrant)",
                boxShadow:
                  "0 20px 40px -12px rgba(238,33,127,0.2), 0 0 0 1px rgba(255,192,208,0.3), 0 0 0 3px rgba(255,255,255,0.8) inset",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <div className="space-y-6 text-[var(--color-black-soft)] leading-relaxed">                
                <div className="space-y-4">
                  <p className="text-base leading-relaxed">
                    Nuestro estudio ofrece una <span className="font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-lg">combinación única</span> de disciplinas que incluyen yoga, meditación guiada, sanación con sonido terapéutico y artes de movimiento expresivo.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    Proporcionamos un ambiente de apoyo diseñado para fomentar la <span className="font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-lg">transformación personal</span>, el equilibrio interior y la vida consciente.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    A través de un <span className="font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-lg">enfoque holístico</span> que fusiona sabiduría ancestral con metodologías modernas, Cuántica Studio empodera a los individuos para reconectarse consigo mismos y cultivar <span className="font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-lg">armonía y vitalidad</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjetas de características compactas */}
          <div className="space-y-6">
            {/* Tarjeta 1: Transformación */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-purple-300">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TbTransform size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                      <FaStar size={10} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      Transformación Integral
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Nos enfocamos en <span className="font-semibold text-pink-600">cuerpo</span>, <span className="font-semibold text-pink-600">mente</span> y <span className="font-semibold text-pink-600">energía</span> para una evolución profunda y sostenible.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-600">
                      <FaLightbulb size={12} />
                      <span className="font-medium">Enfoque holístico</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Comunidad */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-pink-300">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MdPeopleAlt size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                      <FaHeart size={10} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-700 transition-colors">
                      Comunidad Consciente
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Creamos un <span className="font-semibold text-pink-600">espacio seguro</span> e <span className="font-semibold text-pink-600">inclusivo</span> donde puedas crecer acompañado.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-pink-600">
                      <FaHeart size={12} />
                      <span className="font-medium">Crecimiento colectivo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Prácticas */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl transform group-hover:scale-105 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-indigo-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-indigo-300">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GiYinYang size={24} className="text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                      <FaLightbulb size={10} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                      Prácticas Modernas y Ancestrales
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Fusionamos <span className="font-semibold text-pink-600">técnicas tradicionales</span> con <span className="font-semibold text-pink-600">metodologías modernas</span> para un bienestar integral.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-indigo-600">
                      <FaStar size={12} />
                      <span className="font-medium">Fusión de sabidurías</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de estadísticas compacta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">5+</span>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">Disciplinas</h4>
            <p className="text-sm text-gray-600">Especialidades únicas</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">100%</span>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">Inclusivo</h4>
            <p className="text-sm text-gray-600">Para todos los niveles</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl font-bold text-white">∞</span>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-1">Crecimiento</h4>
            <p className="text-sm text-gray-600">Sin límites</p>
          </div>
        </div>
      </div>
    </section>
  );
}

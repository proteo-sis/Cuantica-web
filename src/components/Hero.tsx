"use client";

import Header from "./Header";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-28">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-test.mp4" // Cambia el nombre si tu video tiene otro nombre
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Capa de superposición para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-pink-900/30 z-0" />

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              <span className="block">Cuántica</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Studio
              </span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow">
              Un centro de bienestar holístico dedicado a promover el equilibrio
              físico, mental y emocional a través de prácticas integrativas.
            </p>
          </div>

          {/* Disciplinas */}
          <div
            id="disciplinas"
            className="animate-fade-in mt-6 w-full max-w-2xl scroll-mt-24"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Disciplinas
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-white/90">
              <li className="bg-purple-600/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Yoga
              </li>
              <li className="bg-pink-600/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Meditación
              </li>
              <li className="bg-yellow-500/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Flexibilidad
              </li>
              <li className="bg-pink-400/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Heels Dance
              </li>
              <li className="bg-indigo-500/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Danzas Polinesias
              </li>
              <li className="bg-purple-400/70 rounded-xl py-2 px-4 shadow hover:scale-105 transition">
                Box
              </li>
            </ul>
          </div>

          {/* Botones principales */}
          <div
            id="reserva"
            className="animate-fade-in mt-8 scroll-mt-24"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg btn-hover focus:outline-none focus:ring-2 focus:ring-pink-400">
                Reserva tu clase
              </button>
              <button className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 btn-hover focus:outline-none focus:ring-2 focus:ring-purple-400">
                Conoce más
              </button>
            </div>
          </div>

          {/* Flecha animada */}
          <div
            className="animate-fade-in mt-16 flex justify-center"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-purple-300"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

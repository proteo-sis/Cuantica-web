"use client";

const services = [
  {
    title: "Yoga",
    description:
      "Prácticas de yoga que integran cuerpo, mente y espíritu para promover el equilibrio y la vitalidad.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Meditación Guiada",
    description:
      "Sesiones de meditación que te ayudan a encontrar paz interior y claridad mental.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "Sanación con Sonido",
    description:
      "Terapia de sonido que utiliza vibraciones para restaurar el equilibrio energético del cuerpo.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "Artes de Movimiento",
    description:
      "Danza y movimiento expresivo para liberar emociones y conectar con tu cuerpo de manera creativa.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    gradient: "from-rose-600 to-pink-600",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[var(--color-lavender-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[var(--color-black-soft)]">Nuestras </span>
            <span
              style={{
                color: "var(--color-pink-vibrant)",
                textShadow: "0 2px 8px rgba(238,33,127,0.18)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              Prácticas
            </span>
          </h2>
          <p className="text-xl text-[var(--color-black-soft)]/80 max-w-3xl mx-auto">
            Descubre las diferentes disciplinas que ofrecemos para tu
            transformación personal y bienestar integral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div
                className="rounded-2xl p-8 shadow-2xl border h-full bg-white/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-200 border-[var(--color-lavender)]"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(179,157,219,0.18), 0 0 0 4px rgba(238,33,127,0.10)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-lavender) 60%, var(--color-pink-vibrant) 100%)",
                    color: "#fff",
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-black-soft)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--color-black-soft)]/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg btn-hover"
            style={{
              background: "var(--color-pink-vibrant)",
              color: "#fff",
              border: "none",
              transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--color-pink-pastel)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "var(--color-pink-vibrant)";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Ver horarios de clases
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { 
  FaWalking,
  FaWind,
  FaShieldAlt, 
  FaUserFriends 
} from "react-icons/fa";

const services = [
  {
    title: "Movilidad Consciente",
    description:
      "Ejercicios diseñados para restaurar el movimiento natural del cuerpo.",
    icon: <FaWalking className="w-8 h-8" />,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Respiración Guiada",
    description:
      "Técnicas respiratorias para reducir el estrés y conectar con el presente.",
    icon: <FaWind className="w-8 h-8" />,
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "Espacio Seguro",
    description:
      "Un lugar libre de juicio para practicar y crecer.",
    icon: <FaShieldAlt className="w-8 h-8" />,
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Acompañamiento Personalizado",
    description:
      "Apoyo profesional para adaptarse a cada nivel.",
    icon: <FaUserFriends className="w-8 h-8" />,
    gradient: "from-pink-600 to-rose-600",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[var(--color-sand-dark)]">
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
                className="rounded-2xl p-8 shadow-2xl border h-full bg-white/80 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-white border-[var(--color-lavender-light)]"
                style={{
                  boxShadow:
                    "0 8px 32px 0 rgba(179,157,219,0.18), 0 0 0 4px rgba(238,33,127,0.10)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-pink-vibrant) 60%, var(--color-pink-vibrant) 100%)",
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
      </div>
    </section>
  );
}

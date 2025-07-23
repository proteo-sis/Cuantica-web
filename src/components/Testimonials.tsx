"use client";

const testimonials = [
  {
    name: "María González",
    role: "Practicante de Yoga",
    content:
      "Cuántica Studio ha transformado mi vida. Las clases de yoga y meditación me han ayudado a encontrar paz interior y equilibrio en mi día a día.",
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Terapeuta de Sonido",
    content:
      "Como instructor, he visto cómo este espacio crea una comunidad increíble. Los estudiantes encuentran aquí un lugar seguro para su crecimiento personal.",
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Estudiante de Danza",
    content:
      "Las clases de movimiento expresivo me han permitido conectar con mi cuerpo de una manera que nunca había experimentado antes. Es un espacio mágico.",
    avatar: "AM",
  },
  {
    name: "Luis Fernández",
    role: "Practicante de Meditación",
    content:
      "La sanación con sonido en Cuántica Studio es una experiencia única. Me siento renovado y en armonía después de cada sesión.",
    avatar: "LF",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[var(--color-black-soft)]">
              Lo que dicen nuestros{" "}
            </span>
            <span
              style={{
                color: "var(--color-pink-vibrant)",
                textShadow: "0 2px 8px rgba(238,33,127,0.18)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              estudiantes
            </span>
          </h2>
          <p className="text-xl text-[var(--color-black-soft)]/80 max-w-3xl mx-auto">
            Descubre las experiencias transformadoras de quienes han encontrado
            su camino hacia el bienestar en Cuántica Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="group">
              <div
                className="rounded-2xl p-8 h-full relative overflow-hidden border bg-white/60 backdrop-blur-md"
                style={{
                  borderColor: "var(--color-lavender)",
                  boxShadow:
                    "0 8px 32px 0 rgba(179,157,219,0.18), 0 0 0 4px rgba(238,33,127,0.10)",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-pink-vibrant)]"></div>

                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[var(--color-black-soft)]/90 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-pink-vibrant)] rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-black-soft)]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[var(--color-black-soft)]/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div
            className="rounded-2xl p-8 text-white border mx-auto max-w-8xl backdrop-blur-md"
            style={{
              background:
                "linear-gradient(0deg, var(--color-pink-pastel) 1%, var(--color-pink-vibrant) 100%)",
              borderColor: "var(--color-lavender)",
              boxShadow:
                "0 8px 32px 0 rgba(179,157,219,0.18), 0 0 0 4px rgba(238,33,127,0.10)",
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">
              ¿Listo para tu transformación?
            </h3>
            <p className="text-lg mb-6 opacity-90 text-white drop-shadow">
              Únete a nuestra comunidad y comienza tu viaje hacia el bienestar
              integral.
            </p>
            <p className="text-lg mb-6 opacity-90 font-bold text-white drop-shadow">
              Tu primera clase es totalmente gratis.
            </p>
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
              Reserva tu primera clase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

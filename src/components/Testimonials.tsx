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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              estudiantes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias transformadoras de quienes han encontrado
            su camino hacia el bienestar en Cuántica Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 h-full relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl"></div>

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

                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para tu transformación?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a nuestra comunidad y comienza tu viaje hacia el bienestar
              integral.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-hover">
              Reserva tu primera clase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

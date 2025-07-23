"use client";

export default function Contact() {
  return (
    <section className="py-20 bg-[var(--color-lavender-light)] text-[var(--color-black-soft)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[var(--color-black-soft)]">Conecta con </span>
            <span
              style={{
                color: "var(--color-pink-vibrant)",
                textShadow: "0 2px 8px rgba(238,33,127,0.18)",
                WebkitTextStroke: ".5px #ee217f",
              }}
            >
              nosotros
            </span>
          </h2>
          <p className="text-xl text-[var(--color-black-soft)]/80 max-w-3xl mx-auto">
            Estamos aquí para acompañarte en tu viaje hacia el bienestar.
            Contáctanos para más información o para reservar tu primera clase.
          </p>
        </div>

        {/* Grid principal: dos columnas para los bloques, luego el mapa abajo */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Columna 1: Envíanos un mensaje */}
          <div className="flex flex-col h-full">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl h-full flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-6">
                Envíanos un mensaje
              </h3>
              <form className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Disciplinas de interés
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Yoga",
                      "Meditación Guiada",
                      "Sanación con Sonido",
                      "Danza/Artes de Movimiento",
                    ].map((disciplina) => (
                      <label key={disciplina} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="disciplinas"
                          value={disciplina}
                          className="peer hidden"
                        />
                        <span className="px-4 py-2 rounded-full border border-[var(--color-lavender)] bg-white/80 text-[var(--color-black-soft)] text-sm font-medium transition-all duration-200 peer-checked:bg-[var(--color-pink-vibrant)] peer-checked:text-white peer-checked:border-[var(--color-pink-vibrant)] shadow-sm hover:bg-[var(--color-pink-pastel)] hover:text-[var(--color-black-soft)] select-none">
                          {disciplina}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    ¿Sobre qué es tu duda?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                    placeholder="Ejemplo: Horarios, precios, reservas, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Comentario
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400 resize-none"
                    placeholder="Cuéntanos más sobre lo que buscas..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg text-lg font-semibold shadow-lg btn-hover"
                  style={{
                    background: "var(--color-pink-vibrant)",
                    color: "#fff",
                    border: "none",
                    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background =
                      "var(--color-pink-pastel)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background =
                      "var(--color-pink-vibrant)";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Columna 2: Información de contacto y Horarios */}
          <div className="flex flex-col h-full gap-8">
            <div className="flex flex-col h-full gap-8 flex-1">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-6 flex-1">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-pink-vibrant)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Dirección</h4>
                      <a
                        href="https://www.google.com/maps/place/Cuántica+Studio/data=!4m2!3m1!1s0x0:0xe8b367ba7bef8c99?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-90 hover:text-pink-400 transition underline"
                      >
                        Calle Horacio Zúñiga, P.º Colón 155-interior 7,
                        <br />
                        Residencial Colón y Col Ciprés,
                        <br />
                        50120 Toluca de Lerdo, Méx.{" "}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>
                      <p className="opacity-90">722 670 9287</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="opacity-90">ventas1@cuantica-studio.mx</p>
                      <p className="opacity-90">administracion@cuantica-studio.mx</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-6">Horarios</h3>
                <div className="space-y-3 flex-1">
                  <div className="flex justify-between">
                    <span className="opacity-90">Lunes - Viernes</span>
                    <span className="font-semibold">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Sábados</span>
                    <span className="font-semibold">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-90">Domingos</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa: ocupa todo el ancho debajo de los bloques */}
        <div className="mt-12">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">
              Ubicación en el mapa
            </h3>
            <a
              href="https://www.google.com/maps/place/Cuántica+Studio/data=!4m2!3m1!1s0x0:0xe8b367ba7bef8c99?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg hover:ring-4 hover:ring-pink-400 transition"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0284467837373!2d-99.6625421!3d19.2811291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89b50a2384bd%3A0xe8b367ba7bef8c99!2sCu%C3%A1ntica%20Studio!5e0!3m2!1sen!2smx!4v1752680477291!5m2!1sen!2smx"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cuántica Studio"
              ></iframe>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

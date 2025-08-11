"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<null | { type: "ok" | "error"; message: string }>(null);

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
          <div className="flex flex-col h-full lg:flex-[1.2]">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl h-full flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-6">
                Envíanos un mensaje
              </h3>
              <form
                className="space-y-8 flex-1 flex flex-col justify-between"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setResult(null);
                  setIsSubmitting(true);

                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);
                  const payload = {
                    nombre: String(formData.get("nombre") || ""),
                    email: String(formData.get("email") || ""),
                    telefono: String(formData.get("telefono") || ""),
                    asunto: String(formData.get("asunto") || ""),
                    comentario: String(formData.get("comentario") || ""),
                    disciplinas: formData.getAll("disciplinas").map(String),
                  };

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    if (res.ok) {
                      setResult({ type: "ok", message: "¡Mensaje enviado! Te responderemos pronto." });
                      form.reset();
                    } else {
                      const text = await res.text();
                      console.error("/api/contact error status:", res.status, text);
                      let message = "Ocurrió un error al enviar.";
                      try {
                        const data = JSON.parse(text);
                        if (data?.message) message = data.message;
                      } catch {
                        // texto no JSON
                        message = text || message;
                      }
                      setResult({ type: "error", message });
                    }
                  } catch (err) {
                    console.error("fetch /api/contact failed:", err);
                    const message = err instanceof Error ? err.message : "No se pudo enviar. Verifica tu conexión.";
                    setResult({ type: "error", message });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        minLength={2}
                        maxLength={50}
                        pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+"
                        title="Por favor ingresa un nombre válido (solo letras y espacios)"
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
                        name="email"
                        required
                        maxLength={100}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Por favor ingresa un email válido"
                        className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono{" "}
                        <span className="text-gray-400 text-xs">
                          (opcional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        pattern="[0-9\s-+()]{10,15}"
                        title="Por favor ingresa un número de teléfono válido (10-15 dígitos)"
                        maxLength={15}
                        className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        ¿Sobre qué es tu duda?
                      </label>
                      <input
                        type="text"
                        name="asunto"
                        required
                        maxLength={100}
                        className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400"
                        placeholder="Ejemplo: Horarios, precios, reservas, etc."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Disciplinas de interés
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Meditación",
                        "Yoga y cuencos",
                        "Heels Dance",
                        "Danzas Polinesias",
                        "Box",
                        "Flexibilidad",
                      ].map((disciplina) => (
                        <label key={disciplina} className="cursor-pointer">
                          <input
                            type="checkbox"
                            name="disciplinas"
                            value={disciplina}
                            className="peer hidden"
                          />
                          <span className="block w-full text-left px-4 py-2 rounded-full border border-[var(--color-lavender)] bg-white/80 text-[var(--color-black-soft)] text-sm font-medium transition-all duration-200 peer-checked:bg-[var(--color-pink-vibrant)] peer-checked:text-white peer-checked:border-[var(--color-pink-vibrant)] shadow-sm hover:bg-[var(--color-pink-pastel)] hover:text-[var(--color-black-soft)] select-none">
                            {disciplina}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Comentario
                    </label>
                    <textarea
                      name="comentario"
                      required
                      maxLength={500}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/80 border border-[var(--color-lavender)] rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-[var(--color-black-soft)] placeholder-gray-400 resize-none"
                      placeholder="Cuéntanos más sobre lo que buscas..."
                    ></textarea>
                    <span className="text-xs text-gray-500 mt-1 block">
                      Máximo 500 caracteres
                    </span>
                  </div>
                </div>
                {result && (
                  <div
                    className={`text-sm rounded-lg px-4 py-3 ${
                      result.type === "ok"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {result.message}
                  </div>
                )}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg text-lg font-semibold shadow-lg btn-hover transition-opacity ${
                      isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    style={{
                      background: "var(--color-pink-vibrant)",
                      color: "#fff",
                      border: "none",
                      transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                    }}
                    onMouseOver={(e) => {
                      if (isSubmitting) return;
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
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Columna 2: Información de contacto y Horarios */}
          <div className="flex flex-col h-full gap-8 lg:flex-1">
            <div className="flex flex-col h-full gap-8 flex-1">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-8">
                  Información de contacto
                </h3>
                <div className="space-y-6 flex-1">
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
                      <p className="opacity-90">+52 722 670 9287</p>
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
                      <a
                        href="mailto:ventas1@cuantica-studio.mx"
                        className="opacity-90 underline hover:text-pink-400 transition"
                      >
                        ventas1@cuantica-studio.mx
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-[var(--color-lavender)] shadow-2xl flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-8">Horarios</h3>
                <div className="space-y-6 flex-1">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-[var(--color-black-soft)]">
                        Lunes - Viernes
                      </h4>
                      <p className="opacity-90 text-[var(--color-black-soft)]">
                        6:00 AM - 10:00 PM
                      </p>
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-[var(--color-black-soft)]">
                        Sábados
                      </h4>
                      <p className="opacity-90 text-[var(--color-black-soft)]">
                        7:00 AM - 8:00 PM
                      </p>
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 text-[var(--color-black-soft)]">
                        Domingos
                      </h4>
                      <p className="opacity-90 text-[var(--color-black-soft)]">
                        8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="mt-6 pt-6 border-t border-[var(--color-lavender)]/30">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 text-[var(--color-black-soft)]">
                          Información Importante
                        </h4>
                        <p className="opacity-90 text-[var(--color-black-soft)] text-sm">
                          Horarios sujetos a cambios. Te recomendamos reservar
                          tu clase con anticipación.
                        </p>
                      </div>
                    </div>
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

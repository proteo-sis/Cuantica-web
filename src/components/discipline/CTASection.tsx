"use client";

import ScrollReveal from "../animations/ScrollReveal";

interface CTASectionProps {
  disciplineName: string;
}

export default function CTASection({ disciplineName }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-pink-vibrant)] to-[var(--color-lavender)]">
      <ScrollReveal animation="scale">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-white-pure)]">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl mb-8 text-[var(--color-white-pure)]/90">
            Únete a nuestra comunidad y descubre todo tu potencial con{" "}
            {disciplineName}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-[var(--color-white-pure)] text-[var(--color-pink-vibrant)] rounded-full text-lg font-semibold hover:bg-[var(--color-white-pure)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Reserva tu clase
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[var(--color-white-pure)] text-[var(--color-white-pure)] rounded-full text-lg font-semibold hover:bg-[var(--color-white-pure)] hover:text-[var(--color-pink-vibrant)] transition-all duration-300 transform hover:scale-105">
              Contáctanos
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

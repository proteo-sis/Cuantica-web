"use client";

interface CityLocalIntroProps {
  city: string;
  headline: string;
  description: string;
}

export default function CityLocalIntro({
  city,
  headline,
  description,
}: CityLocalIntroProps) {
  return (
    <section
      className="w-full bg-gradient-to-br from-[var(--color-lavender-light)] via-[var(--color-white-pure)] to-[var(--color-beige-rose)] py-12 md:py-16"
      aria-label={`Bienvenida Cuántica Studio en ${city}`}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-pink-vibrant)] mb-3 font-semibold">
          Cuántica Studio · {city}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-black-soft)] mb-4">
          {headline}
        </h2>
        <p className="text-base md:text-lg text-[var(--color-black-soft)]/75 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <p className="mt-6 text-sm text-[var(--color-black-soft)]/60">
          Calle Horacio Zúñiga, P.º Colón 155-int. 7 · Toluca ·{" "}
          <a
            href="tel:+527226709287"
            className="text-[var(--color-pink-vibrant)] hover:underline"
          >
            722 670 9287
          </a>
        </p>
      </div>
    </section>
  );
}

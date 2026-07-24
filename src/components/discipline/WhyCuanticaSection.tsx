"use client";

import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";

interface WhyCuanticaSectionProps {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
}

export default function WhyCuanticaSection({
  title,
  description,
  image,
}: WhyCuanticaSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal animation="slideRight">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slideUp">
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-black-soft)]">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-black-soft)]/80">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

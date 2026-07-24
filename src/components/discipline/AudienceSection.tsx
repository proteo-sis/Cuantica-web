"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { FaCheckCircle } from "react-icons/fa";

interface AudienceSectionProps {
  title: string;
  description: string;
  items: string[];
}

export default function AudienceSection({
  title,
  description,
  items,
}: AudienceSectionProps) {
  return (
    <section className="py-20 px-4 bg-[var(--color-beige-rose)]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="slideUp">
          <h2 className="text-4xl font-bold text-center mb-6 text-[var(--color-black-soft)]">
            {title}
          </h2>
          <p className="text-center text-[var(--color-black-soft)]/80 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <ScrollReveal key={item} animation="slideRight" delay={index * 0.1}>
              <div className="flex items-start gap-3 bg-[var(--color-white-pure)] rounded-xl p-5 shadow-md border border-[var(--color-lavender)]">
                <FaCheckCircle className="text-[var(--color-pink-vibrant)] text-xl mt-1 shrink-0" />
                <p className="text-[var(--color-black-soft)]/90">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

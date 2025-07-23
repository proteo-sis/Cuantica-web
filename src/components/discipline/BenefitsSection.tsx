"use client";

import ScrollReveal from "../animations/ScrollReveal";
import {
  FaHeartbeat,
  FaYinYang,
  FaStar,
  FaBrain,
  FaUsers,
  FaBalanceScale,
} from "react-icons/fa";
import { ReactNode } from "react";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface BenefitsSectionProps {
  title: string;
  items: Benefit[];
}

interface IconMap {
  [key: string]: ReactNode;
}

// Mapeo de iconos según el título del beneficio
const getIconComponent = (title: string) => {
  const iconMap: IconMap = {
    "Bienestar Físico": <FaHeartbeat className="w-8 h-8" />,
    "Salud Mental": <FaBrain className="w-8 h-8" />,
    "Desarrollo Personal": <FaStar className="w-8 h-8" />,
    Meditación: <FaYinYang className="w-8 h-8" />,
    Comunidad: <FaUsers className="w-8 h-8" />,
    Equilibrio: <FaBalanceScale className="w-8 h-8" />,
  };

  // Buscar coincidencia parcial en el título
  const key = Object.keys(iconMap).find((k) =>
    title.toLowerCase().includes(k.toLowerCase())
  );

  return key ? iconMap[key] : <FaStar className="w-8 h-8" />;
};

export default function BenefitsSection({
  title,
  items,
}: BenefitsSectionProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <ScrollReveal animation="slideUp">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-black-soft)]">
          {title}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((benefit, index) => (
          <ScrollReveal
            key={benefit.title}
            animation="scale"
            delay={index * 0.2}
          >
            <div className="group bg-gradient-to-br from-[var(--color-white-pure)] to-[var(--color-lavender-light)] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-lavender)]">
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-lavender)] to-[var(--color-pink-vibrant)] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {getIconComponent(benefit.title)}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-black-soft)] text-center">
                {benefit.title}
              </h3>
              <p className="text-[var(--color-black-soft)]/80 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

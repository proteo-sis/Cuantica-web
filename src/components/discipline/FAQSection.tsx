"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { FaQuestionCircle } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-pink-vibrant)]/10 to-[var(--color-beige-rose)]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="slideUp">
          <div className="flex items-center gap-4 justify-center mb-16">
            <FaQuestionCircle className="text-3xl text-[var(--color-pink-vibrant)]" />
            <h2 className="text-4xl font-bold text-[var(--color-black-soft)]">
              Preguntas Frecuentes
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal
              key={index}
              animation="slideRight"
              delay={index * 0.1}
            >
              <div className="bg-gradient-to-br from-[var(--color-white-pure)] to-[var(--color-lavender-light)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-lavender)] hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-black-soft)]">
                  {faq.question}
                </h3>
                <p className="text-[var(--color-black-soft)]/80">
                  {faq.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

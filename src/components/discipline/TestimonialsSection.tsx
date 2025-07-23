"use client";

import ScrollReveal from "../animations/ScrollReveal";

interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-beige-rose)] via-[var(--color-white-pure)] to-[var(--color-lavender)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="slideUp">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-black-soft)]">
            Lo que dicen nuestros estudiantes
          </h2>
        </ScrollReveal>

        <div className={`grid gap-8 ${
          testimonials.length === 1 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : testimonials.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' 
              : testimonials.length === 3
                ? 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.id}
              animation="scale"
              delay={index * 0.2}
            >
              <div className="bg-gradient-to-br from-[var(--color-lavender)] to-[var(--color-white-pure)] rounded-xl p-6 shadow-lg border border-[var(--color-lavender)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/professors/profesor1.jpg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[var(--color-pink-vibrant)] group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-pink-vibrant)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-black-soft)]">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-[var(--color-pink-vibrant)]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--color-black-soft)]/80 italic">
                  {testimonial.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 
"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { FaUserGraduate } from "react-icons/fa";

interface Instructor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  description: string;
  image: string;
  certifications?: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
  };
}

interface InstructorsSectionProps {
  instructors: Instructor[];
}

export default function InstructorsSection({ instructors }: InstructorsSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-pink-vibrant)]/5 to-[var(--color-beige-rose)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="slideUp">
          <div className="flex items-center gap-4 justify-center mb-16">
            <FaUserGraduate className="text-3xl text-[var(--color-pink-vibrant)]" />
            <h2 className="text-4xl font-bold text-[var(--color-black-soft)]">
              Nuestros Instructores
            </h2>
          </div>
        </ScrollReveal>

        <div className={`grid gap-8 ${
          instructors.length === 1 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : instructors.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {instructors.map((instructor, index) => (
            <ScrollReveal
              key={instructor.id}
              animation="scale"
              delay={index * 0.2}
            >
              <div className="bg-gradient-to-br from-[var(--color-white-pure)] to-[var(--color-lavender-light)] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--color-lavender)] group hover:-translate-y-1">
                <div className="h-64 overflow-hidden">
                  <img
                    src={instructor.image || "/professors/profesor1.jpg"}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-transparent via-[var(--color-white-pure)]/80 to-[var(--color-white-pure)]">
                  <h3 className="text-xl font-semibold mb-2 text-[var(--color-black-soft)]">
                    {instructor.name}
                  </h3>
                  <p className="text-[var(--color-pink-vibrant)] mb-2 font-medium">
                    {instructor.title}
                  </p>
                  <div className="mb-4">
                    {instructor.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-[var(--color-lavender)]/20 rounded-full px-3 py-1 text-sm font-semibold text-[var(--color-black-soft)] mr-2 mb-2 border border-[var(--color-lavender)] hover:bg-[var(--color-pink-vibrant)]/10 transition-colors"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-[var(--color-black-soft)]/80 mb-4">
                    {instructor.description}
                  </p>
                  {instructor.certifications && (
                    <div className="text-sm text-[var(--color-black-soft)]/70">
                      <strong>Certificaciones:</strong>{" "}
                      {instructor.certifications.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 
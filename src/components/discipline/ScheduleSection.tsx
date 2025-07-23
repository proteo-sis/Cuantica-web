"use client";

import ScrollReveal from "../animations/ScrollReveal";
import { FaCalendarAlt } from "react-icons/fa";

interface ScheduleDay {
  name: string;
  times: string[];
}

interface ScheduleSectionProps {
  title: string;
  description: string;
  days: ScheduleDay[];
}

export default function ScheduleSection({
  title,
  description,
  days,
}: ScheduleSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-beige-rose)] via-[var(--color-white-pure)] to-[var(--color-lavender)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="slideUp">
          <div className="flex items-center gap-4 justify-center mb-16">
            <FaCalendarAlt className="text-3xl text-[var(--color-pink-vibrant)]" />
            <h2 className="text-4xl font-bold text-[var(--color-black-soft)]">
              {title}
            </h2>
          </div>
          <p className="text-center text-[var(--color-black-soft)]/80 mb-12">
            {description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {days.map((day, index) => (
            <ScrollReveal
              key={day.name}
              animation="slideRight"
              delay={index * 0.1}
            >
              <div className="bg-gradient-to-br from-[var(--color-lavender)] to-[var(--color-white-pure)] backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[var(--color-lavender)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-black-soft)]">
                  {day.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {day.times.map((time) => (
                    <span
                      key={time}
                      className="px-4 py-2 bg-[var(--color-white-pure)]/80 rounded-full text-[var(--color-black-soft)] font-medium shadow-sm border border-[var(--color-pink-vibrant)] hover:bg-[var(--color-pink-vibrant)]/10 transition-all duration-300"
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

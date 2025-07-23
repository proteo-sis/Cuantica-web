import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/discipline/HeroSection";
import BenefitsSection from "@/components/discipline/BenefitsSection";
import GallerySection from "@/components/discipline/GallerySection";
import InstructorsSection from "@/components/discipline/InstructorsSection";
import ScheduleSection from "@/components/discipline/ScheduleSection";
import FAQSection from "@/components/discipline/FAQSection";
import TestimonialsSection from "@/components/discipline/TestimonialsSection";
import CTASection from "@/components/discipline/CTASection";

interface Discipline {
  id: string;
  name: string;
  slug: string;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    mainImage: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  gallery: {
    title: string;
    images: Array<{
      url: string;
      alt: string;
      caption: string;
    }>;
  };
  schedule: {
    title: string;
    description: string;
    days: Array<{
      name: string;
      times: string[];
    }>;
  };
  instructors: Array<{
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
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    image: string;
    text: string;
    rating: number;
  }>;
}

async function getDisciplineData(slug: string): Promise<Discipline | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/data/disciplines",
      `${slug}.json`
    );
    const fileContents = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContents) as Discipline;
  } catch (error) {
    return null;
  }
}

export default async function DisciplinePage({
  params,
}: {
  params: { slug: string };
}) {
  const discipline = await getDisciplineData(params.slug);

  if (!discipline) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[var(--color-lavender)] via-[var(--color-white-pure)] to-[var(--color-lavender-light)]">
        <HeroSection {...discipline.heroSection} />

        {/* Beneficios */}
        <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-pink-vibrant)]/10 to-[var(--color-white-pure)]">
          <BenefitsSection {...discipline.benefits} />
        </section>

        {/* Galería */}
        <section className="bg-gradient-to-br from-[var(--color-pink-vibrant)] via-[var(--color-beige-rose)] to-[var(--color-lavender)]">
          <GallerySection {...discipline.gallery} />
        </section>

        {/* Instructores */}
        <InstructorsSection instructors={discipline.instructors} />

        {/* Testimonios */}
        <TestimonialsSection testimonials={discipline.testimonials} />
        {/* FAQs */}
        <FAQSection faqs={discipline.faqs} />

        {/* CTA */}
        <CTASection disciplineName={discipline.name} />
      </main>
      <Footer />
    </>
  );
}

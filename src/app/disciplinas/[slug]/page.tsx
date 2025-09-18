import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/discipline/BenefitsSection";
import GallerySection from "@/components/discipline/GallerySection";
import InstructorsSection from "@/components/discipline/InstructorsSection";
import ScheduleSection from "@/components/discipline/ScheduleSection";
import FAQSection from "@/components/discipline/FAQSection";
import TestimonialsSection from "@/components/discipline/TestimonialsSection";
import CTASection from "@/components/discipline/CTASection";

// Marcar la página como renderizada en el servidor
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidar cada hora

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
  } catch {
    return null;
  }
}

export default async function DisciplinePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const discipline = await getDisciplineData(slug);

  if (!discipline) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[var(--color-lavender)] via-[var(--color-white-pure)] to-[var(--color-lavender-light)]">
        {/* Hero Section con contenido estático */}
        <section className="relative h-[90vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${discipline.heroSection.mainImage})`,
              filter: "brightness(0.7)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {discipline.heroSection.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
                {discipline.heroSection.subtitle}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
                {discipline.heroSection.description}
              </p>
              <a
                href={discipline.heroSection.ctaLink}
                className="inline-block px-8 py-4 bg-[var(--color-pink-vibrant)] text-white rounded-full text-lg font-semibold hover:bg-[var(--color-pink-vibrant)]/90 transition-all duration-300 transform hover:scale-105"
              >
                {discipline.heroSection.ctaText}
              </a>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 px-4 bg-gradient-to-br from-[var(--color-lavender)] via-[var(--color-pink-vibrant)]/10 to-[var(--color-white-pure)]">
          <BenefitsSection {...discipline.benefits} />
        </section>

        {/* Galería */}
        <section className="bg-gradient-to-br from-[var(--color-white-pure)] via-[var(--color-beige-rose)] to-[var(--color-lavender)]">
          <GallerySection {...discipline.gallery} />
        </section>

        {/* Instructores */}
        <InstructorsSection instructors={discipline.instructors} />

        {/* Horarios */}
        <ScheduleSection {...discipline.schedule} />

        {/* FAQs */}
        <FAQSection faqs={discipline.faqs} />

        {/* Testimonios */}
        <TestimonialsSection testimonials={discipline.testimonials} />

        {/* CTA */}
        <CTASection disciplineName={discipline.name} />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const discipline = await getDisciplineData(slug);

  if (!discipline) {
    return {
      title: "Disciplina no encontrada | Cuántica Studio",
      description: "La disciplina que buscas no está disponible en nuestro centro de bienestar.",
    };
  }

  // Palabras clave específicas según la disciplina
  const getKeywords = (disciplineName: string) => {
    const baseKeywords = [
      "bienestar",
      "salud",
      "fitness",
      "Toluca",
      "Metepec",
      "Zinacantepec",
      "Lerma",
      "Estado de México",
      "centro de bienestar",
      "clases",
      "instructores certificados"
    ];

    switch (disciplineName.toLowerCase()) {
      case "terapia física y ocupacional":
        return [
          ...baseKeywords,
          "terapia física",
          "terapia ocupacional",
          "adultos mayores",
          "rehabilitación geriátrica",
          "fisioterapia",
          "prevención de caídas",
          "independencia funcional",
          "tercera edad",
          "rehabilitación",
          "terapeutas especializados",
          "actividades de la vida diaria",
          "equilibrio",
          "fortalecimiento muscular"
        ];
      case "yoga":
        return [
          ...baseKeywords,
          "yoga",
          "meditación",
          "mindfulness",
          "relajación",
          "flexibilidad",
          "equilibrio mental",
          "bienestar integral",
          "clases de yoga",
          "instructor de yoga"
        ];
      case "heels dance":
        return [
          ...baseKeywords,
          "heels dance",
          "baile con tacones",
          "danza moderna",
          "empoderamiento",
          "coreografía",
          "bailarina",
          "clases de baile",
          "danza femenina"
        ];
      case "danzas polinesias":
        return [
          ...baseKeywords,
          "danzas polinesias",
          "danza polinesia",
          "cultura polinesia",
          "ritmo",
          "expresión corporal",
          "baile tradicional",
          "clases de danza"
        ];
      case "meditación y atención plena":
        return [
          ...baseKeywords,
          "meditación",
          "atención plena",
          "mindfulness",
          "reducción de estrés",
          "bienestar emocional",
          "relajación",
          "técnicas de meditación"
        ];
      case "flexibilidad":
        return [
          ...baseKeywords,
          "flexibilidad",
          "movilidad",
          "estiramiento",
          "rango de movimiento",
          "elasticidad",
          "clases de flexibilidad"
        ];
      default:
        return baseKeywords;
    }
  };

  const keywords = getKeywords(discipline.name);
  const title = `${discipline.name} en Toluca, Metepec y Zinacantepec | Cuántica Studio`;
  const description = `${discipline.heroSection.description} Servicios especializados de ${discipline.name.toLowerCase()} en Toluca, Metepec, Zinacantepec y Lerma. Instructores certificados y horarios flexibles.`;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Cuántica Studio" }],
    creator: "Cuántica Studio",
    publisher: "Cuántica Studio",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://cuantica-studio.mx"),
    alternates: {
      canonical: `/disciplinas/${discipline.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/disciplinas/${discipline.slug}`,
      siteName: "Cuántica Studio",
      images: [
        {
          url: discipline.heroSection.mainImage,
          width: 1200,
          height: 630,
          alt: `${discipline.name} en Cuántica Studio`,
        },
      ],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [discipline.heroSection.mainImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Reemplazar con el código real
    },
  };
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "src/data/disciplines");
  const files = await fs.readdir(dirPath);
  return files
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => ({ slug: fileName.replace(/\.json$/, "") }));
}

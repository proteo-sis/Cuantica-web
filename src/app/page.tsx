"use client";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DisciplineCarousel from "../components/DisciplineCarousel";
import AnimatedSection from "../components/ClientOnly";
import WelcomeScreen from "../components/WelcomeScreen";
import EventsCarousel from "../components/EventsCarousel";
import DisciplineCarouselMinimal from "@/components/DisciplineCarouselMinimal";
import { disciplinasApi } from "@/services/api";

export default function Home() {
  const [welcomeHidden, setWelcomeHidden] = useState(false);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await disciplinasApi.getAll({
          populate: "image",
          sort: ["createdAt:desc"],
        });
        console.log("Disciplinas obtenidas:", response);
      } catch (error) {
        console.error("Error al obtener disciplinas:", error);
      }
    };

    fetchDisciplinas();
  }, []);

  return (
    <>
      <WelcomeScreen
        onHide={() => setWelcomeHidden(true)}
        forceHide={welcomeHidden}
      />
      {welcomeHidden && (
        <main className="min-h-screen bg-[var(--color-white-pure)]">
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <Hero />
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="disciplinas">
              {/* Carrusel solo para desktop */}
              <div className="hidden lg:block">
                <DisciplineCarousel />
              </div>
              {/* Carrusel solo para móvil */}
              <div className="block lg:hidden">
                <DisciplineCarouselMinimal />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="eventos">
              <EventsCarousel />
            </div>
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="profesores">
              <About />
            </div>
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="reserva">
              <Services />
            </div>
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="contacto">
              <Contact />
            </div>
          </AnimatedSection>
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <Footer />
          </AnimatedSection>
        </main>
      )}
    </>
  );
}

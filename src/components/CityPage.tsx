"use client";

import { useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import DisciplineCarousel from "./DisciplineCarousel";
import AnimatedSection from "./AnimatedSection";
import WelcomeScreen from "./WelcomeScreen";
import EventsCarousel from "./EventsCarousel";
import DisciplineCarouselMinimal from "./DisciplineCarouselMinimal";
import CityLocalIntro from "./CityLocalIntro";

interface CityPageProps {
  city: string;
  headline: string;
  description: string;
  heroTagline?: string;
}

export default function CityPage({
  city,
  headline,
  description,
  heroTagline,
}: CityPageProps) {
  const [welcomeHidden, setWelcomeHidden] = useState(false);

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
            <Hero city={city} tagline={heroTagline} />
          </AnimatedSection>
          <CityLocalIntro
            city={city}
            headline={headline}
            description={description}
          />
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut" },
            }}
          >
            <div id="disciplinas">
              <div className="hidden lg:block">
                <DisciplineCarousel />
              </div>
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

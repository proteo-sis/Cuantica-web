"use client";
import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DisciplineCarousel from "../components/DisciplineCarousel";
import AnimatedSection from "../components/ClientOnly";
import WelcomeScreen from "../components/WelcomeScreen";

export default function Home() {
  const [welcomeHidden, setWelcomeHidden] = useState(false);

  return (
    <>
      <WelcomeScreen
        onHide={() => setWelcomeHidden(true)}
        forceHide={welcomeHidden}
      />
      {welcomeHidden && (
        <main className="min-h-screen">
          <AnimatedSection
            initial={{ opacity: 0 }}
            animateProps={{
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <Hero />
          </AnimatedSection>
          <AnimatedSection>
            <DisciplineCarousel />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Services />
          </AnimatedSection>
          <AnimatedSection>
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </main>
      )}
    </>
  );
}

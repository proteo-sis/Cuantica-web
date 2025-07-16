import Hero from "../components/Hero";
import Profesores from "../components/Profesores";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Profesores />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

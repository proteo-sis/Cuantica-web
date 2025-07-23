"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const headerHeight = isMobile ? 80 : 100;
      const additionalOffset = 32;
      const headerOffset = headerHeight + additionalOffset;

      setIsMenuOpen(false);

      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  const menuItems = [
    ["disciplinas", "Disciplinas"],
    ["profesores", "Nosotros"],
    ["reserva", "Reserva"],
    ["contacto", "Contacto"],
    ["blog", "Blog"],
    ["eventos", "Eventos"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 
      bg-[var(--color-white-pure)]/80 backdrop-blur-md border-b border-[var(--color-beige-rose)]
      ${scrolled ? "shadow-lg" : ""}`}
    >
      <nav className="relative w-full flex items-center justify-between px-4 md:px-8 py-4 lg:py-6 max-w-7xl mx-auto">
        {/* Logo Centrado en móvil, a la izquierda en desktop */}
        <div
          className={`
          transition-all duration-300 z-20
          ${
            isMenuOpen
              ? "relative left-0 transform-none"
              : "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          }
          lg:relative lg:left-0 lg:top-auto lg:translate-x-0 lg:translate-y-0 
        `}
        >
          <Link href="/" className="block">
            <img
              src="/imagotipo_cuantica.svg"
              alt="Isologo Cuántica"
              className="h-12 md:h-16 lg:h-24 w-auto transition-transform duration-300 hover:scale-105
                max-w-[180px] md:max-w-[240px] lg:max-w-[320px]"
            />
          </Link>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden lg:flex items-center justify-end flex-1 ml-[240px]">
          <ul className="flex items-center space-x-10">
            {menuItems.map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-[var(--color-black-soft)] hover:text-[var(--color-pink-vibrant)]
                    transition-all duration-300 font-league text-lg relative
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-0 after:h-0.5 after:bg-[var(--color-pink-vibrant)]
                    after:transition-all after:duration-300 hover:after:w-full
                    whitespace-nowrap"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de menú hamburguesa (solo móvil) */}
        <div className="lg:hidden ml-auto z-50 relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col justify-center items-center w-12 h-12 rounded-full
              bg-[var(--color-white-pure)]/80 backdrop-blur-md
              transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // Icono de cerrar (X)
              <div className="relative w-5 h-5">
                <span
                  className="absolute top-1/2 left-0 w-5 h-0.5 bg-[var(--color-black-soft)] 
                  transform -translate-y-1/2 rotate-45 transition-transform duration-300"
                />
                <span
                  className="absolute top-1/2 left-0 w-5 h-0.5 bg-[var(--color-black-soft)] 
                  transform -translate-y-1/2 -rotate-45 transition-transform duration-300"
                />
              </div>
            ) : (
              // Icono de menú hamburguesa
              <>
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300" />
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300 mt-1.5" />
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300 mt-1.5" />
              </>
            )}
          </button>

          {/* Menú desplegable móvil */}
          <div
            className={`absolute top-full right-0 mt-4 w-64 bg-[var(--color-white-pure)]/80 backdrop-blur-md rounded-2xl shadow-xl
            transform transition-all duration-300 origin-top
            ${
              isMenuOpen
                ? "opacity-100 visible translate-y-0 scale-100"
                : "opacity-0 invisible -translate-y-4 scale-95"
            }
          `}
          >
            {/* Flecha decorativa */}
            <div className="absolute -top-2 right-5 w-4 h-4 bg-[var(--color-white-pure)]/80 backdrop-blur-md transform rotate-45" />

            {/* Contenedor del menú */}
            <div className="relative bg-[var(--color-white-pure)]/80 backdrop-blur-md rounded-2xl py-3 z-10">
              <div className="flex flex-col space-y-1">
                {menuItems.map(([id, label]) => (
                  <div key={id} className="w-full px-2">
                    <button
                      onClick={() => scrollToSection(id)}
                      className="w-full text-left py-2.5 px-4 text-base font-league
                        text-[var(--color-black-soft)] hover:text-[var(--color-pink-vibrant)]
                        transition-all duration-300 relative rounded-xl group"
                    >
                      <span className="relative z-10">{label}</span>
                      <span
                        className="absolute inset-0 bg-[var(--color-pink-vibrant)]/5 
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                        origin-left rounded-xl"
                      ></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay para cerrar el menú (solo móvil) */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const homePaths = ["/", "/toluca", "/metepec", "/lerma", "/zinacantepec"];
  const isLandingPath = homePaths.includes(pathname);

  const smoothScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const headerHeight = isMobile ? 70 : 85;
      const additionalOffset = 20;
      const headerOffset = headerHeight + additionalOffset;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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

  useEffect(() => {
    if (isLandingPath && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      setTimeout(() => smoothScrollTo(sectionId), 400);
    }
  }, [pathname, isLandingPath]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (!isLandingPath) {
      router.push(`/#${sectionId}`);
    } else {
      setTimeout(() => smoothScrollTo(sectionId), 300);
    }
  };

  const menuItems = [
    ["inicio", "Inicio"],
    ["disciplinas", "Disciplinas"],
    ["eventos", "Eventos"],
    ["profesores", "Nosotros"],
    ["blog", "Blog"],
    ["contacto", "Contacto"],
  ];

  const linkItems: Record<string, string> = {
    inicio: "/",
    blog: "/blog",
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 
      bg-[var(--color-white-pure)]/80 backdrop-blur-md border-b border-[var(--color-beige-rose)]
      ${scrolled ? "shadow-lg" : ""}`}
    >
      <nav className="relative w-full flex items-center justify-between px-4 md:px-8 py-3 lg:py-4 max-w-7xl mx-auto">
        <div
          className={`
          transition-all duration-300 z-20
          ${
            isMenuOpen
              ? "relative left-0 transform-none"
              : "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          }
          lg:relative lg:left-auto lg:right-0 lg:top-auto lg:translate-x-0 lg:translate-y-0 
        `}
        >
          <Link href="/" className="block">
            <Image
              src="/logo-vec.svg"
              alt="Cuántica Studio - Yoga y bienestar en Toluca"
              width={280}
              height={128}
              priority
              className="h-32 sm:h-64 md:h-24 lg:h-32 xl:h-32 w-auto transition-transform duration-300 hover:scale-105
                max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-end flex-1">
          <ul className="flex items-center space-x-10">
            {menuItems.map(([id, label]) => (
              <li key={id}>
                {linkItems[id] ? (
                  <Link
                    href={linkItems[id]}
                    className="text-[var(--color-black-soft)] hover:text-[var(--color-pink-vibrant)]
                      transition-all duration-300 font-league text-lg relative
                      after:content-[''] after:absolute after:bottom-0 after:left-0 
                      after:w-0 after:h-0.5 after:bg-[var(--color-pink-vibrant)]
                      after:transition-all after:duration-300 hover:after:w-full
                      whitespace-nowrap"
                  >
                    {label}
                  </Link>
                ) : (
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
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden ml-auto z-50 relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col justify-center items-center w-12 h-12 rounded-full
              bg-[var(--color-white-pure)]/80 backdrop-blur-md
              transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
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
              <>
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300" />
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300 mt-1.5" />
                <span className="w-5 h-0.5 bg-[var(--color-black-soft)] transition-all duration-300 mt-1.5" />
              </>
            )}
          </button>

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
            <div className="absolute -top-2 right-5 w-4 h-4 bg-[var(--color-white-pure)]/80 backdrop-blur-md transform rotate-45" />

            <div className="relative bg-[var(--color-white-pure)]/80 backdrop-blur-md rounded-2xl py-3 z-10">
              <div className="flex flex-col space-y-1">
                {menuItems.map(([id, label]) => (
                  <div key={id} className="w-full px-2">
                    {linkItems[id] ? (
                      <Link
                        href={linkItems[id]}
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left py-2.5 px-4 text-base font-league
                          text-[var(--color-black-soft)] hover:text-[var(--color-pink-vibrant)]
                          transition-all duration-300 relative rounded-xl group"
                      >
                        <span className="relative z-10">{label}</span>
                        <span
                          className="absolute inset-0 bg-[var(--color-pink-vibrant)]/5 
                          scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                          origin-left rounded-xl"
                        ></span>
                      </Link>
                    ) : (
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

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

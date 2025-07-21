"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-[var(--color-white-pure)]/90 backdrop-blur-md shadow-lg border-b border-[var(--color-beige-rose)]">
      <nav className="w-full flex items-center justify-between px-8 py-8 max-w-full">
        {/* Logo y nombre */}
        <div className="flex items-center gap-4 select-none min-w-0">
          {/* Logo real */}
          <div className="max-w-60 h-12 flex items-center justify-center">
            <img src="/imagotipo_cuantica.svg" alt="Isologo Cuántica" />
          </div>
        </div>
        {/* Navegación */}
        <ul className="flex gap-6 text-[var(--color-black-soft)] font-medium text-lg ml-auto">
          <li>
            <a
              href="#disciplinas"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Disciplinas
            </a>
          </li>
          <li>
            <a
              href="#profesores"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Profesores
            </a>
          </li>
          <li>
            <a
              href="#reserva"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Reserva
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#eventos"
              className="hover:text-[var(--color-pink-vibrant)] transition font-league"
            >
              Eventos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

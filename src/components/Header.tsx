"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/80 backdrop-blur-md shadow-md border-b border-purple-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="text-3xl font-bold text-white tracking-widest">Cuántica Studio</div>
        <ul className="flex gap-8 text-white font-medium text-lg">
          <li><a href="#disciplinas" className="hover:text-pink-400 transition">Disciplinas</a></li>
          <li><a href="#profesores" className="hover:text-pink-400 transition">Profesores</a></li>
          <li><a href="#reserva" className="hover:text-pink-400 transition">Reserva</a></li>
          <li><a href="#contacto" className="hover:text-pink-400 transition">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
} 
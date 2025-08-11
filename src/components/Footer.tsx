"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[var(--color-lavender-dark)] via-[var(--color-black-soft)] to-[var(--color-lavender-dark)] text-white py-16 overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--color-pink-vibrant)]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-lavender)]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--color-pink-vibrant)]/3 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo y descripción principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src="/imagotipo_cuantica.svg"
              alt="Cuántica Studio"
              className="h-24 w-auto brightness-0 invert"
            />
          </div>

          <div className="text-center md:text-right max-w-md">
            <p className="text-[var(--color-lavender-light)] text-lg leading-relaxed">
              Un centro de bienestar holístico dedicado a promover el equilibrio
              físico, mental y emocional a través de prácticas integrativas que
              transforman vidas.
            </p>
          </div>
        </motion.div>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-6">
            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/profile.php?id=61575709835566"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#1877F2] to-[#1877F2]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </motion.a>

            

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@cuantica_studio11?_t=ZS-8yiOzyGJEJE&_r=1"
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#000000] to-[#25F4EE] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/cuantica_studio11?utm_source=ig_web_button_share_sheet&igsh=MXExazBnaXM3MTc5ZA=="
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[#E4405F] via-[#F77737] to-[#FCAF45] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center justify-center md:justify-start">
              <div className="w-8 h-1 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] rounded-full mr-3"></div>
              Disciplinas
            </h4>
            <ul className="space-y-3 text-[var(--color-lavender-light)]">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Yoga
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Box
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Heels Dance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Danzas Polinesias
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Meditación y Atención Plena
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start group"
                >
                  <span className="w-2 h-2 bg-[var(--color-pink-vibrant)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
                  Flexibilidad
                </a>
              </li>
            </ul>
          </motion.div>

{/* Enlaces rápidos */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  viewport={{ once: true }}
  className="flex flex-col items-center text-center"
>
  <h4 className="text-xl font-bold mb-6 text-white flex items-center justify-center">
    <div className="w-8 h-1 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] rounded-full mr-3"></div>
    Enlaces Rápidos
    <div className="w-8 h-1 ml-3 opacity-0"></div>
  </h4>

  <ul className="space-y-3 text-[var(--color-lavender-light)] flex flex-col items-start">
    <li>
      <a
        href="#"
        className="hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-2 h-2 bg-[var(--color-lavender)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
        Disciplinas
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-2 h-2 bg-[var(--color-lavender)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
        Eventos
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-2 h-2 bg-[var(--color-lavender)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
        Nosotros
      </a>
    </li>
    <li>
      <a
        href="#"
        className="hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-2 h-2 bg-[var(--color-lavender)] rounded-full shrink-0 mr-3 group-hover:scale-150 transition-transform"></span>
        Contacto
      </a>
    </li>
  </ul>
</motion.div>



          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center justify-center md:justify-end">
              <div className="w-8 h-1 bg-gradient-to-r from-[var(--color-pink-vibrant)] to-[var(--color-lavender)] rounded-full mr-3"></div>
              Contacto
            </h4>
            <div className="space-y-3 text-[var(--color-lavender-light)]">
              <div className="flex items-start justify-center md:justify-end">
                <svg
                  className="w-5 h-5 text-[var(--color-pink-vibrant)] mr-3 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-left md:text-right">Toluca de Lerdo, Estado de México, México</span>
              </div>
              <div className="flex items-start justify-center md:justify-end">
                <svg
                  className="w-5 h-5 text-[var(--color-pink-vibrant)] mr-3 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-left md:text-right">ventas1@cuantica-studio.mx</span>
              </div>
              <div className="flex items-start justify-center md:justify-end">
                <svg
                  className="w-5 h-5 text-[var(--color-pink-vibrant)] mr-3 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-left md:text-right">722 670 9287</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--color-pink-vibrant)] to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-[var(--color-lavender-light)] text-sm">
            &copy; 2025 Cuántica Studio. Todos los derechos reservados.
            <span className="text-[var(--color-pink-vibrant)] ml-2">
              ✨ Transformando vidas, un momento a la vez
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

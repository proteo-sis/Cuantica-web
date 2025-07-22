// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // Asegura que escanee tu código fuente
    ],
    theme: {
      extend: {
        fontFamily: {
          spartan: ['var(--font-league-spartan)', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  
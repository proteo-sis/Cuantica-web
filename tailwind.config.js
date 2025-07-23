// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['var(--font-league-spartan)', 'sans-serif'],
        alex: ['var(--font-alex-brush)', 'cursive'],
      },
    },
  },
  plugins: [],
};

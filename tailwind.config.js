/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          card: '#1e293b',
          accent: '#38bdf8',
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [`./src/**/*.{js, jsx, ts, tsx}`],
  theme: {
    extend: {
      colors: {
        primary: '#030712',
        accent: "#06b6d4",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}


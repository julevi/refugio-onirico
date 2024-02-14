/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        asteristico: ['Asteristico', 'sans-serif'],
      },
      colors: {
        roxo: "#7619c4",
        creme: "#fcf9dd",
        amarelo: "#fcc100",
        cinza: "#25253c",
      },
    },
  },
  plugins: [],
}
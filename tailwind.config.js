/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        roxo: "#7619c4",
        creme: "#fcf9dd",
        amarelo: "#fcc100",
        cinza: "#25253c",
        preto: "rgba(0,0,0,.9)",
      },
    },
  },
  plugins: [],
}
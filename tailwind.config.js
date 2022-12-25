/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed"],
        lexend: ["Lexend", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        PlayFair: ["Playfair Display", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
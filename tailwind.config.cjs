/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-red": "#E92222",
        "main-yellow": "#FFCE1F",
        "default-white": "#F5F5F5"
      },
      fontFamily: {
        "Poppins": ['Poppins', "sans-serif"],
        "MontserratA": ['Montserrat Alternates', 'sans-serif']
      },
      boxShadow: {
        "order-btn": "-3px -3px 5px rgb(0,0,0,.1),3px 3px 5px rgb(0,0,0,.1)",
        "fader": "0 3px 4px rgba(0,0,0,.25)",
        "order-card": "2px 2px 4px rgba(0,0,0,.2), -2px -2px 4px rgba(0,0,0,.2)"
      },
      screens: {
        "medium": { "min": "580px", "max": "761px" },
        "large": { "min": "762px", "max": "1023px" }
      }
    },
  },
  plugins: [],
}
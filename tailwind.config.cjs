/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins', "sans-serif"]
      },
      boxShadow:{
        "order-btn":"-3px -3px 5px rgb(0,0,0,.1),3px 3px 5px rgb(0,0,0,.1)"
      }
    },
  },
  plugins: [],
}
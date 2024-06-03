/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#161A24",
        "text": "#D9D9D9",
        "card": "#1D2330",
        "stroke": "#252C3A",
        "caption": "#565E6D",
        "dark-purple": "#633BBC",
        "light-purple": "#996DFF",
        "success": "#ABF770",
        "danger": "#F77070",
        "modal": "#161A24"
      },
      fontFamily: {
        "sora": ["Sora", "sans-serif"]
      },
      screens: {
        phone: { max: "700px" },
        tablet: { min: "700px", max: "1100px" }
      }
    },
  },
  plugins: [],
}
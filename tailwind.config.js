/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: "medium",
        bold: "bold",
        light: "light",
        thin: "thin",
        extrabold: "extrabold",
        black_Iranyekan: "black_Iranyekan",
      },
    },
    colors: {
      "main-black": "#000000",
      "main-dark-charcoal": "#0e1011",
      "main-deep-teal": "#131b1f",
      "main-navy-blue": "#213743",
      "main-steel-gray": "#253035",
      "main-slate-gray": "#737779",
      "main-silver": "#a0a3a5",
      "main-light-gray": "#d0d1d2",
      "main-gainsboro": "#d8d8d8",
      "main-light-silver": "#e7e8e9",
      "main-white-smoke": "#f0f0f0",
      "main-snow": "#f1f1f1",
      "main-border-gray": "#dddedf",
      "main-light-grayish-silver": "#f5f5f5",
      "main-lightish-gray": "#f3f4f5",
      "main-light-grayish-white": "#f7f7f7",
      "main-white": "#ffffff",
      "main-light-orange": "#ffa41b",
      "main-orange": "#e08905",
      "main-dark-red": "#fb3449",
      "main-blue": "#2c7df9",
      "main-favorite-red": "#f66047",
      "main-banner-app": "#fef5e6",
      "main-button-gray": "#f3f4f5",
      "main-transparent": "transparent",
    },
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};

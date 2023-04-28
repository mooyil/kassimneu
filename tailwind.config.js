/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        navbar: "#0A2A5E",
        background1: "#f8f8f8",
        background2: "#efefef",
        background3: "#C2C8C6",
        header: "#0d0d0d",
        paragraph: "#2a2a2a",
        paragraphHell: "#efefef",
        buttonText: "#0d0d0d",
        accent: "#0A2A5E",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

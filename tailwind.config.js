/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#102A43",
        secondary: "#E1B085",
        tertiary: "#170000",
        "black-100": "#D9895C",
        "black-200": "#C57144",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #005FA6",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/laptop.jpg')",
      },
    },
  },
  plugins: [],
};

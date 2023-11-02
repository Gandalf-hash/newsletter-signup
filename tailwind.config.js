/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      pc: "1450px",
      "2xl": "1536px",
    },
    extend: {},
    fontFamily: {
      " body": ["Roboto-Regular", "sans-serif"],
    },
    colors: {
      "primary-color": "#202A44",
      "secondary-color": "#808080",
      "text-color": "#ffffff",
      "border-bg": "#f2b294",
    },
  },
  plugins: [],
};

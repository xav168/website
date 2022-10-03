/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Garet", ...defaultTheme.fontFamily.sans],
      header: ["Vilane", "Recoleta"],
    },
  },
  plugins: [],
};

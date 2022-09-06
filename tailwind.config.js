/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b3b3b",
        secondary: "#6b6b6b",
        "off-text": "#767676",
        "border-color": "#979797",
        "like-bg": "#606060",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Baskervville", "serif"],
    },
  },
  plugins: [],
};

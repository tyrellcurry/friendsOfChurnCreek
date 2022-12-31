/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      padding: {
        "10vw": "10vw",
      },
      backgroundImage: {
        "hero-bg": "url('../public/assets/FCChikeApril19_2009.JPG')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./src/assets/images/icon-facebook.svg')",
      },
    },
  },
  plugins: [],
};

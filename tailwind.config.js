/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      white: "hsl(0, 100%, 100%)",
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      "gray-100": "hsl(0, 0%, 75%)",
      "gray-200": "hsl(257, 7%, 63%)",
      "gray-300": "hsl(255, 11%, 22%)",
      "gray-400": "hsl(260, 8%, 14%)",
    },
    fontWeight: {
      medium: "500",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        boostDesktop: "url('/bg-boost-desktop.svg')",
        boostMobile: "url('/bg-boost-mobile.svg')",
        shortenDesktop: "url('/bg-shorten-desktop.svg')",
        shortenMobile: "url('/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};

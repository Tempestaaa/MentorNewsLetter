/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        pink: "#ff527b",
        error: "hsl(4, 100%, 95%)",
        textBtn: "hsl(234, 29%, 20%)",
        bg: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        default: '"Roboto", sans-serif',
      },
    },
  },
  plugins: [],
};

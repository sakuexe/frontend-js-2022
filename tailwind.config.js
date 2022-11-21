/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["*/*.{html, js}"],
  // content: ["./2_quiz-app/*.{html, js}"],
  content: ["./exercises/*.{html, js}"],
  theme: {
    fontFamily: {
      serif: ['"PT Serif"'],
      display: ["Lato"],
      monospace: ['"PT Mono"'],
    },
    extend: {
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

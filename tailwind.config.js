/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["*/*.{html, js}"],
  content: ["./1_forms-and-inputs/*.{html, js}"],
  theme: {
    fontFamily: {
      'serif': ['"PT Serif"'],
      'display': ['Lato'],
      'monospace': ['"PT Mono"']
    },
    extend: {
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}

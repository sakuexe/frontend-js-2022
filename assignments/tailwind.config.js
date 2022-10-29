/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*/*.{html, js}"],
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

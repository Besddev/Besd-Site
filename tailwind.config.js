/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./BesdSite/*.{html,js}"],
    theme: {
      extend: {
      colors:
      {
        'backround-black': '#1D1C1D',
        'about-black': '#2A292B',
        'about-white': '#e3d5ca',
      }
    },
  },
    plugins: [],
  }
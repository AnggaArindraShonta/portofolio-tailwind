/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      shadow: {
        blueShadow: 'rgba(0, 77, 153, 0.83)',
      },
      colors: {
        primary: '#1C2226',
        secondary: '#21282D',
        cardBlack: '#1E1E1E',
        cardBlue: 'rgba(0, 77, 153, 0.83)',
        bluePrimary: '#0080FF',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },

      fontFamily: {
            'sans' : ['Poppins'],
            'inter': ['Inter'],
        },
    },
  },
  plugins: [],
}


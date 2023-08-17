/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'archivo': ['Archivo Narrow', 'sans-serif'],
        'shadow': ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
}


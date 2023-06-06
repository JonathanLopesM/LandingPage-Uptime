/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        test: ' transition 3s -translate-y-1 scale-110 duration-300 ease-in-out '
      }

    },
  },
  plugins: [],
}
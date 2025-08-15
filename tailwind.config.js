/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./project.html",
    "./404.html",
    "./src/**/*.{js,css,html}",
    "./project/**/*.{js,css,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Jakarta": ['Plus Jakarta Sans'],
        "Libaritus": ['Libaritus'],
      },
    },
  },
  plugins: [],
}


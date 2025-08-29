/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{js,css,html}",
    "./project.html",
    "./404.html",
    "./service.html",
    "./src/**/*.{js,css,html}",
    "./project/**/*.{js,css,html}",
    "./hasanah.html",
    "./pos.html"
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


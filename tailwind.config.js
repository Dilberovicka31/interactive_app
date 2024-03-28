/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.handlebars', './public/css/**/*.css'],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms')

],
}


const cssnano = require('cssnano')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [tailwindcss, autoprefixer, cssnano] : [tailwindcss, autoprefixer],
}

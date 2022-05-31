const defaultTheme = require('tailwindcss/defaultTheme')
const daisyui = require('daisyui')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg-custom-l': '#31374d',
      'mainBlue': '#17214b',
      'lightGreen': '#327c7a',
      'bg-custom-dark': '#2a2a2a',
      'white':'#ffffff',
      'grey':'#6c6c6c',
      'tomato':'#e04242',
      'lightBlue':'#4e71af',
      'offWhite':'#e8e8e8',
      'dark':'#111111'
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

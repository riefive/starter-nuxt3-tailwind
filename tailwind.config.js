/** @type {import('tailwindcss').Config} */
const tailwindTheme = require('tailwindcss/defaultTheme');

const screensExtended = Object.assign({
  ...tailwindTheme.screens,
  small: { min: '200px', max: '639px' },
  medium: { min: '640px', max: '767px' },
  large: { min: '768px', max: '1023px' },
  extra: { min: '1024px', max: '1279px' },
  extraMax: { min: '1280px' },
});

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      screens: screensExtended,
    },
  },
  plugins: [require('daisyui')],
};

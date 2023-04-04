/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        customDark: {
          primary: '#2f3e46',

          secondary: '#52796f',

          accent: '#cad2c5',

          neutral: '#110E0E',

          'base-100': '#252422',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#d00000',
        },
      },
      'corporate',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};

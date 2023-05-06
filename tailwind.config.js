const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        responsive: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s',
      },
      // animation: {
      //   wiggle: 'wiggle 1s ease-in-out infinite',
      // }
    },
  },
  plugins: [],
};

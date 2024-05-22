/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-custom': '#ff6500',
      },
    },
  },
  plugins: [],
  important: '#root',
};

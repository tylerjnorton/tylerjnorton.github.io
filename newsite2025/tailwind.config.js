/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blob1: 'blob1 25s infinite',
        blob2: 'blob2 30s infinite',
        blob3: 'blob3 35s infinite',
      },
    },
  },
  plugins: [],
};
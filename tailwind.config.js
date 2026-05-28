/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sce: {
          orange: '#f15a24',
          'orange-hover': '#ff6b35',
          'orange-light': '#fff1e8',
        },
      },
    },
  },
  plugins: [],
}


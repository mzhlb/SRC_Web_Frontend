/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          light: '#b0e0e6',
          DEFAULT: '#5f9ea0',
          dark: '#53868b',
        },
      },
    },
  },
  plugins: [],
}


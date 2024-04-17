/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        extra: '1.4'
      },
      fontFamily: {
        Inter: ["Inter", 'sans-serif']
      },
      fontSize: {
        small: '0.75rem',
        medium: '0.875rem',
        large: '1rem'
      },
      colors: {
        purple100: '#8284fa',
        purple200: '#5e60ce',
        blue100: '#4ea8de',
        blue200: '#1e6f9f',
        gray100: '#f2f2f2',
        gray200: '#d9d9d9',
        gray300: '#808080',
        gray400: '#333333',
        gray500: '#262626',
        gray600: '#1a1a1a',
        gray700: '#0d0d0d',
        red100: '#e25858'
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        muted: '#5a5a5a',
        paper: '#f6f5f2',
        card: '#ffffff',
        line: '#e2e0da',
        accent: {
          DEFAULT: '#1f4e79',
          hover: '#163a5c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#FFE5E5',
        'soft-blue': '#E5F5FF',
        'soft-yellow': '#FFF9E5',
        'soft-purple': '#F5E5FF',
        'mint-green': '#E5FFF5',
        'coral-red': '#FF6B6B',
        'teal-accent': '#4ECDC4',
        'cream-white': '#FFF9F0',
      },
      fontFamily: {
        'headings': ['"Fredoka One"', 'cursive'],
        'body': ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button': '0 4px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

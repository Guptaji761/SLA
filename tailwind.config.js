/** @type {import('tailwindcss').Config} - HMR trigger */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#97144D', // Maroon
        burgundy: '#6B0F3A', // Deep Burgundy
        gold: '#D4A15E', // Rose Gold
        champagne: '#F8F5F2', // Champagne White
        dark: '#2A0D18', // Dark Luxury Background
        ivory: '#FAFAF7', // Warm Ivory / Pearl
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

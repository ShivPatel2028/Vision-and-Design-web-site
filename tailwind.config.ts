import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f1d7ad',
          300: '#e8bd7a',
          400: '#dea04a',
          500: '#C8A97E',
          600: '#b8895a',
          700: '#9a6e42',
          800: '#7d5738',
          900: '#654730',
        },
        navy: {
          50: '#eef2ff',
          100: '#d8e2ff',
          200: '#b8c9ff',
          300: '#8aa5ff',
          400: '#5c7aff',
          500: '#3a5bff',
          600: '#1a3aff',
          700: '#0f2bcc',
          800: '#1A1A2E',
          900: '#0D0D1A',
        },
        cream: '#E8D5B7',
        'bg-dark': '#0D0D0D',
        'bg-light': '#F8F6F3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A2E 50%, #0F3460 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A97E 0%, #E8D5B7 50%, #b8895a 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config

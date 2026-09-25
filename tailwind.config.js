/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090A',
          50: '#181B1E',
          100: '#15181A',
          200: '#101214',
          300: '#0C0D0F',
          900: '#08090A',
        },
        surface: {
          DEFAULT: '#101214',
          elevated: '#15181A',
          hover: '#1B1E22',
          card: '#0D0E10',
        },
        teal: {
          DEFAULT: '#6FE7E1',
          400: '#6FE7E1',
          500: '#48D2CC',
          600: '#2DBEB8',
        },
        azure: {
          DEFAULT: '#7AA7FF',
          400: '#7AA7FF',
          500: '#5F93FF',
          600: '#3D7AFF',
        },
        ivory: {
          DEFAULT: '#F3F0E8',
          light: '#FAF8F5',
          muted: '#A7AAA8',
          dim: '#7C807E',
        },
        accent: {
          teal: '#6FE7E1',
          azure: '#7AA7FF',
          highlight: '#DCE9FF',
          glow: 'rgba(111, 231, 225, 0.18)',
        },
        ink: {
          primary: '#F3F0E8',
          secondary: '#A7AAA8',
          tertiary: '#7C807E',
          muted: '#525554',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(111, 231, 225, 0.25)',
        'glow-azure': '0 0 25px -5px rgba(122, 167, 255, 0.25)',
        'glow-sm': '0 0 20px -5px rgba(111, 231, 225, 0.20)',
        'glow-md': '0 0 35px -8px rgba(111, 231, 225, 0.30)',
        'glow-lg': '0 0 50px -10px rgba(111, 231, 225, 0.40)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

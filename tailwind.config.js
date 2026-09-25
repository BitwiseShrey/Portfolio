/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Six core reference palette colors:
        plum: {
          DEFAULT: '#190019',
          900: '#190019',
          800: '#230023',
        },
        violet: {
          DEFAULT: '#2B124C',
          light: '#35165E',
          card: '#2B124C',
        },
        purple: {
          DEFAULT: '#522B5B',
          light: '#653670',
          card: '#522B5B',
        },
        mauve: {
          DEFAULT: '#854F6C',
          light: '#9E5E80',
        },
        blush: {
          DEFAULT: '#DFB6B2',
          light: '#E8C5C2',
          muted: '#C49894',
        },
        cream: {
          DEFAULT: '#FBE4D8',
          light: '#FFF0E8',
          muted: '#E5C9BC',
        },
        // Semantic aliases aligned to the 6 colors:
        obsidian: {
          DEFAULT: '#190019',
          50: '#522B5B',
          100: '#35165E',
          200: '#2B124C',
          300: '#200A38',
          900: '#190019',
        },
        surface: {
          DEFAULT: '#2B124C',
          elevated: '#35165E',
          hover: '#522B5B',
          card: '#2B124C',
        },
        ivory: {
          DEFAULT: '#FBE4D8',
          light: '#FFF0E8',
          muted: '#DFB6B2',
          dim: '#854F6C',
        },
        accent: {
          DEFAULT: '#DFB6B2',
          mauve: '#854F6C',
          blush: '#DFB6B2',
          cream: '#FBE4D8',
          glow: 'rgba(223, 182, 178, 0.20)',
        },
        ink: {
          primary: '#FBE4D8',
          secondary: '#DFB6B2',
          tertiary: '#854F6C',
          muted: '#522B5B',
        },
        // Safety mappings: map any remaining teal/azure references to blush/mauve
        teal: {
          DEFAULT: '#DFB6B2',
          400: '#DFB6B2',
          500: '#854F6C',
          600: '#522B5B',
        },
        azure: {
          DEFAULT: '#DFB6B2',
          400: '#DFB6B2',
          500: '#854F6C',
          600: '#522B5B',
        }
      },
      fontFamily: {
        serif: ['"Aveton"', '"Syne"', 'sans-serif'],
        display: ['"Aveton"', '"Syne"', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-plum': '0 0 25px -5px rgba(133, 79, 108, 0.35)',
        'glow-blush': '0 0 25px -5px rgba(223, 182, 178, 0.30)',
        'glow-mauve': '0 0 25px -5px rgba(133, 79, 108, 0.30)',
        'glow-sm': '0 0 20px -5px rgba(223, 182, 178, 0.20)',
        'glow-md': '0 0 35px -8px rgba(133, 79, 108, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(133, 79, 108, 0.45)',
        // Safety fallbacks:
        'glow-teal': '0 0 25px -5px rgba(223, 182, 178, 0.25)',
        'glow-azure': '0 0 25px -5px rgba(133, 79, 108, 0.25)',
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

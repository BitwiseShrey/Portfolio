/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Restored Previous Purple / Electric Violet Identity
        obsidian: {
          DEFAULT: '#070709',
          50: '#1a1a24',
          100: '#14141c',
          200: '#0f0f15',
          300: '#0a0a0e',
          900: '#070709',
        },
        surface: {
          DEFAULT: '#101015',
          elevated: '#15151c',
          hover: '#1b1b24',
          card: '#0d0d12',
        },
        accent: {
          purple: '#8b5cf6',
          violet: '#7c3aed',
          fuchsia: '#a855f7',
          electric: '#9333ea',
          glow: 'rgba(139, 92, 246, 0.18)',
        },
        ink: {
          primary: '#f4f4f7',
          secondary: '#a1a1aa',
          tertiary: '#71717a',
          muted: '#52525b',
        }
      },
      fontFamily: {
        serif: ['"Aveton"', '"Syne"', 'sans-serif'],
        display: ['"Aveton"', '"Syne"', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(124, 58, 237, 0.35)',
        'glow-sm': '0 0 20px -5px rgba(139, 92, 246, 0.25)',
        'glow-md': '0 0 35px -8px rgba(139, 92, 246, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(139, 92, 246, 0.45)',
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

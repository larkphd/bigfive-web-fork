import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: {
          DEFAULT: '#6D9886',
          light: '#9DC5B4',
          dark: '#507966'
        },
        secondary: {
          DEFAULT: '#393E46',
          light: '#4F5561',
          dark: '#2A2E35'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};

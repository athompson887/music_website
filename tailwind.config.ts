import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Jungle theme - playful and bright
        jungle: {
          green: '#2D5016',
          lime: '#84CC16',
          leaf: '#65A30D',
          moss: '#3F6212',
        },
        sunny: {
          yellow: '#FBBF24',
          orange: '#FB923C',
          gold: '#F59E0B',
        },
        sky: {
          light: '#7DD3FC',
          bright: '#38BDF8',
        },
        berry: {
          pink: '#F472B6',
          purple: '#C084FC',
        },
        earth: {
          brown: '#92400E',
          tan: '#D97706',
        }
      },
      fontFamily: {
        fun: ['Fredoka', 'Comic Sans MS', 'cursive'],
        rounded: ['Nunito', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
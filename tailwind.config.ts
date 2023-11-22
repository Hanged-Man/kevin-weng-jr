import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bobble: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        }
      },
      animation: {
        bobble: 'bobble 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': [
          '0 2px 2px rgba(255, 255, 255, 0.5)',
          '0 0px 4px rgba(222, 112, 222, 0.5)',
          '0 0px 10px rgba(222, 112, 222, 0.5)',
          '0 0px 50px #D407F3'
        ]
      }

    },
    fontFamily: {
      'neon': ['var(--font-londrina)']
    }

  },
  plugins: [],
}
export default config

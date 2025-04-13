/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'glow-pulse': 'glowPulse 3s infinite',
        'level-up': 'levelUp 0.5s ease-out forwards',
        'float-up': 'float-up 3s linear',
        'shimmer': 'shimmer 3s infinite',
        'scan': 'scan 2s linear infinite',
        'fog-move': 'fogMove 8s infinite alternate',
      },
      blur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 168, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 168, 255, 0.4)' },
        },
        levelUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) rotate(45deg)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fogMove: {
          '0%': { transform: 'translateX(-5%) translateY(-5%) scale(1.1)' },
          '100%': { transform: 'translateX(5%) translateY(5%) scale(0.9)' },
        },
        floatUp: {
          '0%': { 
            transform: 'translateY(100px)',
            opacity: '0',
          },
          '50%': { opacity: '0.5' },
          '100%': { 
            transform: 'translateY(-100vh)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 
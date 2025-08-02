/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/extensions */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        'light-theme-purple': '#E8E6F2',
        'theme-purple': '#5D3FD3',
        'dark-theme-purple': '#2C1A57',
        'theme-blue': '#1F3A93',
        'gold-accent': '#D4AF37',
        'platinum-gray': '#E5E4E2',
        'midnight-black': '#0B0C10',
        'rich-white': '#F8F9FA',
        'ultra-silver': '#CED4DA',
        'deep-charcoal': '#212529',
        'premium-teal': '#008080',
      },
      spacing: {
        71: '17.75rem',
        95: '23.5rem',
        192: '48rem',
        200: '56rem',
        220: '64rem',
      },
      margin: {
        '-112': '-28rem',
        '-120': '-30rem',
        '-128': '-32rem',
        '-144': '-36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        full: '9999px',
      },
      boxShadow: {
        premium: '0 15px 30px rgba(0, 0, 0, 0.1)',
        insetGold: 'inset 0 0 10px #D4AF37',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'bounce-x': 'bouncex 1s infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'scale-up': 'scaleUp 0.4s ease-in-out',
      },
      keyframes: {
        bouncex: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
      textColor: ['active', 'hover', 'focus'],
      ringWidth: ['hover', 'active'],
      scale: ['group-hover'],
      borderRadius: ['hover'],
      boxShadow: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};

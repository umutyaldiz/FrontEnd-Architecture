module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    mode: 'all',
    content: ['./*.html', './src/js/**/*.js'],
  },
  theme: {
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1140px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    fontFamily: {
      'body': ['"Montserrat"', 'sans-serif'],
      'Icon': 'icon'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'd-1': '#202020',
      'd-2': '#191919',
      'd-3': '#333333'
    }),
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '30%': '30%',
      '50%': '50%',
      '90%': '90%',
      '100%': '100%',
    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
        '1/1': '1 / 1',
        '3/1': '3 / 1',
      },
      backgroundImage: {
        'img-menu-black': "url('../../src/images/icons/menu-icon-black.svg')",
        'img-menu-white': "url('../../src/images/icons/menu-icon-white.svg')",
        'img-moon-black': "url('../../src/images/icons/moon-icon-black.svg')",
        'img-moon-white': "url('../../src/images/icons/moon-icon-white.svg')"
      }
    },
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};

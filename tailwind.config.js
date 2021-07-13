module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#d55f64',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        black: {
          light: '#00000040',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

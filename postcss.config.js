module.exports = () => {
  return {
    plugins: [
      require('postcss-fixes'),
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer')
    ]
  };
};
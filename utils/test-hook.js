require('babel/register')({
  only: /test/,
  plugins: ['babel-plugin-espower'],
  extensions: ['.es6', '.js'],
});

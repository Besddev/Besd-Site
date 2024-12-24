const path = require('path');

module.exports = {
  entry: {
    app: './BesdSite/careers.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './BesdSite/careers.js',
  },
};

const path = require('path');

module.exports = {
  resolveLoader: {
    alias: {
      'babel-fix-loader': path.join(__dirname, 'babel-fix-loader.js'),
    },
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.js/,
        use: ['babel-fix-loader', 'ts-loader'],
      },
    ],
  },
};

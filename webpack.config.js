module.exports = {
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.js/, loader: 'ts-loader'},
    ],
  },
};

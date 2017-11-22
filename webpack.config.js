const ClosureCompilerPlugin = require('closure-webpack-plugin');

module.exports = {
  plugins: [new ClosureCompilerPlugin({mode: 'AGGRESSIVE_BUNDLE'})],
};

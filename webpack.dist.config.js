const pkg = require('./package.json');
const fs = require('fs');
const babelSettings = JSON.parse(fs.readFileSync('.babelrc'));

module.exports = {
  entry: './src/index',
  output: {
    library: pkg.name,
    libraryTarget: 'umd',
    path: __dirname,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.html']
  },
  externals: ['nilutil'],
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelSettings
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['svelte-loader'].map(loader => ({ loader }))
      }
    ]
  }
};

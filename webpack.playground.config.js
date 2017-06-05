const fs = require('fs');
const babelSettings = JSON.parse(fs.readFileSync('.babelrc'));
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './playground/main',
  resolve: {
    extensions: ['.js', '.html']
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        use: [
          {
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: babelSettings
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['svelte-loader'].map(loader => ({ loader }))
      }
    ]
  },
  devServer: {
    port: 9090
  }
};

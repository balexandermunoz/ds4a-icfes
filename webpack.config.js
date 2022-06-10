const path = require('path');
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'ify-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ],

  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html")
  })],
  devtool: "source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "build/") },
    hot: true
  },
  stats: {
    errorDetails: true
  }
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index-bundle.js"
  },
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {from: "./src/styles/style.css", to: "styles/style.css"},
    //     {from: "./src/styles/style.css.map", to: "styles/style.css.map"},
    //   ],
    // }),
  ]
};
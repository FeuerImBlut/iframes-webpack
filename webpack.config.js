const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration}*/
module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./src"),
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].bundle.js",
  },
  devServer: { port: 4200 },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "src/frames/"),
          to: path.resolve(__dirname, "dist/frames/"),
        },
        {
          from: path.resolve(__dirname, "src/iframe.js/"),
          to: path.resolve(__dirname, "dist/frames/"),
        },
        {
          from: path.resolve(__dirname, "src/iframe.css/"),
          to: path.resolve(__dirname, "dist/frames/"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].bundle.css",
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.ico$/, use: ["file-loader"] },
    ],
  },
};

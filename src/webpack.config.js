const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.png$/,
        exclude: /(node_modules)/,
        use: [{ loader: "file-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};

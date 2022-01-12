const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  devtool: "inline-source-map",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Dev",
      template: path.join(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new Dotenv(),
  ],

  devServer: {
    static: {
      publicPath: "/build",
    },
    //historyApiFallback allows the react router to render specific pages without going server-side
    //essentially we can refresh or go forward/back from non-root domain pages and allow the react-router
    //to render client-side
    historyApiFallback: true,
    proxy: {},
  },
};

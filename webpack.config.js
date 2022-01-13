const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  //mode: 'development',


  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev',
      template: path.join(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Dotenv(),
  ],

  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'build'),
    },
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
      '/keys': 'http://localhost:3000'
    },
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

const env = dotenv.config().parsed;
  
// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.json', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/static/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: [/node_modules/, /\.test.tsx?$/],
        use: {
          loader: 'ts-loader',
          options: {
          },
        },
      },
    ],
  },
};

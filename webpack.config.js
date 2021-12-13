const glob = require('glob')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const MODE = !env.dev ? "production" : "development";
  console.log(env);

  return {
    mode: MODE,
    entry: glob.sync('./src/js/pages/**/index.js').reduce((acc, path) => {
      const entry = path.replace('/index.js', '')
        .replace('./src/js/pages/', '');
      acc[entry] = path;
      return acc;
    }, {
      core: './src/js/core.js',
      styles: './src/css/styles.css'
    }),
    output: {
      path: path.resolve('dist'),
      clean: true,
      filename: 'js/[name]/bundle.js',
      chunkFilename: "js/[name]/chunkBundle.js"
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
          ],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ]
  }
};

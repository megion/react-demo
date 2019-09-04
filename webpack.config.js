const webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
var argv = require('yargs-parser')(process.argv.slice(2));
var mode = argv.mode;
const devMode = mode === 'development';

module.exports = {
  mode: mode,
  watchOptions: {
    ignored: /node_modules/,
  },
  context: path.resolve(__dirname, './src'),
  entry: {
    // create entry point (and lib with name 'module1' from ./module_1/index.js
    module1: './module_1',
    common: './common',
  }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    path: path.resolve(__dirname, 'dist'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    //filename: devMode ? '[name].js' : '[name].[hash].js',
    filename: '[name].[hash].js',
    // the filename template for entry chunks

    library: '[name]',
    // the name of the exported library

    publicPath: '', // string
    // the url to the output directory resolved relative to the HTML page

    libraryTarget: 'umd', // universal module definition
    // the type of the exported library
  },

  plugins: [
    //new webpack.DefinePlugin({
    //'process.env': {
    //NODE_ENV: devMode
    //? JSON.stringify('development')
    //: JSON.stringify('production'),
    //},
    //}),
    //new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: devMode ? '[name].css' : '[name].[hash].css',
      filename: '[name].[hash].css',
      //chunkFilename: devMode ? '[id].[name].css' : '[id].[name].[hash].css'
      chunkFilename: '[id].[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'module_1.html', // target file -> dist/module_1.html
      inject: true,
      chunks: ['module1'],
      template: 'module_1/index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],


  resolve: {
    alias: {
      common$: path.resolve(__dirname, 'src/common/index.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          //"plugins": ["transform-es2015-modules-umd"]
        },
        // options for the loader
      },
      {
        test: /\.css$/,
        // Adds CSS to the DOM by injecting a <style> tag
        use: [
          // Adds CSS to the DOM by injecting a <style> tag
          {loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          // css-loader interprets @import and url()
          // like import/require() and will resolve them
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.less$/,
        use: [
          // creates style nodes from JS strings
          {loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          // translates CSS into CommonJS
          'css-loader',
          // compiles Less to CSS
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              //name: '[name].[ext]'
              name: function(file) {
                //if (devMode) {
                //return '[path][name].[ext]';
                //}

                return '[path][name].[hash].[ext]';
              },
            },
          },
        ],
      },
      //{
      //test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      //use: [
      //{
      //loader: 'url-loader',
      //options: {
      //name: function(file) {
      //if (devMode) {
      //return '[path][name].[ext]';
      //}

      //return '[hash].[ext]';
      //},
      //limit: 4096
      //}
      //}
      //]
      //}
    ],
    // since webpack 3.0.0
    //noParse: function(content) {
    //return /moment|lodash/.test(content);
    //}
  },

  watch: devMode,
  devtool: devMode ? 'source-map' : false, // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  devServer: {
    port: 9000,
    //hot: true
  },
};

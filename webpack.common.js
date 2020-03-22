const webpack = require("webpack")
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    // create entry point (and lib with name 'module1' from ./module_1/index.js
    module1: "./module_1",
    common: "./common",
  }, // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    path: path.resolve(__dirname, "dist"),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    //filename: devMode ? '[name].js' : '[name].[hash].js',
    filename: "[name].[hash].js",
    // the filename template for entry chunks

    library: "[name]",
    // the name of the exported library

    publicPath: "", // string
    // the url to the output directory resolved relative to the HTML page

    libraryTarget: "umd", // universal module definition
    // the type of the exported library
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: devMode ? '[name].css' : '[name].[hash].css',
      filename: "[name].[hash].css",
      //chunkFilename: devMode ? '[id].[name].css' : '[id].[name].[hash].css'
      chunkFilename: "[id].[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "module_1.html", // target file -> dist/module_1.html
      inject: true,
      chunks: ["module1"],
      template: "module_1/index.html",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    //alias: {
      //common$: path.resolve(__dirname, "src/common/index.js"),
    //},
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      //{
        //test: /\.js$/,
        ////exclude: /node_modules/,
        //include: /src/,
        //loader: "babel-loader",
        //options: {
          //presets: ["@babel/preset-env"],
        //},
        //// options for the loader
      //},
      //{
        //test: /\.js$/,
        //use: ["source-map-loader"],
        //enforce: "pre",
      //},
      {
        test: /\.css$/,
        // Adds CSS to the DOM by injecting a <style> tag
        use: [
          // Adds CSS to the DOM by injecting a <style> tag
          //{loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          { loader: MiniCssExtractPlugin.loader },
          // css-loader interprets @import and url()
          // like import/require() and will resolve them
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: [
          // creates style nodes from JS strings
          //{loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader},
          { loader: MiniCssExtractPlugin.loader },
          // translates CSS into CommonJS
          "css-loader",
          // compiles Less to CSS
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              //name: '[name].[ext]'
              name: function(file) {
                return "[path][name].[hash].[ext]"
              },
            },
          },
        ],
      },
    ],
  },
}

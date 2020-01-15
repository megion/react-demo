const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    /*
     * If watching does not work for you,
     * try out this option.
     * Watching does not work with NFS and machines in VirtualBox.
     */
    poll: 1000,
  },
  devServer: {
    port: 9000,
    proxy: [
      // add proxy for simple_api (see simple_api/server.js)
      {
        path: "/api/",
        target: "http://localhost:3004",
      },
    ],
    //hot: true
  },
})

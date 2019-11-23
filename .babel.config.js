module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    {
      targets: {
        node: "current",
      },
    },
  ],
  plugins: [
    "syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ],
}

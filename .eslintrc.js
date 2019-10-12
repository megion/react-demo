module.exports = {
  extends: ["eslint:recommended", "plguin:react/recommended", "react-app"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  rules: {
    "brace-style": ["error", "1tbs"],
    camelcase: ["error", { properties: "never" }],
    curly: ["error", "all"],
    "dot-location": ["error", "object"],
    indent: ["error", 2],
    "max-len": ["error", { code: 120, ignoreComments: false }],
    "no-console": "off",
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "no-var": ["error"],
    "prefer-const": ["error"],
  },
}

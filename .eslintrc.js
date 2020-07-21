module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    semi: ["error", "always"],
    "comma-dangle": ["error", "ignore"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};

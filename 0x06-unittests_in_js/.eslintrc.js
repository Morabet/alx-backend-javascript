module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2021, // Set to a valid ECMAScript version
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
  },
};


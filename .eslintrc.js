const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    "airbnb"
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    allowImportExportEverywhere: false
  },
  plugins: [],
  rules: {
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  globals: {
    expect: true,
    shallow: true,
    mount: true,
    jest: true,
    render: true,
    Generator: true,
    SyntheticEvent: true,
    SyntheticInputEvent: true,
    Class: true,
    React$Component: true
  }
};

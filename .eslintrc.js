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
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
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
  plugins: ['react', 'flowtype', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': [1]
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

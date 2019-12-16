module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react/recommended"
  ],
  parser: 'babel-eslint',
  plugins: [
    "react",
    "jsx-a11y"
  ],
  env: {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 0,
    'import/no-cycle': 0,
    'semi': 2,
    'max-len': 0,
    'global-require': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/state-in-constructor': 0,
  },
}
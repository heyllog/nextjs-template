module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    '@eclab/eslint-config/react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
}

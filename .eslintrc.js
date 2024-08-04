module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    '@heyllog/eslint-config/react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    // redux-toolkit uses immer and params reassign quite often
    'no-param-reassign': ['warn', { 'props': false }],
    'no-duplicate-imports': 'off',

    // useEffect return function
    'consistent-return': 'off',
    'arrow-body-style': 'off',
  },
  ignorePatterns: ['*.js', '*.config', 'dist'],
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['@react-native'],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: true,
  //     node: true,
  //   },
  //   'import/ignore': ['react-native-reanimated'],
  // },
};

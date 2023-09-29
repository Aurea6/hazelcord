module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'standard-with-typescript',
    'standard-react',
    'standard-jsx',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json' },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Make TypeScript ESLint less strict.
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}

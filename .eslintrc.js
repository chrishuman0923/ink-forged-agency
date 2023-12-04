module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prefer-arrow', 'simple-import-sort', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'import/extensions': ['error', 'never', { css: 'always', ts: 'never', tsx: 'never' }],
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/imports': 'error',
  },
};

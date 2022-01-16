module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['import', 'prettier', '@typescript-eslint', 'simple-import-sort'],
  globals: {},
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'packages/*/tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        project: ['tsconfig.json', 'packages/*/tsconfig.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-prettier',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': [
      ('off' | 'warn' | 'error'),
      { target: 'any' },
    ],
    'no-bitwise': [
      'error',
      { allow: ['|'] },
    ],
    'no-tabs': [
      'error', { allowIndentationTabs: true }
    ], 
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true }],
    'react/jsx-props-no-spreading': [<enabled/>, {'html': 'ignore', 'custom': 'ignore'}],
  },
};

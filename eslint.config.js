import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist'],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptParser, // Specify the TypeScript parser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'typescript-eslint': typescriptEslint, // Include TypeScript plugin
      prettier: prettier,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
    },
  },
  // Add global configuration
  // js.config({
  //   extends: [
  //     'eslint:recommended',
  //     'plugin:react/recommended', // React recommended rules
  //     'plugin:react-hooks/recommended',
  //     'plugin:prettier/recommended',
  //   ],
  // }),
];

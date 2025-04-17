import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        requireConfigFile: false,
        project: './tsconfig.json',
        extraFileExtensions: ['.json'],
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
      'linebreak-style': 'off',
      'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used' }],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'default-param-last': 'error',
      'new-cap': ['off', { capIsNewExceptions: ['Router', 'STRING'] }],
    },
  },

  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build folders
  globalIgnores(['dist', 'node_modules', 'coverage']),

  // TypeScript + React files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    // Base configs
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },

    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },

    rules: {
      // 🔹 Core cleanup rules
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^(motion|m|AnimatePresence|[A-Z_])', // ✅ allows Framer Motion + constants
          argsIgnorePattern: '^_', // allow unused args starting with _
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'warn',

      // 🔹 React best practices
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
      'react/prop-types': 'off', // Not needed with TS
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // 🔹 Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Optional — helps readability
      'react/self-closing-comp': 'warn',
      'react/jsx-key': 'error',
    },
  },
]);

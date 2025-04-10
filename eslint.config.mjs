import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Свои правила
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', '.next', 'dist', 'build', 'public', '.eslint.config.js'],
    rules: {
      '@next/next/no-img-element': 'off', // отключаем, если используешь <img>
      'react/jsx-key': 'warn',
      'react/react-in-jsx-scope': 'off', // не нужен с новым JSX runtime
    },
  },
  prettier,
];
export default eslintConfig;

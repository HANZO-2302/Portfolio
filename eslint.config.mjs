import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from './.prettierrc.cjs'; // если хочешь использовать свою конфигурацию Prettier

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Подключаем Prettier как отдельный конфиг
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'plugin:prettier/recommended', // 💥 Вот это связывает Prettier с ESLint
  ),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', '.next', 'dist', 'build', 'public', '.eslint.config.js'],
    rules: {
      '@next/next/no-img-element': 'off',
      'react/jsx-key': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['error', prettierConfig], // 🔧 Правила Prettier как ESLint-ошибки
    },
  },
];

export default eslintConfig;

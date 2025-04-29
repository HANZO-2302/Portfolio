'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('system');

  // Функция для применения темы
  const applyTheme = (newTheme: ThemeType) => {
    const root = window.document.documentElement;

    // Сначала удаляем класс dark для сброса состояния
    root.classList.remove('dark');

    // Применяем тему в зависимости от выбора
    if (
      newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    }

    // Сохраняем выбор в localStorage
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = newTheme;
    }
  };

  // Устанавливаем тему и применяем её
  const handleSetTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Инициализация темы при загрузке
  useEffect(() => {
    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.theme as ThemeType | undefined;

    // Устанавливаем начальное состояние
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else {
      setTheme('system');
    }

    // Применяем тему
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }

    // Слушаем изменения системной темы
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Хук для использования темы в компонентах
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme должен использоваться внутри ThemeProvider');
  }
  return context;
}

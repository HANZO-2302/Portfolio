'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = localStorage.theme as Theme | undefined;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  return (
    <div className="flex items-center space-x-4 rounded-lg border-0 border-zinc-700 bg-zinc-400 p-1 dark:border-zinc-500 dark:bg-zinc-500/0 dark:shadow-xs/0">
      <button
        onClick={() => handleSetTheme('light')}
        className={`rounded-md p-2 transition-all duration-500 ${
          theme === 'light'
            ? 'text-zinc-800 ring-2 ring-zinc-800'
            : 'text-zinc-100 hover:ring hover:ring-zinc-400'
        }`}
      >
        <SunIcon className="hover:animate-spin" />
      </button>

      <button
        onClick={() => handleSetTheme('dark')}
        className={`rounded-md p-2 transition-all duration-500 ${
          theme === 'dark'
            ? 'text-zinc-100 ring-2 ring-blue-400'
            : 'text-zinc-800 hover:ring hover:ring-zinc-800'
        }`}
      >
        <MoonIcon className="hover:animate-spin" />
      </button>
    </div>
  );
}

// Иконки

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-5 w-5 ${className || ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-5 w-5 hover:animate-spin ${className || ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<Theme>('light');

//   useEffect(() => {
//     const savedTheme = localStorage.theme as Theme | undefined;
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//       setTheme('dark');
//       document.documentElement.classList.add('dark');
//     } else {
//       setTheme('light');
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.theme = newTheme;
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="flex items-center rounded-lg bg-gray-200 p-2 text-gray-800 shadow-md transition-colors duration-300 dark:bg-gray-800 dark:text-gray-100"
//       aria-label="Переключатель темы"
//     >
//       {theme === 'light' ? <MoonIcon /> : <SunIcon />}
//     </button>
//   );
// }

// // ☀️ Светлая тема
// function SunIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="h-5 w-5"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//       />
//     </svg>
//   );
// }

// // 🌙 Тёмная тема
// function MoonIcon() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="h-5 w-5"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
//       />
//     </svg>
//   );
// }

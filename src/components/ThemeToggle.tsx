// 'use client';

// import { useEffect, useState } from 'react';
// import { Moon, Sun } from 'lucide-react';

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.theme;
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (theme === 'dark' || (!theme && systemPrefersDark)) {
//       document.documentElement.classList.add('dark');
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove('dark');
//       setIsDark(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? 'light' : 'dark';
//     localStorage.theme = newTheme;
//     document.documentElement.classList.toggle('dark');
//     setIsDark(!isDark);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//       className="rounded-full bg-gray-200 p-2 text-gray-800 transition dark:bg-gray-700 dark:text-gray-200"
//     >
//       {isDark ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const savedTheme = localStorage.theme as Theme | undefined;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setTheme('system');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      localStorage.theme = newTheme;
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  return (
    <div className="flex items-center space-x-4 rounded-lg border border-gray-500 bg-gray-200 p-1 shadow-md dark:border-gray-500 dark:bg-gray-800">
      <button
        onClick={() => handleSetTheme('light')}
        className={`rounded-md p-2 ${
          theme === 'light' ? 'bg-gray-800 text-gray-100' : 'text-gray-700 dark:text-gray-300'
        }`}
        aria-label="Светлая тема"
      >
        <SunIcon />
      </button>

      {/* <button
        onClick={() => handleSetTheme('system')}
        className={`rounded-md p-2 duration-500 ${
          theme === 'system'
            ? 'bg-gray-400 text-gray-900 dark:bg-gray-500 dark:text-white'
            : 'text-gray-600 dark:text-gray-300'
        }`}
        aria-label="Системная тема"
      >
        <ComputerIcon />
      </button> */}

      <button
        onClick={() => handleSetTheme('dark')}
        className={`rounded-md p-2 ${
          theme === 'dark' ? 'bg-gray-200 text-gray-900' : 'text-gray-700 dark:text-gray-300'
        }`}
        aria-label="Темная тема"
      >
        <MoonIcon />
      </button>
    </div>
  );
}

// Иконки

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25h6m-8.25 0h-1.5A1.5 1.5 0 0 1 4.5 15.75V5.25A1.5 1.5 0 0 1 6 3.75h12a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5h-1.5M9 17.25a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5M9 17.25h6"
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

'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    // Этот эффект не должен ничего делать на клиенте,
    // так как script уже выполнен
  }, []);

  return (
    // Скрипт для предотвращения мигания при загрузке (FOUC)
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Проверяем localStorage и системные настройки
            document.documentElement.classList.toggle(
              "dark",
              localStorage.theme === "dark" ||
                (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
            );
          })();
        `,
      }}
    />
  );
}

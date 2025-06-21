'use client';
import { useEffect, ReactNode, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

// Пропсы компонента с типизацией
interface PageTransitionProps {
  children: ReactNode;
}

// Компонент для управления переходами между страницами
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Пропускаем первую загрузку страницы
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Анимация выхода
    gsap.to('.page-transition', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        // Анимация появления новой страницы
        gsap.fromTo(
          '.page-content',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        );
        gsap.to('.page-transition', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        });
      },
    });
  }, [pathname]);

  return (
    <>
      <div className="page-transition pointer-events-none fixed inset-0 z-[9999] bg-black opacity-0" />
      <div className="page-content relative overflow-hidden">{children}</div>
    </>
  );
};

export default PageTransition;

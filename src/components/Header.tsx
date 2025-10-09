'use client';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const menuItems = [
  { href: '/', text: 'Home', icon: '/home.svg' },
  { href: '/contacts', text: 'Contacts', icon: '/contacts.svg' },
  { href: '/projects/photoshop', text: 'Photoshop', icon: '/photoshop.svg' },
  { href: '/projects/illustrator', text: 'Illustrator', icon: '/illustrator.svg' },
  { href: '/projects/lightroom', text: 'Lightroom', icon: '/lightroom.svg' },
  { href: '/projects/figma', text: 'Figma', icon: '/figma.svg' },
  { href: '/projects/topaz', text: 'Topaz Gigapixel AI', icon: '/topaz.png' },
  { href: '/projects/after', text: 'After Effects', icon: '/after_effects.svg' },
  { href: '/projects/premiere', text: 'Premiere Pro', icon: '/premiere.svg' },
  // ... остальные пункты
];

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Закрытие меню при клике вне его области
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     // 1. Добавляем проверку на buttonRef (кнопку меню)
  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(event.target as Node) &&
  //       buttonRef.current &&
  //       !buttonRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   };

  //   // 2. Добавляем закрытие по клавише Escape
  //   const handleEscape = (event: KeyboardEvent) => {
  //     if (event.key === 'Escape') {
  //       setIsOpen(false);
  //     }
  //   };

  //   // 3. Используем 'click' вместо 'mousedown' для лучшей совместимости
  //   document.addEventListener('click', handleClickOutside);
  //   document.addEventListener('keydown', handleEscape);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //     document.removeEventListener('keydown', handleEscape);
  //   };
  // }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header
      className={`fixed z-50 w-full bg-gray-200 dark:bg-gray-800 ${jetBrainsMono.className} antialiased`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-2">
        {/* Логотип */}

        {/* <Image
            src="/logo_mob.jpg"
            alt="logo Icon"
            // quality={20}
            // fill={true} // {true} | {false}
            width={50}
            height={50}
            priority
            // loading="eager" // {lazy} | {eager}
            className="aspect-square overflow-hidden rounded-full border-2 border-orange-500 object-cover object-[50%_10%] transition-all duration-500 hover:scale-105"
          /> */}

        <motion.div
          whileTap={{ scale: 0.95 }}
          className="relative flex flex-col rounded-xl border-2 border-orange-500 p-2"
        >
          <h1 className="text-lg leading-4.5 font-normal text-gray-950 transition-all duration-500 dark:text-gray-200 dark:duration-500">
            <Link href="/">Portfolio</Link>
          </h1>
          <div className="h-[0.5px] w-full rounded-lg bg-gray-500" />

          <h1 className="text-xs font-normal text-gray-950 transition-all duration-500 dark:text-gray-200 dark:duration-500">
            <Link href="/">Igor Menyailov</Link>
          </h1>
        </motion.div>

        <div className="flex items-center justify-center md:hidden">
          <ThemeToggle />
        </div>
        {/* Кнопка меню для мобильных устройств  */}
        <button
          ref={buttonRef}
          className="relative block focus:outline-none md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <div
            className={`relative top-2 flex text-gray-950 transition-all duration-300 dark:text-gray-200 ${
              isOpen ? 'translate-y-5 scale-0 opacity-0' : 'scle-100 translate-y-0 opacity-100'
            }`}
          >
            Menu
            <span className="absolute bottom-0 left-0 h-0.5 w-10 bg-orange-500"></span>
          </div>
          <div
            className={`relative right-2 bottom-4 flex text-gray-950 transition-all duration-300 dark:text-gray-200 ${
              isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-5 scale-0 opacity-0'
            }`}
          >
            Close
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"></span>
          </div>
        </button>

        {/* Меню для больших экранов */}
        <nav className="relative hidden max-w-full font-normal uppercase md:flex md:items-center md:justify-center">
          <ul className="flex space-x-10">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-500 transition-normal duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:after:text-gray-200 ${pathname === '/' ? 'translate-y-full' : ''}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/contacts"
                className={`" relative inline-block py-[0.1em] text-gray-500 transition-normal duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:after:text-gray-200 ${pathname.startsWith('/contacts') ? 'translate-y-full' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/projects/photoshop"
                className={`" relative inline-block py-[0.1em] text-gray-500 transition-normal duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:after:text-gray-200 ${pathname.startsWith('/projects') ? 'translate-y-full' : ' '}`}
                data-hover="Projects"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Выпадающее меню для маленьких экранов */}
      {/* mode="wait" */}
      {/* <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ duration: 0.03, ease: 'easeInOut' }}
            className={`absolute top-17 left-0 flex h-screen w-full justify-center bg-gray-300 from-gray-900 to-gray-500 to-100% dark:bg-linear-150 dark:duration-500 ${outfit.className} overflow-hidden antialiased md:hidden`}
            aria-modal="true"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.09,
                    ease: 'easeInOut',
                    staggerChildren: 0.03,
                    // delayChildren: 0.03, //задержкка
                  },
                },
              }}
              className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent mt-2 flex h-full w-full flex-col items-start space-y-5 overflow-y-auto overscroll-contain pr-6 pl-6 sm:max-h-[calc(100vh-4rem)] sm:py-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#9CA3AF transparent',
              }}
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="relative flex w-full flex-shrink-0 py-2 text-left text-2xl text-gray-800 dark:text-gray-200"
                >
                  <Link
                    href={item.href}
                    onClick={() => setTimeout(() => setIsOpen(false), 400)}
                    // onClick={() => setIsOpen(false)}
                    className="flex w-full touch-manipulation items-center"
                  >
                    {/* {item.icon && (
                <Image src={item.icon} alt="Icon" width={24} height={24} className="mr-2" />
              )} */}
      {/* {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence> */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.03, ease: 'easeInOut' }}
            className={`absolute flex h-screen w-full justify-center bg-gray-300 from-gray-950 to-gray-600 to-100% select-none dark:bg-linear-100 dark:duration-500 ${outfit.className} antialiased md:hidden`}
            aria-modal="true"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    ease: 'easeInOut',
                    staggerChildren: 0.05,
                    // delayChildren: 0.3, //задержкка
                  },
                },
              }}
              className="scroll-touch-smooth mt-6 flex max-h-[calc(100vh-7rem)] w-full flex-col items-start space-y-5 overflow-y-scroll overscroll-contain pr-6 pl-6"
            >
              {/* <Cosmos />
              <BackgroundDots /> */}
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="relative flex w-full border-b border-gray-400/40 pb-5 text-left text-2xl text-gray-800 dark:text-gray-200"
                >
                  <Link
                    href={item.href}
                    onClick={() => setTimeout(() => setIsOpen(false), 400)}
                    // onClick={() => setIsOpen(false)}
                    className="flex items-center"
                  >
                    {/* {item.icon && (
                      <Image src={item.icon} alt="Icon" width={24} height={24} className="mr-2" />
                    )} */}
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="botton-0 fixed z-50 h-1 w-full bg-gray-300 inset-shadow-sm/60"></div>
    </header>
  );
}

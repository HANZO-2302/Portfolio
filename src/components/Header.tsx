'use client';

import { JetBrains_Mono, Outfit } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const menuItems = [
  { href: '/', text: 'Home', icon: '/home.svg' },
  // { href: '/contacts', text: 'Contacts', icon: '/contacts.svg' },
  { href: '/projects/figma', text: 'Figma', icon: '/figma.svg' },
  { href: '/projects/photoshop', text: 'Photoshop', icon: '/photoshop.svg' },
  { href: '/projects/after', text: 'After Effects', icon: '/after_effects.svg' },
  { href: '/projects/illustrator', text: 'Tagris website', icon: '/illustrator.svg' },
  { href: '/projects/lightroom', text: 'RobotTech website', icon: '/lightroom.svg' },
  // { href: '/projects/topaz', text: 'Topaz Gigapixel AI', icon: '/topaz.png' },
  // { href: '/projects/premiere', text: 'Premiere Pro', icon: '/premiere.svg' },
];

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header
      className={`fixed z-50 w-full bg-zinc-400 transition-colors duration-500 dark:bg-zinc-600 dark:duration-500 ${jetBrainsMono.className} antialiased`}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-2">
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
          className="relative flex flex-col rounded-lg bg-zinc-300/30 p-2 ring-2 ring-gray-700 transition-colors duration-500 dark:bg-zinc-700 dark:text-gray-200 dark:shadow-xs/50 dark:ring-blue-400 dark:duration-500"
        >
          <h1 className="text-[1.2rem] leading-4.5 font-normal text-gray-950 transition-all duration-500 dark:text-gray-200 dark:duration-500">
            <Link href="/">Portfolio</Link>
          </h1>
          {/* <div className="h-[1px] w-20 mx-auto rounded-lg bg-blue-400" /> */}

          <p className="text-xs font-normal text-gray-950 transition-colors duration-500 dark:text-gray-200 dark:duration-500">
            <Link href="/">Igor Meniailov</Link>
          </p>
        </motion.div>

        <div className="flex items-center justify-center md:hidden">
          <ThemeToggle />
        </div>
        {/* Кнопка меню для мобильных устройств  */}
        <button
          className="relative block focus:outline-none md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <div
            className={`relative top-2 flex text-gray-950 transition-all duration-300 dark:text-gray-200 ${
              isOpen ? 'translate-y-5 scale-0 opacity-0' : 'translate-y-0 scale-100 opacity-100'
            }`}
          >
            Menu
            <span className="absolute bottom-0 left-0 h-0.5 w-10 bg-gray-800 transition-colors duration-500 dark:bg-blue-400"></span>
          </div>
          <div
            className={`relative right-2 bottom-4 flex text-gray-950 transition-all duration-300 dark:text-gray-200 ${
              isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-5 scale-0 opacity-0'
            }`}
          >
            Close
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transition-colors duration-500 dark:bg-blue-400"></span>
          </div>
        </button>

        {/* Меню для больших экранов */}
        <nav className="relative hidden max-w-full font-normal uppercase md:flex md:items-center md:justify-center">
          <ul className="flex space-x-12">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`relative inline-block py-[0.1em] text-gray-700 transition-all duration-500 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-gray-900 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:before:bg-blue-400 dark:after:text-gray-50 ${pathname === '/' ? 'translate-y-full' : ''}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            {/* <li className="overflow-hidden">
              <Link
                href="/contacts"
                className={`" relative inline-block py-[0.1em] text-gray-700 transition-all duration-500 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-gray-900 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:before:bg-blue-400 dark:after:text-gray-50 ${pathname.startsWith('/contacts') ? 'translate-y-full' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li> */}
            <li className="overflow-hidden">
              <Link
                href="/projects/photoshop"
                className={`" relative inline-block py-[0.1em] text-gray-700 transition-all duration-500 before:absolute before:bottom-full before:h-[2px] before:w-full before:rounded-sm before:bg-gray-900 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-900 after:content-[attr(data-hover)] hover:translate-y-full dark:text-gray-400 dark:duration-500 dark:before:bg-blue-400 dark:after:text-gray-50 ${pathname.startsWith('/projects') ? 'translate-y-full' : ' '}`}
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
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`absolute flex h-screen w-full justify-center bg-zinc-400 select-none dark:bg-zinc-600 ${outfit.className} antialiased md:hidden`}
            role="dialog"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                    staggerChildren: 0.05, //задержка между анимацией детей
                    delayChildren: 0.2, //задержкка
                  },
                },
              }}
              className="mt-2 flex max-h-[calc(100vh-7rem)] w-full flex-col items-center overflow-y-auto overscroll-contain pr-6 pl-6"
            >
              {/* <Cosmos />
              <BackgroundDots /> */}
              {menuItems.map(item => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="relative flex w-full border-b border-zinc-500 text-center text-2xl text-gray-800 dark:text-gray-200"
                >
                  <Link
                    href={item.href}
                    // onClick={() => setIsOpen(false)}
                    onClick={() => setTimeout(() => setIsOpen(false), 300)}
                    className="flex h-20 w-full items-center justify-start"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="fixed z-50 h-1 w-full bg-gray-300 inset-shadow-sm/60"></div>
    </header>
  );
}

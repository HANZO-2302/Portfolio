'use client';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const menuItems = [
  { href: '/', text: 'Home', icon: '/home.svg' },
  { href: '/contacts', text: 'Contacts', icon: '/contacts.svg' },
  { href: '/projects/photoshop', text: 'Photoshop', icon: '/photoshop.svg' },
  { href: '/projects/illustrator', text: 'illustrator', icon: '/illustrator.svg' },
  { href: '/projects/lightroom', text: 'lightroom', icon: '/lightroom.svg' },
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
    <header className={`fixed z-50 w-full bg-gray-800 ${jetBrainsMono.className} antialiased`}>
      <div className="mx-auto flex max-w-xl justify-between px-4 py-2">
        {/* Логотип */}
        <div className="relative flex w-full items-center">
          <Image
            src="/logo_mob.jpg"
            alt="logo Icon"
            quality={20}
            // fill={true} // {true} | {false}
            width={50}
            height={50}
            priority={true}
            // loading="eager" // {lazy} | {eager}
            className="aspect-square overflow-hidden rounded-full border-2 border-orange-500 object-cover object-[50%_10%]"
          />

          <div className="relative left-2 flex flex-col transition-all duration-300 hover:left-3">
            <h1 className="text-lg leading-tight font-normal text-gray-200 transition-all duration-300">
              <Link href="/">Hanzo</Link>
            </h1>
            <div className="h-[2px] w-full rounded-lg bg-orange-500" />

            <h1 className="text-lg leading-tight font-normal text-gray-200 transition-all duration-300">
              <Link href="/">Digital</Link>
            </h1>
          </div>
        </div>

        {/* Кнопка меню для мобильных устройств ----------------------------------------------------------------------- */}
        <button
          ref={buttonRef}
          className="relative flex w-full items-center justify-end focus:outline-hidden sm:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <div
            className={`absolute right-3 flex text-gray-100 transition-all duration-300 ${
              isOpen ? 'translate-y-full scale-90 opacity-0' : 'scle-100 translate-y-0 opacity-100'
            }`}
          >
            Menu
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"></span>
          </div>
          <div
            className={`absolute right-2 flex text-gray-100 transition-all duration-300 ${
              isOpen ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-90 opacity-0'
            }`}
          >
            Close
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"></span>
          </div>
        </button>

        {/* Меню для больших экранов -----------------------------------------------------------------------*/}
        <nav className="font-raleway mx-auto hidden font-normal uppercase sm:flex sm:items-center sm:space-x-10">
          <ul className="flex space-x-10">
            <li className="overflow-hidden">
              <Link
                prefetch={true}
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-full ${pathname === '/' ? 'translate-y-full' : ''}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                prefetch={true}
                href="/contacts"
                className={`" relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-full ${pathname.startsWith('/contacts') ? 'translate-y-full' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                prefetch={true}
                href="/projects"
                className={`" relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-full ${pathname.startsWith('/projects') ? 'translate-y-full' : ' '}`}
                data-hover="projects"
              >
                projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Выпадающее меню для маленьких экранов----------------------------------------------------------------------- */}

      {/* mode="wait" */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.01, ease: 'easeInOut' }}
            className={`absolute right-0 flex h-screen w-full justify-center rounded-bl-md bg-gray-700 ${outfit.className} text-gray-50 antialiased text-shadow-sm/30 sm:hidden`}
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
                    staggerChildren: 0.03,
                    // delayChildren: 0.01, //задержкка
                  },
                },
              }}
              className="mt-4 flex w-full flex-col items-start space-y-5 pl-4 text-left text-2xl text-gray-200"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  className="relative left-4 flex w-full text-shadow-md/95"
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

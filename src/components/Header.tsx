'use client';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const menuItems = [
  { href: '/', text: 'Home' },
  { href: '/contacts', text: 'Contacts' },
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Закрытие меню при скролле
  // useEffect(() => {
  //     const handleScroll = () => {
  //         if (isOpen) {
  //             setIsOpen(false);
  //         }
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  // }, [isOpen]);

  // Закрытие меню при клике вне его области
  // useEffect(() => {
  //     const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //         setIsOpen(false);
  //     }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          className="flex w-full items-center justify-end focus:outline-hidden sm:hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="relative">
            <FiMenu
              className={`absolute top-[-16px] left-[calc(50%-38px)] size-8 text-gray-100 transition-all duration-300 ${
                isOpen ? 'mt-6 scale-0 opacity-0' : 'opacity-100'
              }`}
            />
            <FaTimes
              className={`absolute top-[-14px] left-[calc(50%-36px)] size-7 text-gray-100 transition-all duration-300 ${
                isOpen ? 'rotate-90 opacity-100' : 'opacity-0'
              }`}
            />
            <div
              className={`absolute top-[-20px] left-[calc(50%-46px)] h-10 w-12 rounded-lg border border-gray-100 transition-all duration-300 ${
                isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
              }`}
            ></div>
            <div
              className={`absolute top-[-24px] left-[calc(50%-46px)] h-12 w-12 rounded-full border border-gray-100 transition-all duration-300 ${
                isOpen ? 'opacity-100' : 'scale-0 opacity-0'
              }`}
            ></div>
          </div>
        </button>

        {/* Меню для больших экранов -----------------------------------------------------------------------*/}
        <nav className="font-raleway mx-auto hidden font-normal uppercase sm:flex sm:items-center sm:space-x-10">
          <ul className="flex space-x-10">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`" relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-full ${pathname === '/' ? 'translate-y-full' : ''}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/contacts"
                className={`" relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:h-[2px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-full ${pathname.startsWith('/contacts') ? 'translate-y-full' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
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
            initial={{ opacity: '0%' }}
            animate={{ opacity: '100%' }}
            exit={{ opacity: '0%' }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className={`absolute right-0 flex h-screen w-full justify-center rounded-bl-md bg-gray-700 ${outfit.className} text-gray-50 antialiased text-shadow-sm/30 sm:hidden`}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: '0%' },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    // delayChildren: 0.5, задержкка
                  },
                },
              }}
              className="mt-4 flex w-full flex-col items-start space-y-5 pl-4 text-left text-2xl text-gray-200"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="w-full drop-shadow-md"
                >
                  <Link
                    href={item.href}
                    onClick={() => setTimeout(() => setIsOpen(false), 400)}
                    // onClick={() => setIsOpen(false)}
                    prefetch={true}
                    className="flex items-center"
                  >
                    {item.icon && (
                      <Image src={item.icon} alt="Icon" width={24} height={24} className="mr-2" />
                    )}
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* <nav
        ref={menuRef}
        className={`absolute top-full flex h-screen w-full justify-center rounded-bl-md bg-gray-700 ${outfit.className} text-gray-50 antialiased transition-opacity duration-300 ease-in-out text-shadow-sm/30 ${isOpen ? 'opacity-[100%]' : 'opacity-[0%]'} sm:hidden`}
      >
        <ul className="mt-4 flex w-full flex-col items-start space-y-5 pl-4 text-left text-2xl text-gray-200 duration-300 ease-in-out">
          <li className="w-full">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link href="/contacts" onClick={() => setIsOpen(false)} className="flex items-center">
              Contacts
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
          <li className="w-full drop-shadow-md">
            <Link
              href="/projects/photoshop"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="mr-2" />
              Photoshop
            </Link>
          </li>
        </ul>
      </nav> */}
      <div className="botton-0 fixed z-50 h-1 w-full bg-gray-300 inset-shadow-sm/60"></div>
    </header>
  );
};

export { Header };

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

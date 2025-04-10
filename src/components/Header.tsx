'use client';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
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
    <header className={`fixed w-full bg-gray-800 z-50 ${jetBrainsMono.className} antialiased`}>
      <div className="flex justify-between py-2 px-4 max-w-xl mx-auto">
        {/* Логотип */}
        <div className="flex items-center w-full ">
          <Image
            src="/logo.jpg"
            alt="logo Icon"
            width={50}
            height={50}
            className=" object-cover object-[50%_10%] rounded-full aspect-square border-2 border-orange-500  overflow-hidden"
          />

          <div className="flex flex-col relative left-2 transition-all duration-300 hover:left-3 ">
            <h1 className="text-lg font-normal text-gray-200  leading-tight transition-all duration-300     ">
              <Link href="/">Hanzo</Link>
            </h1>
            <div className="w-full h-[2px]  bg-orange-500 rounded-lg " />

            <h1 className="text-lg font-normal text-gray-200 leading-tight  transition-all duration-300 ">
              <Link href="/">Digital</Link>
            </h1>
          </div>
        </div>

        {/* Кнопка меню для мобильных устройств ----------------------------------------------------------------------- */}
        <button
          className="flex justify-end items-center w-full  sm:hidden  focus:outline-hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="relative">
            <FiMenu
              className={`absolute top-[-16px] left-[calc(50%-38px)] size-8 transition-all duration-300 text-gray-100 ${
                isOpen ? 'opacity-0 mt-6 scale-0 ' : ' opacity-100  '
              }`}
            />
            <FaTimes
              className={`absolute top-[-14px] left-[calc(50%-36px)] size-7 transition-all duration-300 text-gray-100  ${
                isOpen ? 'opacity-100  rotate-90' : 'opacity-0'
              }`}
            />
            <div
              className={`absolute top-[-20px] left-[calc(50%-46px)] w-12 h-10 rounded-lg  border border-gray-100 transition-all duration-300  ${
                isOpen ? 'opacity-0 scale-0   ' : 'opacity-100 scale-100 '
              }`}
            ></div>
            <div
              className={`absolute top-[-24px] left-[calc(50%-46px)] w-12 h-12 rounded-full  border border-gray-100 transition-all duration-300  ${
                isOpen ? 'opacity-100     ' : 'opacity-0 scale-0 '
              }`}
            ></div>
          </div>
        </button>

        {/* Меню для больших экранов -----------------------------------------------------------------------*/}
        <nav className="hidden sm:flex sm:items-center sm:space-x-10 mx-auto font-raleway uppercase font-normal ">
          <ul className="flex space-x-10 ">
            <li className="overflow-hidden">
              <Link
                href="/"
                className={`relative inline-block py-[0.1em] text-gray-400  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[2px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-full "
                    ${pathname === '/' ? 'translate-y-full ' : ''}`}
                data-hover="Home"
              >
                Home
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/contacts"
                className={`relative inline-block py-[0.1em] text-gray-400  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[2px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-full "
                       ${pathname.startsWith('/contacts') ? 'translate-y-full ' : ' '}`}
                data-hover="Contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link
                href="/projects"
                className={`relative inline-block py-[0.1em] text-gray-400 transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[2px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-full "                           
                                ${pathname.startsWith('/projects') ? 'translate-y-full ' : ' '}`}
                data-hover="projects"
              >
                projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Выпадающее меню для маленьких экранов----------------------------------------------------------------------- */}
      <nav
        ref={menuRef}
        className={`absolute flex  justify-center bottom-10 h-screen w-full bg-gray-700 rounded-bl-md ${outfit.className} antialiased  text-gray-50 text-shadow-sm/30 transition-transform duration-500 ease-in-out  
                ${isOpen ? 'translate-y-[100%]  ' : ' translate-y-[0%] '} sm:hidden`}
      >
        <ul className="flex flex-col items-start pl-4 mt-4 space-y-5 text-left text-2xl text-gray-200  duration-300 ease-in-out w-full ">
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
      </nav>
      <div className="fixed botton-0 h-1  w-full bg-gray-300  inset-shadow-sm/60 z-50"></div>
    </header>
  );
};

export { Header };
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

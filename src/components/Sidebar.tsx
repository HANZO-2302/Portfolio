'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Animate from './AnimatePage';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[66px] left-0 z-30 hidden min-h-screen w-48 overflow-y-auto bg-gray-400 text-left text-sm md:block dark:bg-gray-700 dark:text-shadow-sm/25">
      <Animate />
      <div
        className={`relative left-0 mt-3 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/photoshop')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image src="/photoshop.svg" alt="Icon" width={24} height={24} className="h-full w-full" />
        </div>
        <Link
          href="/projects/photoshop"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/photoshop') ? 'translate-y-9' : ' '
          }`}
          data-hover="Photoshop"
        >
          Photoshop
        </Link>
      </div>
      <div
        className={`" relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/illustrator')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image
            src="/illustrator.svg"
            alt="Icon"
            width={24}
            height={24}
            className="h-full w-full"
          />
        </div>
        <Link
          href="/projects/illustrator"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/illustrator') ? 'translate-y-9 text-gray-50' : ' '
          }`}
          data-hover="illustrator"
        >
          illustrator
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/lightroom')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image src="/lightroom.svg" alt="Icon" width={24} height={24} className="h-full w-full" />
        </div>
        <Link
          href="/projects/lightroom"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/lightroom') ? 'translate-y-9 text-gray-50' : ' '
          }`}
          data-hover="lightroom"
        >
          lightroom
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/figma')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image src="/Figma.svg" alt="Icon" width={24} height={24} className="h-full w-full" />
        </div>
        <Link
          href="/projects/figma"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/figma') ? 'translate-y-9 text-gray-50' : ' '
          }`}
          data-hover="Figma"
        >
          Figma
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/topaz')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ''
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image src="/topaz.svg" alt="Icon" width={24} height={24} className="h-full w-full" />
        </div>
        <Link
          href="/projects/topaz"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/topaz') ? 'translate-y-9 text-gray-50' : ''
          }`}
          data-hover="Topaz Gigapixel AI"
        >
          Topaz Gigapixel AI
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/after')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          {/* Добавляем контейнер для Image */}
          <Image
            src="/after_effects.svg"
            alt="After Effects Icon"
            width={24}
            height={24}
            className="h-full w-full" // Убираем relative left-3 из Image
          />
        </div>
        <Link
          href="/projects/after"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/after') ? 'translate-y-9 text-gray-50' : ' '
          }`}
          data-hover="After Effects"
        >
          After Effects
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full items-center justify-start overflow-hidden from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:text-shadow-md/30 dark:from-gray-700 dark:to-gray-800 dark:hover:bg-gradient-to-r ${
          pathname.startsWith('/projects/premiere')
            ? 'bg-gradient-to-r from-gray-600 to-gray-400 text-shadow-md/30'
            : ' '
        }`}
      >
        <div className="relative left-3 h-6 w-6">
          <Image src="/premiere.svg" alt="Icon" width={24} height={24} className="h-full w-full" />
        </div>
        <Link
          href="/projects/premiere"
          className={`relative left-2 inline-block w-40 p-2 text-gray-900 transition-all duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:w-40 after:p-2 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-9 dark:text-gray-300/90 ${
            pathname.startsWith('/projects/premiere') ? 'translate-y-9 text-gray-50' : ' '
          }`}
          data-hover="Premiere Pro"
        >
          Premiere Pro
        </Link>
      </div>
    </div>
  );
}

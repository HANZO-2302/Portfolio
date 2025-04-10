'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-[66px] min-h-screen w-48 overflow-y-auto z-40 hidden sm:block bg-gray-700  text-left text-sm text-shadow-sm/30">
      <div
        className={`flex w-full relative left-0 mt-3 justify-start  overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900  
            ${
              pathname.startsWith('/projects/photoshop')
                ? 'bg-linear-to-r from-gray-700 to-gray-900  '
                : ' '
            }`}
      >
        <Image
          src="/photoshop.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3  drop-shadow-md/20"
        />
        <Link
          href="/projects/photoshop"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/photoshop') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="Photoshop"
        >
          Photoshop
        </Link>
      </div>
      <div
        className={`flex w-full relative left-0 mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900  "
          ${
            pathname.startsWith('/projects/illustrator')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/illustrator.svg"
          alt="Icon"
          width={24}
          height={24}
          className=" relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/illustrator"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7 
            ${pathname.startsWith('/projects/illustrator') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="illustrator"
        >
          illustrator
        </Link>
      </div>
      <div
        className={`flex w-full relative left-0 mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900
          ${
            pathname.startsWith('/projects/lightroom')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/lightroom.svg"
          alt="Icon"
          width={24}
          height={24}
          className=" relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/lightroom"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/lightroom') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="lightroom"
        >
          lightroom
        </Link>
      </div>
      <div
        className={`flex w-full relative left-0 mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900
          ${
            pathname.startsWith('/projects/figma')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/Figma.svg"
          alt="Icon"
          width={24}
          height={24}
          className=" relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/figma"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/figma') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="Figma"
        >
          Figma
        </Link>
      </div>
      <div
        className={`flex w-full relative left-[1px] mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900 
          ${
            pathname.startsWith('/projects/topaz')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/topaz.png"
          alt="Icon"
          width={34}
          height={34}
          className=" w-[26px] h-[26px] relative left-[10px] mt-1 drop-shadow-md/20"
        />
        <Link
          href="/projects/topaz"
          className={`relative inline-block left-4  py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/topaz') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="Topaz Gigapixel AI"
        >
          Topaz Gigapixel AI
        </Link>
      </div>
      <div
        className={`flex w-full relative left-0 mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900
          ${
            pathname.startsWith('/projects/after')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/after_effects.svg"
          alt="Icon"
          width={24}
          height={24}
          className=" relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/after"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/after') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="After Effects"
        >
          After Effects
        </Link>
      </div>
      <div
        className={`flex w-full relative left-0 mt-2 justify-start overflow-hidden hover:bg-linear-to-r from-gray-700 to-gray-900 
          ${
            pathname.startsWith('/projects/premiere')
              ? ' bg-linear-to-r from-gray-700 to-gray-900'
              : ' '
          }`}
      >
        <Image
          src="/premiere.svg"
          alt="Icon"
          width={24}
          height={24}
          className=" relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/premiere"
          className={`relative inline-block left-4 py-[0.6em] text-gray-300/90  transition-transform duration-300 before:absolute before:bottom-full before:w-full before:h-[0px] before:bg-orange-500  after:absolute after:bottom-full after:left-0 after:content-[attr(data-hover)] after:text-gray-50 after:whitespace-nowrap hover:translate-y-7
            ${pathname.startsWith('/projects/premiere') ? 'text-gray-50 translate-y-7' : ' '}`}
          data-hover="Premiere Pro"
        >
          Premiere Pro
        </Link>
      </div>
    </div>
  );
}

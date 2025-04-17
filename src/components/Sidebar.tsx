'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-[66px] left-0 z-40 hidden min-h-screen w-48 overflow-y-auto bg-gray-700 text-left text-sm text-shadow-sm/30 sm:block">
      <div
        className={`relative left-0 mt-3 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/photoshop')
            ? 'bg-linear-to-r from-gray-700 to-gray-900'
            : ' '
        }`}
      >
        <Image
          src="/photoshop.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/photoshop"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/photoshop') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="Photoshop"
        >
          Photoshop
        </Link>
      </div>
      <div
        className={`" relative left-0 mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/illustrator')
            ? 'bg-linear-to-r from-gray-700 to-gray-900'
            : ' '
        }`}
      >
        <Image
          src="/illustrator.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/illustrator"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/illustrator') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="illustrator"
        >
          illustrator
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/lightroom')
            ? 'bg-linear-to-r from-gray-700 to-gray-900'
            : ' '
        }`}
      >
        <Image
          src="/lightroom.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/lightroom"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/lightroom') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="lightroom"
        >
          lightroom
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/figma') ? 'bg-linear-to-r from-gray-700 to-gray-900' : ' '
        }`}
      >
        <Image
          src="/Figma.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/figma"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/figma') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="Figma"
        >
          Figma
        </Link>
      </div>
      <div
        className={`relative left-[1px] mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/topaz') ? 'bg-linear-to-r from-gray-700 to-gray-900' : ' '
        }`}
      >
        <Image
          src="/topaz.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/topaz"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/topaz') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="Topaz Gigapixel AI"
        >
          Topaz Gigapixel AI
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/after') ? 'bg-linear-to-r from-gray-700 to-gray-900' : ' '
        }`}
      >
        <Image
          src="/after_effects.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/after"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/after') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="After Effects"
        >
          After Effects
        </Link>
      </div>
      <div
        className={`relative left-0 mt-2 flex w-full justify-start overflow-hidden from-gray-700 to-gray-900 hover:bg-linear-to-r ${
          pathname.startsWith('/projects/premiere')
            ? 'bg-linear-to-r from-gray-700 to-gray-900'
            : ' '
        }`}
      >
        <Image
          src="/premiere.svg"
          alt="Icon"
          width={24}
          height={24}
          className="relative left-3 drop-shadow-md/20"
        />
        <Link
          href="/projects/premiere"
          className={`relative left-4 inline-block py-[0.6em] text-gray-300/90 transition-transform duration-300 before:absolute before:bottom-full before:h-[0px] before:w-full before:bg-orange-500 after:absolute after:bottom-full after:left-0 after:whitespace-nowrap after:text-gray-50 after:content-[attr(data-hover)] hover:translate-y-7 ${pathname.startsWith('/projects/premiere') ? 'translate-y-7 text-gray-50' : ' '}`}
          data-hover="Premiere Pro"
        >
          Premiere Pro
        </Link>
      </div>
    </div>
  );
}

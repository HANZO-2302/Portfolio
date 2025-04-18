'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type DropdownProps = Record<string, never>;

const Dropdown: React.FC<DropdownProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false); // Для управления отрисовкой
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (): void => {
    if (!isOpen) {
      setIsMounted(true); // Включаем рендеринг
      setTimeout(() => setIsOpen(true), 10); // Даём Tailwind "увидеть" начальное состояние
    } else {
      setIsOpen(false);
      setTimeout(() => setIsMounted(false), 300);
    }
  };

  const closeDropdown = (): void => {
    setIsOpen(false);
    setTimeout(() => setIsMounted(false), 300); // Ждём анимацию перед удалением
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleScroll = (): void => closeDropdown();

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center" ref={dropdownRef}>
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          type="button"
          className="mt-[-8px] flex items-center rounded-md font-normal text-amber-50 uppercase"
        >
          Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative -right-1 mt-1 size-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isMounted && (
          <div
            className={`absolute left-0 z-10 mt-10 w-48 transform divide-y divide-gray-200 rounded-lg border border-gray-100 bg-gray-300 text-left text-sm drop-shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="p-1">
              <Link href="/photoshop" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/photoshop.svg" alt="Icon" width={24} height={24} />
                  Photoshop
                </a>
              </Link>
              <Link href="/illustrator" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/illustrator.svg" alt="Icon" width={24} height={24} />
                  Illustrator
                </a>
              </Link>
              <Link href="/lightroom" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/lightroom.svg" alt="Icon" width={24} height={24} />
                  Lightroom
                </a>
              </Link>
              <Link href="/figma" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/figma.svg" alt="Icon" width={24} height={24} />
                  Figma
                </a>
              </Link>
              <Link href="/topaz" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-[10px] py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/topaz.png" alt="Icon" width={27} height={27} />
                  Topaz Gigapixel AI
                </a>
              </Link>
            </div>
            <div className="p-1">
              <Link href="/after-effects" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/after_effects.svg" alt="Icon" width={24} height={24} />
                  After Effects
                </a>
              </Link>
              <Link href="/premiere" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/premiere.svg" alt="Icon" width={24} height={24} />
                  Premiere Pro
                </a>
              </Link>
            </div>
            <div className="p-1">
              <Link href="/logout" legacyBehavior>
                <a
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <Image src="/log_out.svg" alt="Icon" width={24} height={24} />
                  Log out
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

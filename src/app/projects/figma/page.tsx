// 'use client';
import Image from 'next/image';
import Animate from '@/components/AnimatePage';
import Photo from '@/components/Photo/Photo';
import PhotoBeforeAfter from '@/components/PhotoBeforeAfter';
import PhotoBeforeAfter2 from '@/components/PhotoPhotoshop';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';
import PhotoFigma from '@/components/PhotoFigma';

export default function Figma() {
  return (
    <div className="mt-20 md:ml-48">
      <div className="flex">
        {/* фиксируем блок под иконку */}
        <h1 className="mx-auto flex items-center p-[30px] text-4xl leading-none font-semibold lg:text-6xl">
          {/* <span className="relative mr-4 inline-block h-[2em] w-[3em] align-baseline">
            <Image src="/adobe-logo.svg" alt="Icon" fill className="object-contain" />
          </span> */}
          Figma
        </h1>
      </div>

      <PhotoFigma />
      <Animate />
    </div>
  );
}

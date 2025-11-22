// 'use client';

import Animate from '@/components/AnimatePage';
import Photo from '@/components/Photo/Photo';
import PhotoBeforeAfter2 from '@/components/PhotoPhotoshop';
import Image from 'next/image';

export default function After() {
  return (
    <div className="mt-20 md:ml-48">
      <div className="flex">
        {/* фиксируем блок под иконку */}
        <h1 className="mx-auto flex items-center text-4xl leading-none font-semibold lg:text-6xl">
          <span className="relative mr-4 inline-block h-[2em] w-[3em] align-baseline">
            <Image src="/adobe-logo.svg" alt="Icon" fill className="object-contain" />
          </span>
          After Effects
        </h1>
      </div>
      <PhotoBeforeAfter2 />
      <Animate />
    </div>
  );
}

// 'use client';

import Animate from '@/components/AnimatePage';
import PhotoBeforAfter from '@/components/PhotoBeforAfter';

export default function Topaz() {
  return (
    <div className="mt-20 md:ml-48">
      <div className="flex">
        {/* фиксируем блок под иконку */}
        <h1 className="m-7.5 mx-auto flex items-center text-4xl leading-none font-semibold lg:text-6xl">
          {/* <span className="relative mr-4 inline-block h-[2em] w-[3em] align-baseline"> */}
          {/* <Image src="/adobe-logo.svg" alt="Icon" fill className="object-contain" /> */}
          {/* </span> */}
          Topaz Gigapixel AI
        </h1>
      </div>
      <PhotoBeforAfter />
      <Animate />
    </div>
  );
}

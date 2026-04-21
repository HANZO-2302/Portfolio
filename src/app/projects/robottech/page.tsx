import Animate from '@/components/AnimatePage';
import PhotoBeforeAfter2 from '@/components/PhotoPhotoshop';
import Image from 'next/image';

export default function RobotTech() {
  return (
    <div className="mt-30 md:ml-48">
      <div className="flex  items-center justify-center">
        {/* фиксируем блок под иконку */}
        <h1 className="mx-auto flex items-center justify-center text-4xl leading-none font-semibold lg:text-6xl">
          {/* <span className="relative mr-4 inline-block h-[2em] w-[3em] align-baseline">
            <Image src="/adobe-logo.svg" alt="Icon" fill className="object-contain" />
          </span> */}
          Идет разработка....
        </h1>
      </div>
      <Animate />
      {/* <PhotoBeforeAfter2 /> */}
    </div>
  );
}

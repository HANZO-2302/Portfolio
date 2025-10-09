import Animate from '@/components/AnimatePage';
import Photo from '@/components/Photo/Photo';
import Image from 'next/image';

export default function Illustrator() {
  return (
    <div className="mt-20 md:ml-48">
      <div className="flex">
        {/* фиксируем блок под иконку */}
        <h1 className="mx-auto flex items-center text-4xl leading-none font-semibold lg:text-6xl">
          <span className="relative mr-4 inline-block h-[2em] w-[3em] align-baseline">
            <Image src="/adobe-logo.svg" alt="Icon" fill className="object-contain" />
          </span>
          Illustrator
        </h1>
      </div>
      <Photo />
      <Animate />
    </div>
  );
}

// 'use client';

import Animate from '@/components/AnimatePage';
import Photo from '@/components/Photo/Photo';
import ZoomGallery from '@/components/ZoomGallery/ExpandingCardsWithModal';

export default function Illustrator() {
  return (
    <div className="md:ml-[194px]">
      <Photo />
      <Animate />
    </div>
  );
}

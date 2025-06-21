'use client';
import Animate from '@/components/AnimatePage';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import ZoomGallery from '@/components/ZoomGallery/ExpandingCardsWithModal';

export default function Photoshop() {
  return (
    <div className="md:ml-[194px]">
      <BeforeAfterGallery />
      <Animate />
    </div>
  );
}

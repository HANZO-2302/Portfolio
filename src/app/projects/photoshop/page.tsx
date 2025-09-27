'use client';
import Animate from '@/components/AnimatePage';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import PhotoBeforAfter from '@/components/PhotoBeforAfter';
import ZoomGallery from '@/components/ZoomGallery/ExpandingCardsWithModal';

export default function Photoshop() {
  return (
    <div className="md:ml-[194px]">
      <PhotoBeforAfter />
      <Animate />
    </div>
  );
}

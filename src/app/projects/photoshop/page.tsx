'use client';

import Animate from '@/components/AnimatePresence';
import PhotoCarousel from '@/components/PhotoCarousel/PhotoCarousel';

const Photoshop: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow items-center justify-center">
        <PhotoCarousel />

        <Animate />
      </main>
    </div>
  );
};
export default Photoshop;

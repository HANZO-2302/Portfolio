'use client';
import Image from 'next/image';
import Animate from '@/components/AnimatePresence';
import PhotoCarousel from '@/components/PhotoCarousel';

const Photoshop: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex flex-grow items-center justify-center text-gray-100">
        <PhotoCarousel />

        <Animate />
      </main>
    </div>
  );
};
export default Photoshop;

'use client';
import Animate from '@/components/AnimatePresence';

export default function Photoshop() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex grow items-center justify-center text-shadow-md/25">
        <Animate />
        <h1 className="text-gray-50">Projects Photoshop</h1>
        <span className="relative flex size-9">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
      </main>
    </div>
  );
}

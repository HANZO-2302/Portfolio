'use client';

import Animate from '@/components/AnimatePresence';

export default function Figma() {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-900">
      <main className="grow flex items-center justify-center  ">
        <Animate />
        <h1 className=" text-gray-100">Projects Figma</h1>
      </main>
    </div>
  );
}

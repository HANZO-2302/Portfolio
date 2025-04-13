'use client';

import Animate from '@/components/AnimatePresence';

export default function Figma() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex flex-grow items-center justify-center text-gray-100">
        <h1>Projects Figma</h1>
        <Animate />
      </main>
    </div>
  );
}

'use client';
import Animate from '@/components/AnimatePresence';
import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function Contacts() {
  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-900 relative ${outfit.className} antialiased`}
    >
      <main className="grow flex items-center justify-center relative z-0">
        <h1 className="text-gray-100 ">Contacts</h1>
        <Animate />

        <BackgroundDots />
      </main>
    </div>
  );
}

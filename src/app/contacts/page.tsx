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
      className={`relative flex min-h-screen flex-col bg-gray-900 ${outfit.className} antialiased`}
    >
      <main className="relative z-0 flex grow items-center justify-center">
        <h1 className="text-gray-100">Contacts</h1>
        <Animate />

        <BackgroundDots />
      </main>
    </div>
  );
}

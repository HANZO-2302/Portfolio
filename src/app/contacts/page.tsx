'use client';
import Animate from '@/components/AnimatePresence';
// import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function Contacts() {
  return (
    <div className={`flex min-h-screen flex-col ${outfit.className} antialiased`}>
      <main className="flex flex-grow items-center justify-center">
        <h1>Contacts</h1>
        <Animate />
        {/* <BackgroundDots /> */}
      </main>
    </div>
  );
}

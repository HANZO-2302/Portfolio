// 'use client';
import Animate from '@/components/AnimatePage';
import Footer from '@/components/Footer';
import PhotoBeforAfter from '@/components/PhotoBeforeAfter';
import Silk from '@/components/Silk';
import SubmitButton from '@/components/SubmitButton/SubmitButton';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function Contacts() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mt-18 grow overflow-x-hidden border">
        <PhotoBeforAfter />
      </main>

      <Animate />
      <Footer />
    </div>
    // <div className="flex min-h-screen flex-col">
    //   <main className="grow overflow-x-hidden bg-amber-500"></main>
    //   <PhotoBeforAfter />
    //   <Animate />
    //   <Footer />
    // </div>
  );
}

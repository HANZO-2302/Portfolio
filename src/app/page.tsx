'use client';
// import Image from "next/image";
// import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
import Animate from '@/components/AnimatePresence';
import SubmitButton from '@/components/folderSubmitButton/SubmitButton';
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  // const pathname = usePathname();
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <main className="flex flex-grow items-center justify-center">
        {/* <BackgroundDots /> */}
        <SubmitButton />
        <Animate />
      </main>
    </div>
  );
}

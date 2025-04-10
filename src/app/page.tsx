'use client';
// import Image from "next/image";
import Animate from '@/components/AnimatePresence';
import SubmitButton from '@/components/folderSubmitButton/SubmitButton';
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  // const pathname = usePathname();
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 bg-gray-900 p-1 pb-4 text-gray-100 sm:p-20">
      <main className="relative z-0 flex-col items-center px-4 py-4">
        <SubmitButton />
        <Animate />
      </main>
    </div>
  );
}

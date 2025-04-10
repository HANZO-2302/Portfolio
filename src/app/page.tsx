'use client';
// import Image from "next/image";
import Animate from '@/components/AnimatePresence';
import SubmitButton from '@/components/folderSubmitButton/SubmitButton';
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  // const pathname = usePathname();
  return (
    <div className="grid items-center justify-items-center min-h-screen p-1 pb-4 gap-16 sm:p-20 bg-gray-900 text-gray-100">
      <main className="flex-col items-center px-4 py-4 relative z-0">
        <SubmitButton />
        <Animate />
      </main>
    </div>
  );
}

'use client';

import { motion } from 'motion/react';
export default function Rotate() {
  return (
    <motion.div
      className="rounded-md bg-white p-6 text-indigo-600 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Я плавно появляюсь!
    </motion.div>
  );
}

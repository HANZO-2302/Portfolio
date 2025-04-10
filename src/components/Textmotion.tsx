'use client';
import Link from 'next/link';
import { motion } from 'motion/react';

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#ff0088',
  borderRadius: 5,
};
const TextSlideInFromStripe = () => {
  return (
    <div className="flex h-20 w-80 items-center justify-center bg-indigo-700/15">
      {/* Тонкая полоска */}
      {/* <motion.div
        style={{ originY: 1 }}
        initial={{ height: 0,  opacity: 0, scale: 0   }} // Начальное состояние: полоска не видна
        animate={{ height: 60, opacity: 1, scale: 1 }} // Полоска расширяется
        exit={{ opacity:0, scale: 0}} // Полоска исчезает
        transition={{  
          duration: 0.5, repeatDelay: 1, }} // Длительность и повторение анимации
        className="absolute  w-64  bg-gray-100 rounded-md"
      /> */}

      {/* Анимированный текст */}
      <motion.div
        style={box}
        animate={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        // initial={{ height: 0, opacity: 0,  }} // Начальное состояние: текст скрыт
        // animate={{ height: "auto", opacity: 1, }} // Текст выезжает и становится видимым
        // exit={{ height: 0, y: 0, opacity: 0 }} // Текст исчезает
        whileHover={{}} // Длительность и повторение анимации
        className="text-md z-0 overflow-hidden font-bold text-white"
      >
        <Link href="/photoshop">Hello World </Link>
      </motion.div>
    </div>
  );
};

export default TextSlideInFromStripe;

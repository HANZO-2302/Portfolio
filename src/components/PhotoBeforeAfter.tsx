'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { frame } from 'framer-motion';

interface ImagePair {
  id: number;
  thumbnail: string;
  before: string;
  after: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/after.jpg',
    before: '/before2.jpg',
    after: '/after2.jpg',
  },
  {
    id: 2,
    thumbnail: '/logo2.jpg',
    before: '/logo2.jpg',
    after: '/logo2.jpg',
  },
  {
    id: 3,
    thumbnail: '/logo3.jpg',
    before: '/logo3.jpg',
    after: '/logo3.jpg',
  },
  {
    id: 4,
    thumbnail: '/logo4.jpg',
    before: '/logo4.jpg',
    after: '/logo4.jpg',
  },
  {
    id: 5,
    thumbnail: '/logo5.jpg',
    before: '/logo5.jpg',
    after: '/logo5.jpg',
  },
  {
    id: 6,
    thumbnail: '/logo6.jpg',
    before: '/logo6.jpg',
    after: '/logo6.jpg',
  },
];

const PhotoBeforeAfter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const openModal = (pair: ImagePair) => {
    setSelectedPair(pair);
    setShowBefore(false); // сброс при открытии
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPair(null);
    setShowBefore(false);
  };

  return (
    <>
      <div className="mt-0 grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {images.map(pair => (
          <div
            key={pair.id}
            className="relative aspect-square cursor-pointer rounded-lg"
            onClick={() => openModal(pair)}
          >
            <Image
              src={pair.thumbnail}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
              alt={`Фото ${pair.id}`}
              className="rounded-lg object-cover object-[70%_10%] shadow-lg/60 transition-all duration-300 hover:scale-95 hover:shadow-xs/60"
              priority={pair.id === 1}
            />
          </div>
        ))}
      </div>

      {/* <AnimatePresence mode="sync"> */}
      {isOpen && selectedPair && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          {/* Затемнённый фон */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl"
            onClick={closeModal}
          />

          {/* Контейнер модалки */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
              }}
              className="relative z-0 max-w-5xl rounded-lg bg-gray-800/30 shadow-xl backdrop-blur-xl"
            >
              {/* Изображение */}
              <AnimatePresence mode="sync">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="relative inset-0 z-0"
                >
                  <div className="relative z-50">
                    <Image
                      src={selectedPair.after}
                      alt="Before"
                      width={900}
                      height={900}
                      className={`w-full rounded-lg object-contain ring-1 ring-gray-400 transition-all duration-500 ease-in-out ${
                        showBefore ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-0'
                      }`}
                      // className="z-50 h-full w-full max-w-[90vw] rounded-lg bg-linear-100 from-gray-900 to-gray-500 object-contain ring-1 ring-gray-400"
                    />
                    <motion.div //затемнение
                      key={showBefore ? 'before' : 'after'}
                      className="pointer-events-none fixed inset-0 z-50 rounded-lg bg-gray-300/30 backdrop-blur-xs"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 1 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                    <Image
                      src={selectedPair.before}
                      alt="After"
                      width={900}
                      height={500}
                      className={`absolute inset-0 w-full rounded-lg object-contain ring-1 ring-gray-400 transition-all duration-500 ease-in-out ${
                        showBefore ? 'translate-x-0 opacity-0' : 'translate-x-0 opacity-100'
                      }`}
                      // className="z-50 h-full w-full max-w-[90vw] rounded-lg bg-linear-100 from-gray-900 to-gray-500 object-contain ring-1 ring-gray-400"
                    />
                  </div>
                  {/* крестик закрытия */}
                  <button
                    onClick={closeModal}
                    className="absolute top-1 right-1 z-50 transition-all duration-200 hover:scale-110"
                    aria-label="Закрыть модалку"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      // className="h-5 w-5 text-gray-800 drop-shadow-md/90 hover:text-black md:h-8 md:w-8"
                      className="lucide lucide-square-x-icon lucide-square-x h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/95 md:h-6 md:w-6"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="9" ry="9" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Кнопка переключения */}
              <motion.div>
                <motion.button
                  className="absolute -bottom-12 left-1/2 z-0 flex w-33 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-400 transition-all hover:scale-100 active:scale-97 sm:bottom-1 md:-bottom-12"
                  onClick={() => setShowBefore(!showBefore)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={showBefore ? 'before' : 'after'}
                      initial={{ opacity: 0, x: showBefore ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: showBefore ? -10 : 10 }}
                      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                      className="relative left-1/2 z-0 flex -translate-x-1/2 justify-center"
                    >
                      {showBefore ? 'Before' : 'After'}
                    </motion.div>
                  </AnimatePresence>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-arrow-right-to-line absolute z-0 h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/70 ${
                      showBefore ? 'left-4' : 'right-4'
                    }`}
                    key={showBefore ? 'after' : 'before'}
                    initial={{ opacity: 0, x: showBefore ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: showBefore ? -30 : 30 }}
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d={showBefore ? 'm14 8-4 4 4 4' : 'm10 8 4 4-4 4'} />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
      {/* </AnimatePresence> */}
    </>
  );
};

export default PhotoBeforeAfter;

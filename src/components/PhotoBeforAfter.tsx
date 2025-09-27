// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { Dialog, DialogPanel } from '@headlessui/react';
// import { motion, AnimatePresence } from 'motion/react';

// interface ImagePair {
//   id: number;
//   thumbnail: string;
//   before: string;
//   after: string;
// }

// const images: ImagePair[] = [
//   {
//     id: 1,
//     thumbnail: '/logo.jpg',
//     before: '/logo.jpg',
//     after: '/logo.jpg',
//   },
//   {
//     id: 2,
//     thumbnail: '/logo2.jpg',
//     before: '/logo2.jpg',
//     after: '/logo2.jpg',
//   },
//   {
//     id: 3,
//     thumbnail: '/logo3.jpg',
//     before: '/logo3.jpg',
//     after: '/logo3.jpg',
//   },
//   {
//     id: 4,
//     thumbnail: '/logo4.jpg',
//     before: '/logo4.jpg',
//     after: '/logo4.jpg',
//   },
//   {
//     id: 5,
//     thumbnail: '/logo5.jpg',
//     before: '/logo5.jpg',
//     after: '/logo5.jpg',
//   },
//   {
//     id: 6,
//     thumbnail: '/logo6.jpg',
//     before: '/logo6.jpg',
//     after: '/logo6.jpg',
//   },
// ];

// const PhotoBeforAfter = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
//   // const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const openModal = (pair: ImagePair) => {
//     setSelectedPair(pair);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedPair(null);
//   };

//   console.log('Images:', images);

//   return (
//     <>
//       {/* Единая версия для всех экранов */}
//       <div className="mt-18 grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
//         {images.map(pair => (
//           <div
//             key={pair.id}
//             className="relative aspect-square cursor-pointer rounded-lg"
//             onClick={() => openModal(pair)}
//           >
//             <Image
//               src={pair.thumbnail}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
//               alt={`Фото ${pair.id}`}
//               className="rounded-lg object-cover object-[10%_10%] shadow-lg/60 duration-300 hover:scale-95 hover:shadow-xs/60"
//               priority={pair.id === 1}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Модальное окно */}
//       <AnimatePresence mode="wait">
//         {isOpen && selectedPair && (
//           <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
//             {/* Затемнённый фон */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm"
//               onClick={closeModal}
//             />

//             {/* Контейнер для центрирования */}
//             <div className="fixed inset-0 flex items-center justify-center p-4">
//               <DialogPanel
//                 as={motion.div}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   transition: { type: 'tween', duration: 0.2 }, // Линейная анимация
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.9,
//                   transition: { type: 'tween', duration: 0.15 },
//                 }}
//                 className="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
//               >
//                 {/* Кнопка закрытия */}
//                 <button
//                   onClick={closeModal}
//                   className="absolute top-1 right-1 z-50 transition-all duration-200 hover:scale-110"
//                   aria-label="Закрыть модалку"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-square-x-icon lucide-square-x h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/95 md:h-8 md:w-8"
//                   >
//                     <rect width="18" height="18" x="3" y="3" rx="9" ry="9" />
//                     <path d="m15 9-6 6" />
//                     <path d="m9 9 6 6" />
//                   </svg>
//                 </button>
//                 <div className="relative h-full w-full">
//                   <Image
//                     src={selectedPair.after}
//                     alt="До"
//                     width={800}
//                     height={800}
//                     className="w-full max-w-[90vw] rounded-lg object-contain outline-2 outline-offset-2 outline-gray-500 sm:h-80 md:h-full"
//                     priority
//                   />
//                 </div>
//               </DialogPanel>
//             </div>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default PhotoBeforAfter;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';

interface ImagePair {
  id: number;
  thumbnail: string;
  before: string;
  after: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/logo.jpg',
    before: '/logo.jpg',
    after: '/logo.jpg',
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

const PhotoBeforAfter = () => {
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
      <div className="mt-18 grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
              className="rounded-lg object-cover object-[10%_10%] shadow-lg/60 transition-all duration-300 hover:scale-95 hover:shadow-xs/60"
              priority={pair.id === 1}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isOpen && selectedPair && (
          <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
            {/* Затемнённый фон */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Контейнер модалки */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'tween', duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { type: 'tween', duration: 0.15 },
                }}
                className="relative max-h-[90vh] max-w-[90vw] rounded-lg bg-white/10 shadow-xl"
              >
                {/* Кнопка закрытия */}

                {/* Изображение */}
                {/* <div className="relative h-full w-full">
                  <Image
                    src={showBefore ? selectedPair.before : selectedPair.after}
                    alt={showBefore ? 'До' : 'После'}
                    width={800}
                    height={800}
                    className="w-full max-w-[90vw] rounded-lg bg-linear-100 from-gray-900 to-gray-500 object-contain outline-2 outline-offset-2 outline-gray-500 sm:h-80 md:h-full"
                    priority
                  />
                </div> */}

                {/* Изображение с анимацией перехода */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showBefore ? 'before' : 'after'}
                    initial={{ opacity: 0, x: showBefore ? -8 : 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: showBefore ? -8 : 8 }}
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                    className="relative inset-0 z-10"
                  >
                    <div className="relative z-10 h-full w-full">
                      <Image
                        src={showBefore ? selectedPair.before : selectedPair.after}
                        alt={showBefore ? 'До' : 'После'}
                        width={800}
                        height={800}
                        className="w-full max-w-[90vw] rounded-lg bg-linear-100 from-gray-900 to-gray-500 object-contain ring-1 ring-gray-400 sm:h-80 md:h-full"
                        priority
                      />
                    </div>
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
                    className="absolute -bottom-12 left-1/2 z-40 flex w-33 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-400 transition-all hover:scale-100 active:scale-97 sm:bottom-1 md:-bottom-12"
                    onClick={() => setShowBefore(!showBefore)}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={showBefore ? 'before' : 'after'}
                        initial={{ opacity: 0, x: showBefore ? -10 : 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: showBefore ? 10 : -10 }}
                        transition={{ type: 'tween', duration: 0.2, ease: 'easeInOut' }}
                        className="relative left-1/2 z-40 flex -translate-x-1/2 justify-center"
                      >
                        {showBefore ? 'After' : 'Before'}
                      </motion.span>
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
                      className={`lucide lucide-arrow-right-to-line absolute z-50 h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/70 ${
                        showBefore ? 'left-4' : 'right-4'
                      }`}
                      key={showBefore ? 'before' : 'after'}
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

                {/* <motion.button // вариант №2
                  className="absolute -bottom-12 left-1/2 z-50 flex w-33 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 shadow-md outline-2 outline-offset-2 outline-gray-500 transition-all hover:scale-105 active:scale-95"
                  onClick={() => setShowBefore(!showBefore)}
                >
                  <AnimatePresence mode="wait"> */}
                {/* Стрелка слева для состояния "Before" */}
                {/* {showBefore && (
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
                        className="lucide lucide-arrow-left-to-line absolute left-4 z-50 h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/70"
                        key="left-arrow"
                        initial={{ opacity: 0, x: 10, scale: 0 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0 }}
                        transition={{ type: 'tween', duration: 0.2, ease: 'circInOut' }}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m14 8-4 4 4 4" />
                      </motion.svg>
                    )} */}

                {/* Текст кнопки */}
                {/* <motion.span
                      key={showBefore ? 'before' : 'after'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="relative left-1/2 flex -translate-x-1/2 justify-center"
                    >
                      {showBefore ? 'Before' : 'After'}
                    </motion.span> */}

                {/* Стрелка справа для состояния "After" */}
                {/* {!showBefore && (
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
                        className="lucide lucide-arrow-right-to-line absolute right-4 z-50 h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/70"
                        key="right-arrow"
                        initial={{ opacity: 0, x: -10, scale: 0 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0 }}
                        transition={{ type: 'tween', duration: 0.2, ease: 'circInOut' }}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m10 8 4 4-4 4" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                 </motion.button> */}

                {/* <motion.button // вариант №1
                  className="absolute -bottom-12 left-1/2 z-50 flex w-27 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 shadow-md outline-2 outline-offset-2 outline-gray-500 transition-all hover:scale-105 active:scale-95"
                  onClick={() => setShowBefore(!showBefore)}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={showBefore ? 'before' : 'after'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      // className="bg-radial-[at_25%_25%] from-zinc-800 to-zinc-900 to-75% bg-clip-text text-transparent"
                      className="z-50"
                    >
                      {showBefore ? 'Before' : 'After'}
                    </motion.span>
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
                    className="lucide lucide-arrow-right-to-line absolute right-4 z-50 h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/70"
                    key={showBefore ? 'before' : 'after'}
                    initial={{ opacity: 0, x: -40, scale: 0 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40, scale: 0 }}
                    transition={{ type: 'tween', duration: 0.4, ease: 'circInOut' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m10 8 4 4-4 4" />
                  </motion.svg>
                </motion.button> */}
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoBeforAfter;

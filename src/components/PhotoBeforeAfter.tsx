'use client';

import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Comfortaa, Outfit } from 'next/font/google';
import { useState, useEffect } from 'react';

const comFortaa = Comfortaa({ subsets: ['cyrillic'] });
const outFit = Outfit({ subsets: ['latin'] });

interface ImagePair {
  id: number;
  thumbnail: string;
  before: string;
  after: string;
  textH1?: string; // делаем поле необязательным
  textP?: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/after.jpg',
    before: '/before2.jpg',
    after: '/after2.jpg',
    textH1: 'Ретушь портретов',
    textP: 'Улучшение качества изображения, коррекция кожи, света и теней, устранение дефектов.',
  },
  {
    id: 2,
    thumbnail: '/logo2.jpg',
    before: '/logo2.jpg',
    after: '/logo2.jpg',
    textH1: 'Выделение и изоляция объектов',
    textP: 'Tочное отделение элементов от фона и интеграция в новые композиции.',
  },
  {
    id: 3,
    thumbnail: '/logo3.jpg',
    before: '/logo3.jpg',
    after: '/logo3.jpg',
    textH1: 'Цветокоррекция и замена цвета',
    textP: 'Настройка оттенков и контраста для достижения нужной атмосферы.',
  },
  {
    id: 4,
    thumbnail: '/logo4.jpg',
    before: '/logo4.jpg',
    after: '/logo4.jpg',
    textH1: 'Замена и обработка фона',
    textP: 'Создание фоновых решений с акцентом на глубину и стиль.',
  },
  {
    id: 5,
    thumbnail: '/logo5.jpg',
    before: '/logo5.jpg',
    after: '/logo5.jpg',
    textH1: 'Фотомонтаж и коллажирование',
    textP: 'Объединение нескольких изображений в единую художественную сцену.',
  },
  {
    id: 6,
    thumbnail: '/logo6.jpg',
    before: '/logo6.jpg',
    after: '/logo6.jpg',
    textH1: 'Добавление типографики и визуальных эффектов',
    textP: 'Оформление изображений текстом, светом и декоративными элементами.',
  },
];

const PhotoBeforeAfter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем ширину экрана
    const checkScreen = () => setIsMobile(window.innerWidth < 770);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

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
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {images.map(pair => (
          <motion.div
            key={pair.id}
            initial={isMobile ? { opacity: 0 } : undefined}
            whileInView={isMobile ? { opacity: 1 } : undefined}
            transition={isMobile ? { duration: 0.6, ease: 'easeInOut' } : undefined}
            viewport={isMobile ? { once: false, margin: '-100px' } : undefined}
            className="overflow-hidden rounded-lg shadow-md/60 ring-1 ring-gray-400 transition-all duration-300 hover:-translate-y-0 hover:scale-95 hover:shadow-lg/70 hover:ring-4 dark:ring-gray-600 hover:dark:ring-gray-400"
          >
            <div
              className="relative z-0 aspect-video cursor-pointer rounded-lg md:aspect-square lg:aspect-[4/3]"
              onClick={() => openModal(pair)}
            >
              <Image
                src={pair.thumbnail}
                fill
                // width={900}
                // height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
                alt={`photo ${pair.id}`}
                className="w-wull h-auto rounded-lg object-cover object-[70%_10%]"
                priority={pair.id === 1}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-50% to-black/90" />

              {/* Текст для карточек */}
              <motion.div
                className={`${comFortaa.className} absolute inset-x-0 bottom-0 flex flex-col items-start p-3`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'tween', duration: 0.5, delay: 0.6, ease: 'backOut' }}
              >
                {pair.textH1 && (
                  <div className="text-lg leading-snug font-bold text-balance text-gray-200 text-shadow-sm sm:text-[9px] md:text-xs lg:text-sm lg:leading-5 xl:text-lg 2xl:text-xl">
                    {pair.textH1}
                  </div>
                )}

                {pair.textP && (
                  <div className="text-xs leading-snug font-extralight text-balance text-gray-200 text-shadow-sm sm:text-[7px] md:text-[8px] xl:text-[10px] 2xl:text-sm">
                    {pair.textP}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <AnimatePresence mode="sync"> */}
      {isOpen && selectedPair && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          {/* Затемнённый фон модалки */}
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xl">
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
              className="relative z-0 max-w-md rounded-lg bg-gray-400/40 backdrop-blur-xl sm:-mt-10 md:max-w-5xl"
            >
              {/* Изображение */}
              <AnimatePresence mode="sync">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="relative inset-0 z-0"
                >
                  <div className="relative z-0">
                    <Image
                      src={selectedPair.after}
                      alt="Before"
                      width={900}
                      height={900}
                      className={`w-full rounded-lg object-cover ring-1 ring-gray-400 transition-all duration-500 ease-in-out sm:h-[80vh] md:h-full ${
                        showBefore
                          ? 'translate-x-0 scale-100 opacity-100'
                          : 'translate-x-0 scale-99 opacity-0'
                      }`}
                    />
                    <Image
                      src={selectedPair.before}
                      alt="After"
                      width={900}
                      height={900}
                      className={`absolute inset-0 w-full rounded-lg object-cover ring-1 ring-gray-400 transition-all duration-500 ease-in-out sm:h-[80vh] md:h-full ${
                        showBefore
                          ? 'translate-x-0 scale-99 opacity-0'
                          : 'translate-x-0 scale-100 opacity-100'
                      }`}
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
                  className="absolute -bottom-12 left-1/2 z-0 flex w-33 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-400 transition-all hover:scale-100 active:scale-97"
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

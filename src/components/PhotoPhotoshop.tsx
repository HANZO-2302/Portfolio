'use client';

import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Comfortaa } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const comFortaa = Comfortaa({ subsets: ['cyrillic'] });

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ImagePair {
  id: number;
  thumbnail: string;
  before: string;
  after: string;
  textH1?: string;
  textP?: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/after2.jpg',
    before: '/before2.jpg',
    after: '/after2.jpg',
    textH1: 'Ретушь портретов',
    textP: 'Улучшение качества изображения, коррекция кожи, света и теней, устранение дефектов.',
  },
  {
    id: 2,
    thumbnail: '/walking2.jpg',
    before: '/walking.jpg',
    after: '/walking2.jpg',
    textH1: 'Выделение и изоляция объектов',
    textP: 'Tочное отделение элементов от фона и интеграция в новые композиции.',
  },
  {
    id: 3,
    thumbnail: '/bafiti3.jpg',
    before: '/bafiti.jpg',
    after: '/bafiti3.jpg',
    textH1: 'Цветокоррекция и замена цвета',
    textP: 'Настройка оттенков и контраста для достижения нужной атмосферы.',
  },
  {
    id: 4,
    thumbnail: '/6.jpg',
    before: '/7.jpg',
    after: '/6.jpg',
    textH1: 'Замена и обработка фона',
    textP: 'Создание фоновых решений с акцентом на глубину и стиль.',
  },
  {
    id: 5,
    thumbnail: '/234.jpg',
    before: '/23.jpg',
    after: '/234.jpg',
    textH1: 'Фотомонтаж и коллажирование',
    textP: 'Объединение нескольких изображений в единую художественную сцену.',
  },
  {
    id: 6,
    thumbnail: '/28.jpg',
    before: '/25.jpg',
    after: '/28.jpg',
    textH1: 'Добавление типографики и визуальных эффектов',
    textP: 'Оформление изображений текстом, светом и декоративными элементами.',
  },
];

const PhotoPhotoshop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const [showBefore, setShowBefore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 500px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      // Cleanup старых ScrollTrigger при изменении isMobile
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (!containerRef.current) return;

      // на мобильных анимация появления карточек при скролле с ScrollTrigger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (isMobile) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.98,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.1,
              ease: 'power3.in',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'top 10%',
                toggleActions: 'play none none reset',
                // markers: true, // раскомментируйте для отладки
              },
            },
          );
        } else {
          // На десктопе - последовательное появление карточек
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.95,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.1,
              delay: 0.2 + index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reset',
                // markers: true, // раскомментируйте для отладки
              },
            },
          );
        }
      });

      // текст анимация  внутри карточек
      textsRef.current.forEach((text, index) => {
        if (!text) return;

        gsap.fromTo(
          text,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: 0.6 + index * 0.1,
            ease: 'power1.out',
            // scrollTrigger: {
            //   trigger: text,
            //   start: 'top 90%',
            //   toggleActions: 'play reverse play reverse',
            // markers: true, // раскомментируйте для отладки
            // },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [isMobile] },
  );

  const openModal = (pair: ImagePair) => {
    setSelectedPair(pair);
    setShowBefore(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowBefore(false);
    setTimeout(() => setSelectedPair(null), 400); // 400ms = длина exit анимации фона
  };

  return (
    <>
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-4 2xl:grid-cols-3"
      >
        {images.map((pair, index) => (
          <div
            key={pair.id}
            ref={el => {
              cardsRef.current[index] = el;
            }}
            style={!isMobile ? { opacity: 0, transform: 'translateY(0px)' } : undefined}
            className="overflow-hidden rounded-lg shadow-md/60 ring-2 ring-gray-400 transition-all duration-500 ease-in-out hover:shadow-lg/70 dark:ring-gray-600 hover:dark:ring-gray-400"
          >
            <div
              className="relative z-0 aspect-square cursor-pointer overflow-hidden rounded-lg md:aspect-auto md:h-48 lg:h-56 xl:h-80 2xl:h-96"
              onClick={() => openModal(pair)}
            >
              <Image
                src={pair.thumbnail}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={`photo ${pair.id}`}
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                priority={index < 4}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-linear-to-b from-transparent from-50% to-black/90" />

              {/* Текст для карточек */}
              <div
                ref={el => {
                  textsRef.current[index] = el;
                }}
                className={`${comFortaa.className} absolute inset-x-0 bottom-0 flex flex-col items-start p-3`}
              >
                {pair.textH1 && (
                  <div className="text-lg leading-snug font-bold text-balance text-gray-200 text-shadow-sm sm:text-[9px] md:text-xs lg:text-sm lg:leading-5 xl:text-base 2xl:text-lg">
                    {pair.textH1}
                  </div>
                )}

                {pair.textP && (
                  <div className="text-xs leading-snug font-extralight text-balance text-gray-200 text-shadow-sm sm:text-[7px] md:text-[8px] xl:text-[10px]">
                    {pair.textP}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence mode="sync">
        {isOpen && selectedPair && (
          <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
            {/* Затемнённый фон модалки */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 },
              }}
              exit={{ opacity: 0, transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 } }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 backdrop-blur-xl"
            >
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: { type: 'tween', duration: 0.3, ease: 'easeInOut' },
                }}
                className="relative z-0 max-w-5xl rounded-lg bg-gray-400/40 backdrop-blur-xl sm:-mt-16"
              >
                {/* Изображение */}
                {/* <AnimatePresence mode="sync">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                    className="relative inset-0 z-0"
                  > */}
                <div className="relative z-0">
                  <Image
                    src={selectedPair.after}
                    alt="After"
                    width={900}
                    height={900}
                    className={`h-full max-h-[75vh] w-full rounded-lg object-cover ring-1 ring-gray-400 transition-all duration-500 ease-in-out ${
                      showBefore
                        ? 'translate-x-0 scale-100 opacity-100'
                        : 'translate-x-0 scale-99 opacity-0'
                    }`}
                  />
                  <Image
                    src={selectedPair.before}
                    alt="Before"
                    width={900}
                    height={900}
                    className={`absolute inset-0 h-full max-h-[75vh] w-full rounded-lg object-cover ring-1 ring-gray-400 transition-all duration-500 ease-in-out ${
                      showBefore
                        ? 'translate-x-0 scale-99 opacity-0'
                        : 'translate-x-0 scale-100 opacity-100'
                    }`}
                  />
                </div>
                {/* Кнопка закрытия */}
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
                    className="lucide lucide-square-x-icon lucide-square-x h-9 w-9 text-white/80 drop-shadow-md/90 hover:text-white/95 md:h-6 md:w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="9" ry="9" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
                {/* </motion.div>
                </AnimatePresence> */}

                {/* Кнопка переключения */}
                <div>
                  <button
                    className="absolute -bottom-17 left-1/2 z-0 flex w-52 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-600 px-6 py-4 text-xl font-medium text-gray-300 ring-1 ring-gray-400 transition-all hover:scale-100 active:scale-95"
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
                      className={`lucide lucide-arrow-right-to-line absolute z-0 h-7 w-7 text-white/80 drop-shadow-md/90 hover:text-white/70 ${
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
                  </button>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoPhotoshop;

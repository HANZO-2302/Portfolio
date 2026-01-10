'use client';

import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Comfortaa } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const comFortaa = Comfortaa({ subsets: ['cyrillic'] });

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

interface ImagePair {
  id: number;
  thumbnail: string;
  // before: string;
  // after: string;
  textH1?: string;
  textP?: string;
  figma: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/Instagram post4.png',
    // before: '/Instagram post5.png',
    // after: '/Instagram post5.png',
    textH1: 'Баннер для рекламы',
    textP:
      'Создание визуально привлекательного баннера для соцсетей и промо-акций с акцентом на читаемость и стиль.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=BZYu4kRJcXXFbdUV-1',
  },
  {
    id: 2,
    thumbnail: '/Desktop.png',
    // before: '/walking.jpg',
    // after: '/walking2.jpg',
    textH1: 'Концепт лендинга.',
    textP:
      'Концепт дизайна лендинга конференции с продуманной структурой, визуальной иерархией и UX-логикой.',
    figma:
      'https://www.figma.com/design/ewU1ZDq9K8JAAWoz5MDQDN/Untitled?node-id=0-1&t=QHgwh65a9DR7ALtL-1',
  },
  {
    id: 3,
    thumbnail: '/bafiti3.jpg',
    // before: '/bafiti.jpg',
    // after: '/bafiti3.jpg',
    textH1: 'UI/UX мобильного приложения',
    textP: 'Интерактивный прототип мобильного приложения с продуманным пользовательским потоком.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=SLlmkIWCvKI8sX4v-1',
  },
  {
    id: 4,
    thumbnail: '/6.jpg',
    // before: '/7.jpg',
    // after: '/6.jpg',
    textH1: 'Замена и обработка фона',
    textP: 'Создание фоновых решений с акцентом на глубину и стиль.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=SLlmkIWCvKI8sX4v-1',
  },
  {
    id: 5,
    thumbnail: '/233.jpg',
    // before: '/23.jpg',
    // after: '/233.jpg',
    textH1: 'Фотомонтаж и коллажирование',
    textP: 'Объединение нескольких изображений в единую художественную сцену.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=SLlmkIWCvKI8sX4v-1',
  },
  {
    id: 6,
    thumbnail: '/28.jpg',
    // before: '/25.jpg',
    // after: '/28.jpg',
    textH1: 'Добавление типографики и визуальных эффектов',
    textP: 'Оформление изображений текстом, светом и декоративными элементами.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=SLlmkIWCvKI8sX4v-1',
  },
];

const PhotoFigma = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  // const [showBefore, setShowBefore] = useState(false);
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

      // Анимация появления карточек
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        if (isMobile) {
          // На мобильных - анимация при скролле с ScrollTrigger

          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 1,
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
          // На десктопе - последовательное появление при загрузке
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
              delay: 0.1 + index * 0.08,
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

      // Анимация текста внутри карточек
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
            delay: 0.4 + index * 0.08,
            ease: 'power1.out',
          },
        );
      });
    },
    { scope: containerRef, dependencies: [isMobile] },
  );

  const openModal = (pair: ImagePair) => {
    setSelectedPair(pair);
    // setShowBefore(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPair(null);
    // setShowBefore(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-4 2xl:grid-cols-6"
      >
        {images.map((pair, index) => (
          <div
            key={pair.id}
            ref={el => {
              cardsRef.current[index] = el;
            }}
            style={!isMobile ? { opacity: 0, transform: 'translateY(0px)' } : undefined}
            className="overflow-hidden rounded-lg shadow-md/60 ring-1 ring-gray-400 transition-all duration-500 hover:shadow-lg/70 dark:ring-gray-600 hover:dark:ring-gray-400"
          >
            <div
              className="relative z-0 aspect-square cursor-pointer rounded-lg md:aspect-auto md:h-[20vh] lg:h-[28vh] xl:h-[29vh] 2xl:h-[60vh]"
              onClick={() => openModal(pair)}
            >
              <Image
                src={pair.thumbnail}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw"
                alt={`photo ${pair.id}`}
                className="h-auto w-full rounded-lg object-cover object-[50%_10%] transition-all duration-500 ease-in-out hover:scale-103"
                priority={pair.id === 1}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-transparent from-50% to-black/90" />

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
                  {/* Одна картинка */}
                  <div className="relative z-0">
                    <Image
                      src={selectedPair.thumbnail} // или thumbnail — как тебе нужно
                      alt="Image"
                      width={900}
                      height={900}
                      className="w-full rounded-lg object-cover ring-1 ring-gray-400 sm:h-[80vh] md:h-full"
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
              {/* <motion.div> */}
              <motion.button
                className="absolute -bottom-12 left-1/2 z-0 flex w-44 -translate-x-1/2 justify-between rounded-lg bg-linear-100 from-gray-900 to-gray-500 px-6 py-2 text-sm font-medium text-gray-300 ring-1 ring-gray-400 transition-all hover:scale-100 active:scale-97"
                onClick={() => window.open(selectedPair.figma, '_blank')}
              >
                Перейти в Figma
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
              {/* </motion.div> */}
            </DialogPanel>
          </div>
        </Dialog>
      )}
      {/* </AnimatePresence> */}
    </>
  );
};

export default PhotoFigma;

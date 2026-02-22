'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Comfortaa } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const comFortaa = Comfortaa({ subsets: ['cyrillic'] });

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ImagePair {
  id: number;
  thumbnail: string;
  textH1?: string;
  textP?: string;
  figma: string;
}

const images: ImagePair[] = [
  {
    id: 1,
    thumbnail: '/video1.mp4',
    textH1: 'Баннер для рекламы',
    textP:
      'Создание визуально привлекательного баннера для соцсетей и промо-акций с акцентом на читаемость и стиль.',
    figma:
      'https://www.figma.com/design/450UIhH6PIR6uuJ3uOtzLy/Untitled?node-id=0-1&t=BZYu4kRJcXXFbdUV-1',
  },
  {
    id: 2,
    thumbnail: '/video2.mp4',
    textH1: 'Концепт лендинга.',
    textP:
      'Концепт дизайна лендинга конференции с продуманной структурой, визуальной иерархией и UX-логикой.',
    figma:
      'https://www.figma.com/design/ewU1ZDq9K8JAAWoz5MDQDN/Untitled?node-id=0-1&t=QHgwh65a9DR7ALtL-1',
  },
  {
    id: 3,
    thumbnail: '/video3.mp4',
    textH1: 'UI/UX мобильного приложения',
    textP: 'Интерактивный прототип мобильного приложения с продуманным пользовательским потоком.',
    figma:
      'https://www.figma.com/design/wX8rOhtkY7TUMxyaFJs0mu/UI-UX-Design-for-a-Mobile-App?node-id=0-1&t=JbPsFAi7f5i1fTEy-1',
  },
  {
    id: 4,
    thumbnail: '/video1.mp4',
    textH1: 'Набор иконок и элементов интерфейса (UI Kit)',
    textP:
      'Создание единого визуального стиля для кнопок, форм, карточек и других элементов интерфейса.',
    figma:
      'https://www.figma.com/design/0ky7Y3jhrs5TEzbPc4oHRr/Untitled?node-id=16-176&t=wSDcJeb19QiBOd7f-1',
  },
  {
    id: 5,
    thumbnail: '/video1.mp4',
    textH1: 'Редизайн сайта',
    textP:
      'Обновлённая версия сайта с улучшенной визуальной структурой и оптимизированным пользовательским опытом.',
    figma:
      'https://www.figma.com/design/yHmN9W4VuUKNS62JTBFqfP/Untitled?node-id=0-1&t=diqOtxkfOoRMG9tU-1',
  },
  {
    id: 6,
    thumbnail: '/video1.mp4',
    textH1: 'Дашборд / админ-панель',
    textP:
      'Интерфейс для панели управления с графиками, таблицами и фильтрами для удобной работы с данными.',
    figma:
      'https://www.figma.com/design/7zl4hrgIpLAwIWMv78VlMa/Dashboard?node-id=0-1&t=BQL52qS2vMAFhtTL-1',
  },
];

const VideoAfterEffects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedPair(null), 300); // ✅ ждём exit анимацию
  };

  const handleVideoHover = (index: number, isHovering: boolean) => {
    const video = videoRefs.current[index];
    if (video) {
      if (isHovering) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
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
              className="relative z-0 aspect-square cursor-pointer rounded-lg md:aspect-auto md:h-48 lg:h-56 xl:h-80 2xl:h-96"
              onClick={() => openModal(pair)}
              onMouseEnter={() => handleVideoHover(index, true)}
              onMouseLeave={() => handleVideoHover(index, false)}
            >
              <video
                ref={el => {
                  videoRefs.current[index] = el;
                }}
                src={pair.thumbnail}
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
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
      <AnimatePresence>
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
                className="relative z-0 max-w-md rounded-lg backdrop-blur-xl md:max-w-5xl"
              >
                <div className="relative z-0">
                  <video
                    src={selectedPair.thumbnail}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="auto"
                    className="h-full w-full rounded-lg ring-2 ring-gray-400 md:max-h-[80vh] md:max-w-[80vw]"
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
                    className="lucide lucide-square-x-icon lucide-square-x h-9 w-9 text-white/80 drop-shadow-md/90 hover:text-white/95 md:h-6 md:w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="9" ry="9" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoAfterEffects;

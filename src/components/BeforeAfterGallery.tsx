'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

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

const BeforeAfterGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const openModal = (pair: ImagePair) => {
    setSelectedPair(pair);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPair(null);
  };

  return (
    <>
      {/* Единая версия для всех экранов */}
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
              className="rounded-lg object-cover object-[10%_10%] shadow-lg/60 duration-300 hover:scale-95 hover:shadow-xs/60"
              priority={pair.id === 1}
            />
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
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

            {/* Контейнер для центрирования */}
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
                className="relative rounded-lg object-contain shadow-xl" //original

                // className=" relative w-full max-w-[90vw] rounded-lg object-contain outline-2 outline-offset-2 outline-gray-500 sm:h-80 md:h-full" //Photo
              >
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
                    className="lucide lucide-square-x-icon lucide-square-x h-5 w-5 text-white/80 drop-shadow-md/90 hover:text-white/95 md:h-8 md:w-8"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="9" ry="9" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
                {/* Кнопки навигации */}
                <button
                  className="absolute top-1/2 right-2 z-50 flex -translate-y-1/2 transform items-center justify-center rounded-lg bg-white/50 p-2 text-black drop-shadow-md/90 transition-all duration-200 hover:bg-gray-200"
                  onClick={e => {
                    e.stopPropagation();
                    swiperRef.current?.slideNext();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 left-2 z-50 flex -translate-y-1/2 transform items-center justify-center rounded-lg bg-white/50 p-2 text-black drop-shadow-md/90 transition-all duration-200 hover:bg-gray-200"
                  onClick={e => {
                    e.stopPropagation();
                    swiperRef.current?.slidePrev();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="relative flex h-full w-full items-center justify-center rounded-lg">
                  <Swiper
                    loop={true}
                    slidesPerGroup={1}
                    loopAddBlankSlides={true}
                    loopPreventsSliding={false} // Улучшает плавность
                    modules={[Navigation, EffectCreative]}
                    onSwiper={swiper => (swiperRef.current = swiper)}
                    className="h-full max-h-[90vh] max-w-[90vw] rounded-lg object-contain outline-2 outline-offset-2 outline-gray-500 sm:max-w-[70vw] md:max-w-[90vw] md:object-cover lg:max-w-[48vw]" //original
                    navigation={{
                      prevEl: '.swiper-button-prev',
                      nextEl: '.swiper-button-next',
                    }}
                    effect="creative"
                    creativeEffect={{
                      prev: {
                        // opacity: 0,
                        shadow: true,
                        translate: ['-110%', 0, 600],
                        rotate: [0, 0, 0],
                      },
                      next: {
                        // opacity: 0,
                        shadow: true,
                        translate: ['110%', 0, 600],
                        rotate: [0, 0, 0],
                      },
                    }}
                    //Основные настройки для плавности
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={800}
                    parallax={false}
                    resistance={false}
                    resistanceRatio={0.85}
                    touchRatio={1}
                    touchAngle={45}
                    grabCursor={false}
                    followFinger={true}
                    shortSwipes={true}
                    longSwipes={true}
                    longSwipesRatio={0.5}
                    longSwipesMs={300}
                    // Touch настройки
                    simulateTouch={true}
                    touchStartPreventDefault={false}
                    preventClicks={false}
                    preventClicksPropagation={false}
                  >
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.before}
                          alt="До"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.after}
                          alt="После"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.before}
                          alt="До"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.after}
                          alt="После"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.before}
                          alt="До"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="flex h-full w-full items-center justify-center">
                        <Image
                          src={selectedPair.after}
                          alt="После"
                          width={1200}
                          height={800}
                          className="h-full max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain md:object-cover md:object-[10%_10%]"
                          priority
                          // data-swiper-parallax="-100"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default BeforeAfterGallery;

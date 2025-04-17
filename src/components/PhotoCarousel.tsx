// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Определение типа пропсов
// interface PhotoCarouselProps {
//   // Массив может быть опциональным, если мы предоставляем значение по умолчанию
//   images?: string[];
// }

// const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
//   // Примеры изображений по умолчанию
//   images = ['/logo.jpg', '/logo2.jpg', '/logo3.jpg', '/logo4.jpg'],
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   // Функции для десктопной карусели
//   const nextSlide = (): void => {
//     setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = (): void => {
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   // Обработка пустого массива изображений
//   if (images.length === 0) {
//     return (
//       <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 p-4 text-center">
//         <p className="text-gray-500">Нет изображений для отображения</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Десктопная карусель - будет скрыта до sm (640px) */}
//       <div className="relative mx-auto hidden w-full max-w-xl sm:block">
//         <div className="relative overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={images[currentIndex]}
//             alt={`Слайд ${currentIndex + 1}`}
//             className="h-96 w-full object-cover transition-transform duration-300"
//           />

//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75"
//           >
//             <ChevronLeft className="text-gray-800" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75"
//           >
//             <ChevronRight className="text-gray-800" />
//           </button>
//         </div>

//         <div className="mt-4 flex justify-center space-x-2">
//           {images.map((img, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-16 w-16 overflow-hidden rounded-md border-2 ${
//                 index === currentIndex
//                   ? 'border-blue-500'
//                   : 'border-transparent opacity-50 hover:opacity-75'
//               }`}
//             >
//               <img src={img} alt={`Превью ${index + 1}`} className="h-full w-full object-cover" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Вертикальный скролл для мобильных - виден до sm (640px) */}
//       <div className="space-y-4 sm:hidden">
//         {images.map((img, index) => (
//           <div key={index} className="w-full">
//             <img
//               src={img}
//               alt={`Мобильный слайд ${index + 1}`}
//               className="h-auto w-full rounded-lg object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PhotoCarousel;--------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Определение типа пропсов
// interface PhotoCarouselProps {
//   // Массив может быть опциональным, если мы предоставляем значение по умолчанию
//   images?: string[];
// }

// const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
//   // Примеры изображений по умолчанию
//   images = ['/logo.jpg', '/logo2.jpg', '/logo3.jpg', '/logo4.jpg'],
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);
//   const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

//   // Функция для десктопной карусели - следующий слайд
//   const nextSlide = (): void => {
//     if (isAnimating) return; // Предотвращаем множественные клики во время анимации

//     setIsAnimating(true);
//     setSlideDirection('right');

//     // Используем setTimeout, чтобы дать анимации время для выполнения
//     setTimeout(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);

//       // Сбрасываем состояние анимации после короткой задержки
//       setTimeout(() => {
//         setIsAnimating(false);
//         setSlideDirection(null);
//       }, 0);
//     }, 50); // Время до смены изображения (должно быть меньше, чем длительность анимации)
//   };

//   // Функция для десктопной карусели - предыдущий слайд
//   const prevSlide = (): void => {
//     if (isAnimating) return; // Предотвращаем множественные клики во время анимации

//     setIsAnimating(true);
//     setSlideDirection('left');

//     // Используем setTimeout, чтобы дать анимации время для выполнения
//     setTimeout(() => {
//       setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

//       // Сбрасываем состояние анимации после короткой задержки
//       setTimeout(() => {
//         setIsAnimating(false);
//         setSlideDirection(null);
//       }, 50);
//     }, 300); // Время до смены изображения
//   };

//   // Переход напрямую к определенному слайду
//   const goToSlide = (index: number): void => {
//     if (isAnimating || index === currentIndex) return;

//     setIsAnimating(true);
//     setSlideDirection(index > currentIndex ? 'right' : 'left');

//     setTimeout(() => {
//       setCurrentIndex(index);

//       setTimeout(() => {
//         setIsAnimating(false);
//         setSlideDirection(null);
//       }, 0);
//     }, 100);
//   };

//   // Определение класса для анимации
//   const getSlideClass = (): string => {
//     if (!isAnimating) return 'transform transition-transform duration-300 ease-in-out';

//     if (slideDirection === 'right') {
//       return 'transform transition-transform duration-300 ease-in-out translate-x-full opacity-0';
//     } else if (slideDirection === 'left') {
//       return 'transform transition-transform duration-300 ease-in-out -translate-x-full opacity-0';
//     }

//     return 'transform transition-transform duration-300 ease-in-out';
//   };

//   // Обработка пустого массива изображений
//   if (images.length === 0) {
//     return (
//       <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 p-4 text-center">
//         <p className="text-gray-500">Нет изображений для отображения</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Десктопная карусель - будет скрыта до sm (640px) */}
//       <div className="relative mx-auto hidden w-full max-w-xl sm:block">
//         <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
//           <img
//             src={images[currentIndex]}
//             alt={`Слайд ${currentIndex + 1}`}
//             className={`h-full w-full object-cover ${getSlideClass()}`}
//           />

//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75"
//             disabled={isAnimating}
//           >
//             <ChevronLeft className="text-gray-800" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75"
//             disabled={isAnimating}
//           >
//             <ChevronRight className="text-gray-800" />
//           </button>
//         </div>

//         <div className="mt-4 flex justify-center space-x-2">
//           {images.map((img, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               disabled={isAnimating}
//               className={`h-16 w-16 overflow-hidden rounded-md border-2 ${
//                 index === currentIndex
//                   ? 'border-blue-500'
//                   : 'border-transparent opacity-50 hover:opacity-75'
//               }`}
//             >
//               <img src={img} alt={`Превью ${index + 1}`} className="h-full w-full object-cover" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Вертикальный скролл для мобильных - виден до sm (640px) */}
//       <div className="space-y-4 sm:hidden">
//         {images.map((img, index) => (
//           <div key={index} className="w-full">
//             <img
//               src={img}
//               alt={`Мобильный слайд ${index + 1}`}
//               className="h-auto w-full rounded-lg object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PhotoCarousel;

'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import './PhotoCarousel.css';

// Определение типа пропсов
interface PhotoCarouselProps {
  images?: string[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  images = [
    '/logo.jpg',
    '/logo2.jpg',
    '/logo3.jpg',
    '/logo4.jpg',
    '/logo4.jpg',
    '/logo4.jpg',
    '/logo4.jpg',
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  // Функция для перехода к следующему слайду
  const nextSlide = (): void => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = (): void => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Функция для перехода к конкретному слайду
  const goToSlide = (index: number): void => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Варианты анимации для слайдера
  const slideVariants = {
    incoming: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'tween', stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'tween', stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  // Обработка пустого массива изображений
  if (images.length === 0) {
    return (
      <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-100 p-4 text-center">
        <p className="text-gray-500">Нет изображений для отображения</p>
      </div>
    );
  }

  return (
    <>
      {/* Десктопная карусель - будет скрыта до sm (640px) */}
      <div className="relative mx-auto hidden w-full max-w-2xs sm:block">
        {/* <button
          onClick={prevSlide}
          className="absolute top-1/3 -left-12 z-10 h-20 w-10 rounded-md bg-white/50 p-2 transition hover:bg-white/75"
        >
          <ChevronLeft className="text-gray-800" />
        </button> */}

        {/* <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Слайд ${currentIndex + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              className="absolute h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="mt-2 flex justify-center space-x-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-20 w-20 overflow-hidden rounded-md border-2 ${
                index === currentIndex
                  ? 'border-orange-500'
                  : 'border-transparent opacity-50 hover:opacity-75'
              }`}
            >
              <img src={img} alt={`Превью ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        {/* <button
          onClick={nextSlide}
          className="absolute top-1/3 -right-12 z-10 h-20 w-10 rounded-md bg-white/50 p-2 transition hover:bg-white/75"
        >
          <ChevronRight className="text-gray-800" />
        </button> */}
      </div>

      {/* Вертикальный скролл для мобильных - виден до sm (640px) */}
      <motion.div
        className="mt-17 space-y-6 p-6 sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img
              src={img}
              alt={`Мобильный слайд ${index + 1}`}
              className="h-160 w-full rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default PhotoCarousel;

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';

// // Определение типа пропсов
// interface PhotoCarouselProps {
//   images?: string[];
// }

// const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
//   images = ['/logo.jpg', '/logo2.jpg', '/logo3.jpg', '/logo4.jpg'],
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [direction, setDirection] = useState<number>(0);
//   const [isPending, setIsPending] = useState<boolean>(false);

//   // Функция для перехода к следующему слайду с блокировкой множественных нажатий
//   const nextSlide = (): void => {
//     if (isPending) return;

//     setIsPending(true);
//     setDirection(1);
//     setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);

//     // Разблокировать через 500мс
//     setTimeout(() => setIsPending(false), 10);
//   };

//   // Функция для перехода к предыдущему слайду с блокировкой множественных нажатий
//   const prevSlide = (): void => {
//     if (isPending) return;

//     setIsPending(true);
//     setDirection(-1);
//     setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

//     // Разблокировать через 500мс
//     setTimeout(() => setIsPending(false), 100);
//   };

//   // Функция для перехода к конкретному слайду
//   const goToSlide = (index: number): void => {
//     if (isPending || index === currentIndex) return;

//     setIsPending(true);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);

//     // Разблокировать через 500мс
//     setTimeout(() => setIsPending(false), 0);
//   };

//   //Варианты анимации для слайдера - более плавные настройки
//   const slideVariants = {
//     incoming: (direction: number) => ({
//       opacity: 0,
//       scale: 0.95,
//       zIndex: 1,
//     }),
//     active: {
//       opacity: 1,
//       scale: 1,
//       zIndex: 2,
//       transition: { 0: {
//           type: 'tween',
//           stiffness: 100,
//           damping: 0.5,
//           duration: 0.1,

//           //   stiffness: 100, // Уменьшили жесткость пружины
//           //   damping: 10, // Настроили затухание
//           //   duration: 0, // Задали фиксированную длительность
//         },
//         opacity: { duration: 0 },
//         scale: { duration: 0 },
//       },
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? '100%' : '-100%',
//       opacity: 0,
//       scale: ['90%'],
//       zIndex: 0,
//       transition: {
//         x: {
//           type: 'tween',
//           stiffness: 10,
//           damping: 0.5,
//           duration: 0.1,
//         },
//         opacity: { duration: 0.5 },
//       },
//     }),
//   };

//   // Обработка пустого массива изображений
//   if (images.length === 0) {
//     return (
//       <div className="mx-auto w-full max-w-xl rounded-lg bg-gray-900 p-4 text-center">
//         <p className="text-gray-500">Нет изображений для отображения</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Десктопная карусель - будет скрыта до sm (640px) */}
//       <div className="relative mx-auto hidden w-full max-w-xl sm:block">
//         <div className="relative h-96 overflow-hidden rounded-lg bg-gray-900 shadow-lg">
//           <AnimatePresence initial={false} custom={direction} mode="wait">
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="incoming"
//               animate="active"
//               exit="exit"
//               className="absolute h-full w-full"
//               style={{ willChange: 'transform, opacity' }} // Оптимизация производительности
//             >
//               <img
//                 src={images[currentIndex]}
//                 alt={`Слайд ${currentIndex + 1}`}
//                 className="h-full w-full object-cover"
//                 loading="eager" // Приоритетная загрузка текущего изображения
//                 style={{
//                   objectFit: 'cover',
//                   userSelect: 'none', // Предотвращение выделения
//                   pointerEvents: 'none', // Предотвращение перетаскивания
//                 }}
//               />
//             </motion.div>
//           </AnimatePresence>

//           <button
//             onClick={prevSlide}
//             disabled={isPending}
//             className={`absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75 ${isPending ? 'cursor-not-allowed opacity-50' : ''}`}
//           >
//             <ChevronLeft className="text-gray-800" />
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={isPending}
//             className={`absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/50 p-2 transition hover:bg-white/75 ${isPending ? 'cursor-not-allowed opacity-50' : ''}`}
//           >
//             <ChevronRight className="text-gray-800" />
//           </button>
//         </div>

//         <div className="mt-4 flex justify-center space-x-2">
//           {images.map((img, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               disabled={isPending || index === currentIndex}
//               className={`h-16 w-16 overflow-hidden rounded-md border-2 ${
//                 index === currentIndex
//                   ? 'border-blue-500'
//                   : 'border-transparent opacity-50 hover:opacity-75'
//               } ${isPending ? 'cursor-not-allowed' : ''}`}
//             >
//               <img src={img} alt={`Превью ${index + 1}`} className="h-full w-full object-cover" />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Вертикальный скролл для мобильных - виден до sm (640px) */}
//       <div className="space-y-4 sm:hidden">
//         {images.map((img, index) => (
//           <div key={index} className="w-full">
//             <img
//               src={img}
//               alt={`Мобильный слайд ${index + 1}`}
//               className="h-auto w-full rounded-lg object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default PhotoCarousel;

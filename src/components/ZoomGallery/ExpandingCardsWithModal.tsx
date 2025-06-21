'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';

interface ImageItem {
  src: string;
  alt: string;
  caption?: {
    title: string;
    description: string;
  };
}

const images: ImageItem[] = [
  {
    src: '/logo.jpg',
    alt: 'Image 1',
    caption: {
      title: 'Nature',
      description: 'Beautiful landscape with mountains and lake',
    },
  },
  {
    src: '/logo2.jpg',
    alt: 'Image 2',
    caption: {
      title: 'Architecture',
      description: 'Modern building with unique design',
    },
  },
];

export default function ZoomGallery() {
  const [zoomStates, setZoomStates] = useState<boolean[]>(images.map(() => false));
  const swiperRef = useRef<{ swiper: SwiperType | null }>(null);

  const toggleZoom = (index: number) => {
    const newZoom = !zoomStates[index];
    setZoomStates(prev => prev.map((z, i) => (i === index ? newZoom : z)));

    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.allowTouchMove = !newZoom;
    }
  };

  return (
    <div className="flex aspect-square h-auto w-full items-center justify-center rounded-lg p-4 sm:h-70 sm:w-80 sm:p-2 md:h-77 md:w-110 md:p-2">
      {/* Внутренние кнопки навигации */}

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = { swiper })}
        navigation={false}
        loop={true} // ← добавь это
        modules={[Navigation]}
        className="h-full w-full rounded-lg"
      >
        <button
          className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-lg bg-white/40 p-2 text-black shadow-md hover:bg-gray-100"
          onClick={e => {
            e.stopPropagation();
            swiperRef.current?.swiper?.slidePrev();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <button
          className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 transform items-center justify-center rounded-lg bg-white/40 p-2 text-black shadow-md hover:bg-gray-100"
          onClick={e => {
            e.stopPropagation();
            swiperRef.current?.swiper?.slideNext();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        {images.map((image, index) => (
          <SwiperSlide key={image.src}>
            <div
              onClick={() => toggleZoom(index)}
              className="relative aspect-square h-full w-full cursor-pointer overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: zoomStates[index] ? 1.5 : 1,
                  height: zoomStates[index] ? '100%' : '100%',
                }}
                transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                className="relative h-full w-full origin-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-[50%_10%]"
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index === 0}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: zoomStates[index] ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"
                >
                  {image.caption && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: zoomStates[index] ? 1 : 0,
                        y: zoomStates[index] ? 0 : 5,
                      }}
                      transition={{ duration: 0.3, delay: zoomStates[index] ? 0.4 : 0 }}
                      className="relative -bottom-19 left-19 w-40 bg-amber-400/0 text-balance text-white sm:-bottom-23 sm:left-25"
                    >
                      <h2 className="text-xl font-bold">{image.caption.title}</h2>
                      <p className="text-[8px] font-light">{image.caption.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { motion } from 'framer-motion';
// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import type { Swiper as SwiperType } from 'swiper';

// interface ImageItem {
//   src: string;
//   alt: string;
//   caption?: {
//     title: string;
//     description: string;
//   };
// }

// const images: ImageItem[] = [
//   {
//     src: '/logo.jpg',
//     alt: 'Image 1',
//     caption: {
//       title: 'Nature',
//       description: 'Beautiful landscape with mountains and lake',
//     },
//   },
//   {
//     src: '/logo2.jpg',
//     alt: 'Image 2',
//     caption: {
//       title: 'Architecture',
//       description: 'Modern building with unique design',
//     },
//   },
// ];

// export default function ZoomGallery() {
//   const [zoomStates, setZoomStates] = useState<boolean[]>(images.map(() => false));
//   const swiperRef = useRef<{ swiper: SwiperType | null }>(null);

//   const toggleZoom = (index: number) => {
//     const newZoom = !zoomStates[index];
//     setZoomStates(prev => prev.map((z, i) => (i === index ? newZoom : z)));

//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.allowTouchMove = !newZoom;
//     }
//   };

//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={1}
//       onSwiper={swiper => (swiperRef.current = { swiper })}
//       className="top-20 h-140 w-100 rounded-xl p-4 shadow-md/60"
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <div
//             onClick={() => toggleZoom(index)}
//             className="relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-xl"
//           >
//             <motion.div
//               animate={{
//                 scale: zoomStates[index] ? 1.5 : 1,
//                 height: zoomStates[index] ? '110%' : '100%',
//               }}
//               transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
//               className="relative h-full w-full origin-center"
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover object-[50%_10%]"
//                 sizes="(max-width: 768px) 40vw, (max-width: 1024px) 33vw, 25vw"
//                 priority={index === 0}
//               />

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: zoomStates[index] ? 1 : 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"
//               >
//                 {image.caption && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: zoomStates[index] ? 1 : 0, y: zoomStates[index] ? 0 : 20 }}
//                     transition={{ duration: 0.3, delay: zoomStates[index] ? 0.4 : 0 }}
//                     className="absolute bottom-40 left-20 w-60 text-white"
//                   >
//                     <h2 className="text-xl font-bold">{image.caption.title}</h2>
//                     <p className="mt-2 text-xs font-light">{image.caption.description}</p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { motion } from 'framer-motion';
// import { useState, useRef } from 'react';
// import Image from 'next/image';
// import type { Swiper as SwiperType } from 'swiper';

// // Интерфейс для структуры объекта изображения
// interface ImageItem {
//   src: string;
//   alt: string;
// }

// // Массив изображений с типизацией
// const images: ImageItem[] = [
//   { src: '/logo.jpg', alt: 'Description of image 1' },
//   { src: '/logo2.jpg', alt: 'Description of image 2' },
//   { src: '/logo3.jpg', alt: 'Description of image 3' },
// ];

// // Интерфейс для рефа Swiper
// interface SwiperRef {
//   swiper: SwiperType | null;
// }

// export default function ZoomGallery() {
//   // Типизация состояния zoomStates
//   const [zoomStates, setZoomStates] = useState<boolean[]>(images.map(() => false));
//   // Типизация рефа для Swiper
//   const swiperRef = useRef<SwiperRef | null>(null);

//   // Типизация параметра функции toggleZoom
//   const toggleZoom = (index: number): void => {
//     const newZoom = !zoomStates[index];
//     setZoomStates(prev => prev.map((z, i) => (i === index ? newZoom : z)));

//     // Безопасная проверка на существование swiper
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.allowTouchMove = !newZoom;
//     }
//   };

//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={1}
//       onSwiper={(swiper: SwiperType) => {
//         swiperRef.current = { swiper };
//       }}
//       className="top-20 h-140 w-100 rounded-xl p-4 shadow-md/60"
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           {/* Контейнер с фиксированными размерами */}
//           <div
//             onClick={() => toggleZoom(index)}
//             role="button"
//             aria-label={`Zoom ${image.alt}`}
//             className="relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-xl"
//           >
//             {/* Анимированное изображение */}
//             <motion.div
//               animate={{
//                 scale: zoomStates[index] ? 1.5 : 1,
//                 width: zoomStates[index] ? '100%' : '100%', // если нужно растягивать контейнер
//                 height: zoomStates[index] ? '110%' : '100%',
//               }}
//               transition={{
//                 type: 'tween',
//                 duration: 0.4,
//                 ease: 'easeInOut',
//               }}
//               className="h-full w-full origin-center" // origin-center для правильного масштабирования
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 fill
//                 className="object-cover object-[50%_10%]"
//                 priority={index === 0}
//               />
//               {/* Градиентная тень и текст (появляются при зуме) */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: zoomStates[index] ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.5 }}
//                 className="pointer-events-none absolute right-0 bottom-0 left-0 h-1/2 bg-gradient-to-t from-black to-transparent"
//               >
//                 {/* <div className="absolute bottom-40 left-20 text-xl font-bold text-black">Hello</div> */}
//                 {/* Анимированный текст с подъёмом */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{
//                     opacity: zoomStates[index] ? 1 : 0,
//                     y: zoomStates[index] ? 0 : 20,
//                   }}
//                   transition={{
//                     duration: 0.3,
//                     delay: zoomStates[index] ? 0.4 : 0, // Небольшая задержка при появлении
//                   }}
//                   className="absolute bottom-40 left-20 w-60 text-xl font-bold text-wrap text-white"
//                 >
//                   Hello
//                   <h3 className="relative bottom-0 left-0 text-[10px] font-light text-white">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
//                     voluptates aperiam, accusantium eius commodi corrupti! Nostrum, dolores
//                     molestias, rerum aliquid sed nisi, quasi temporibus libero facere soluta porro
//                     commodi architecto?
//                   </h3>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
// <Swiper
//   spaceBetween={20}
//   slidesPerView={1}
//   onSwiper={(swiper: SwiperType) => {
//     swiperRef.current = { swiper };
//   }}
//   className="top-20 h-140 w-90 rounded-xl"
// >
//   {images.map((image, index) => (
//     <SwiperSlide key={index}>
//       <motion.div
//         onClick={() => toggleZoom(index)}
//         role="button"
//         aria-label={`Zoom ${image.alt}`}
//         animate={{
//           scale: zoomStates[index] ? 1.7 : 1,
//           // boxShadow: zoomStates[index]
//           //   ? '10px 10px 80px rgba(1.5,0.9,0.8)'
//           //   : '0 0 0 rgba(0,0,0,0)',
//         }}
//         transition={{
//           type: 'tween',
//           duration: 0.2,
//           ease: 'easeInOut', // или массив для cubic-bezier
//         }}
//         className="relative aspect-square h-100 w-full cursor-pointer overflow-hidden rounded-xl object-cover object-[50%_10%] will-change-transform"
//       >
//         <Image
//           src={image.src}
//           alt={image.alt}
//           fill={true}
//           className="object-cover"
//           priority={index === 0}
//         />
//       </motion.div>
//     </SwiperSlide>
//   ))}
// </Swiper>
//   );
// }

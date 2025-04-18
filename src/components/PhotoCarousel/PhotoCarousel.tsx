'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
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
  // Создаем ref для контейнера скролла
  const scrollRef = useRef<HTMLDivElement>(null);

  // Используем useScroll для отслеживания прокрутки
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ['start start', 'end end'],
  });

  // Трансформируем прогресс скролла для анимации
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <>
      {/* Вертикальный скролл для мобильных - виден до sm (640px) */}
      <motion.div
        ref={scrollRef}
        className="mt-18 max-h-screen space-y-6 overflow-y-auto p-6 sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-20px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative">
              <Image
                src={img}
                width={400}
                height={400}
                alt={`Мобильный слайд ${index + 1}`}
                className="aspect-square overflow-hidden rounded-lg object-cover object-[50%_5%]"
                // sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default PhotoCarousel;

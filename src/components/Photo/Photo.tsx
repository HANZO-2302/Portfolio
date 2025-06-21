'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { motion, AnimatePresence } from 'motion/react';

interface PhotoProps {
  images?: string[];
}

const Photo: React.FC<PhotoProps> = ({
  images = ['/logo.jpg', '/logo2.jpg', '/logo3.jpg', '/logo4.jpg', '/logo4.jpg', '/logo4.jpg'],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  console.log('Images:', images);

  return (
    <>
      {/* Единая версия для всех экранов */}
      <div className="mt-18 grid grid-cols-1 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer rounded-lg"
            onClick={() => openModal(img)}
          >
            <Image
              src={img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
              alt={`Слайд ${index + 1}`}
              className="rounded-lg object-cover object-[10%_10%] shadow-lg/60 duration-300 hover:scale-95 hover:shadow-xs/60"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <AnimatePresence mode="wait">
        {isOpen && selectedImage && (
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
                  transition: { type: 'tween', duration: 0.2 }, // Линейная анимация
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { type: 'tween', duration: 0.15 },
                }}
                className="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
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
                <div className="relative h-full w-full">
                  <Image
                    src={selectedImage}
                    alt="До"
                    width={800}
                    height={800}
                    className="w-full max-w-[90vw] rounded-lg object-contain outline-2 outline-offset-2 outline-gray-500 sm:h-80 md:h-full"
                    priority
                  />
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default Photo;

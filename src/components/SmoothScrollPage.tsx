'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Comfortaa } from 'next/font/google';
import { FileDown } from 'lucide-react';
import GeekBrains from './GeekBrains';

const comFortaa = Comfortaa({ subsets: ['cyrillic'] });

const text = `Hello World!`;
const aboutText = `"Привет! Меня зовут Игорь, Я начинающий фронтенд-разработчик.
 Мне нравится создавать современные и удобные сайты, которые сочетают в себе простоту и стиль.
 Сейчас я активно изучаю технологии веб-разработки и собираю портфолио, где можно увидеть мои первые проекты.
 С каждым новым шагом я прокачиваю навыки и стремлюсь делать сайты ещё красивее и функциональнее."`;

const trailerVariants = {
  hidden: { opacity: 0, scale: 10, rotate: 5, x: 500, filter: 'blur(50px)' },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP);

export default function SmoothScrollPage() {
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2.5,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: false,
    });
    // const handleResize = () => smoother.current?.refresh();
    // window.addEventListener('resize', handleResize);

    const split = new SplitText('.aboutText', { type: 'chars, words' });

    gsap.from(split.chars, {
      yPercent: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-30, 30),
      ease: 'power1.out',
      autoAlpha: 0,
      duration: 0.9,
      stagger: {
        amount: 1.5,
        from: 'random',
      },
    });

    gsap.fromTo(
      '.hero-section',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom 20%',
          scrub: true,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      '.hero-arrows',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero-arrows',
          start: 'top 60%',
          end: '+=200',
          scrub: true,
          // markers: true,
        },
      },
    );

    gsap.fromTo(
      '.hero-footer',
      { opacity: 1 },
      {
        opacity: 0,

        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero-footer',
          start: 'top 20%',
          end: 'bottom 10%',
          scrub: true,
          // markers: true,
        },
      },
    );
    gsap.fromTo(
      '.geekbrains',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,

        duration: 5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.geekbrains',
          start: 'top 80%', // начало анимации
          end: 'bottom 20%',
          scrub: true,
          // markers: true,
        },
      },
    );

    gsap.utils.toArray<HTMLElement>('.gallery__left .gallery__item').forEach(item => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 150, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%', // начало анимации
            end: 'bottom 60%',
            scrub: true,
            // markers: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('.gallery__right .gallery__item').forEach(item => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 150, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%', // начало анимации
            end: 'bottom 60%',
            scrub: true,
            // markers: true,
          },
        },
      );
    });
    // cleanup
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    //   smoother.current?.kill();
    // };
  }, []);

  interface SkillCardProps {
    description: string;
    title: string;
  }

  function SkillCard({ title, description }: SkillCardProps) {
    const [open, setOpen] = useState(false);

    return (
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        className={`${comFortaa.className} gallery__item h-20 w-full cursor-pointer rounded-xl border border-gray-400/60 bg-gray-400/30 text-gray-800 shadow-lg transition-colors duration-300 hover:border-gray-500 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-200 hover:dark:bg-gray-700`}
      >
        <div className="relative flex h-full w-full items-center justify-center rounded-xl">
          <motion.div
            transition={{ ease: 'easeInOut' }}
            whileTap={{ scale: 0.95, opacity: 0 }}
            className="flex items-center justify-center"
          >
            {/* Заголовок — скрываем при open */}
            <h3
              className={`absolute text-2xl transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}
            >
              {title}
            </h3>

            {/* Описание — плавно раскрывается */}
            <div
              className={`relative transition-opacity duration-300 ${
                open ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="flex items-center justify-center p-4 text-left text-sm leading-snug font-light text-balance text-gray-800 dark:text-gray-200">
                {description}
              </p>
            </div>
          </motion.div>
        </div>
      </button>
    );
  }

  // Использование:
  const skills = [
    {
      title: 'Коммуникабельность',
      description:
        'Умение ясно и доступно излагать мысли, слушать собеседника и находить общий язык с коллегами и клиентами.',
    },
    {
      title: 'Работа в команде',
      description:
        'Способность эффективно взаимодействовать с другими, помогать и принимать помощь, стремиться к общей цели.',
    },
    {
      title: 'Критическое мышление',
      description:
        'Навык объективно оценивать информацию, отделять факты от мнений и находить логичные решения.',
    },
    {
      title: 'Решение проблем',
      description:
        'Умение быстро находить выход из сложных ситуаций, анализировать причины и предлагать практичные варианты.',
    },
    {
      title: 'Креативность',
      description:
        'Способность генерировать новые идеи, предлагать нестандартные подходы и искать оригинальные решения.',
    },
    {
      title: 'Адаптивность',
      description:
        'Гибкость в условиях изменений — быстрое освоение новых инструментов, методологий и технологий.',
    },
    {
      title: 'Ответственность',
      description:
        'Готовность доводить дела до конца, признавать ошибки и отвечать за результат своей работы.',
    },
    {
      title: 'Стрессоустойчивость',
      description:
        'Умение сохранять спокойствие в условиях дедлайнов, конфликтов или высокой нагрузки.',
    },
    {
      title: 'Поддержка и мотивация',
      description: 'Умение вдохновлять коллег, создавать позитивную атмосферу.',
    },
    {
      title: 'Управление временем',
      description:
        'Навык расставлять приоритеты, планировать задачи и соблюдать сроки без потери качества..',
    },
    {
      title: 'Самообучаемость',
      description:
        'Стремление постоянно развиваться, изучать новые технологии и применять знания на практике.',
    },
    {
      title: 'Эмпатия',
      description:
        'Чуткость к потребностям других людей, умение понимать точку зрения коллег и пользователей продукта.',
    },
  ];

  // const [showText, setShowText] = useState(false);

  return (
    <div id="smooth-wrapper" className="will-change-transform">
      <div id="smooth-content" className="will-change-transform">
        <div className="flex min-h-screen flex-col">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="p-4"
          >
            <div
              data-speed="0.9"
              className="hero-section relative mx-auto mt-15 grid max-w-5xl grid-cols-1 gap-2 rounded-3xl border border-gray-400/60 bg-gray-400/30 p-4 shadow-lg will-change-transform md:mt-20 md:grid-cols-2 dark:border-gray-600 dark:bg-gray-800/80"
            >
              {/* Анимированная картинка слева */}
              <div className="relative mx-auto aspect-[4/3] h-full w-full max-w-md overflow-hidden rounded-2xl border border-gray-600/60 shadow-sm/20 md:mx-auto md:ml-0">
                {/* фото */}
                <Image
                  src="/logo5.png"
                  alt="Hero image"
                  fill
                  className="h-full w-full object-cover object-[90%_10%]"
                  // style={{ transformOrigin: 'top' }}
                />
              </div>

              {/* Заголовок */}
              <div className="w-full text-center">
                <motion.h1
                  className="relative text-3xl font-extrabold text-gray-900 uppercase antialiased md:text-4xl lg:text-6xl dark:text-gray-200"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  {text.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block antialiased will-change-transform" //underline decoration-orange-500 underline-offset-3
                      variants={trailerVariants}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Блок "о себе" */}
                <motion.div
                  className="relative mt-1"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
                >
                  <p
                    className={`${comFortaa.className} aboutText text-center text-base text-gray-900 antialiased will-change-transform lg:text-xl dark:text-gray-200`}
                  >
                    {aboutText}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: 'backOut' }}
            className="px-4"
          >
            <div
              data-speed="0.9"
              className="hero-footer mx-auto mt-12 grid w-full max-w-5xl grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center rounded-3xl border border-gray-400/60 bg-gray-400/30 px-4 py-6 text-center text-xl shadow-lg dark:border-gray-600 dark:bg-gray-800/80"
            >
              {/* Telegram */}
              <a
                href="https://t.me/Igor_Menyailov"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center text-gray-700 transition-all duration-500 dark:text-gray-200"
              >
                <Image
                  src="/Telegram.svg"
                  width={24}
                  height={24}
                  alt="icons"
                  className="h-full w-15 drop-shadow-xs/70 transition-all duration-500 group-hover:scale-50 group-hover:opacity-0"
                />
                <span className="absolute left-1/2 flex h-full w-full -translate-x-1/2 scale-90 items-center justify-center rounded-2xl bg-gray-800 py-10 text-gray-200 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-700/90">
                  Перейти в Telegram
                </span>
              </a>

              {/* Вертикальный разделитель */}
              <span className="mx-3 h-10 border-l border-gray-600 dark:border-gray-500"></span>

              {/* GitHub */}
              <a
                href="https://github.com/HANZO-2302"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center rounded-2xl text-gray-700 transition-all duration-500 dark:text-gray-200"
              >
                <svg
                  aria-hidden="true"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-15 text-gray-800 drop-shadow-xs/70 transition-all duration-500 group-hover:scale-50 group-hover:opacity-0 dark:text-gray-200"
                >
                  <path
                    d="M16.0001 0.82843C7.41003 0.82843 0.444443 7.7928 0.444443 16.384C0.444443 23.257 4.90159 29.0879 11.0824 31.1448C11.8597 31.2888 12.1452 30.8074 12.1452 30.3965C12.1452 30.0256 12.1307 28.8001 12.1241 27.5003C7.79641 28.4413 6.88324 25.665 6.88324 25.665C6.17564 23.8669 5.15608 23.3889 5.15608 23.3889C3.74479 22.4234 5.26247 22.4432 5.26247 22.4432C6.82456 22.553 7.64708 24.0463 7.64708 24.0463C9.03447 26.4244 11.2861 25.7368 12.1738 25.3395C12.3133 24.3339 12.7165 23.6478 13.1614 23.2594C9.70632 22.8659 6.07413 21.5321 6.07413 15.5716C6.07413 13.8734 6.68182 12.4857 7.67697 11.3963C7.51544 11.0045 6.98304 9.42236 7.82764 7.27967C7.82764 7.27967 9.1339 6.86158 12.1065 8.87421C13.3473 8.52944 14.6781 8.35669 16.0001 8.35083C17.3221 8.35669 18.6538 8.52944 19.897 8.87421C22.8661 6.86158 24.1705 7.27967 24.1705 7.27967C25.0172 9.42236 24.4846 11.0045 24.323 11.3963C25.3204 12.4857 25.9239 13.8733 25.9239 15.5716C25.9239 21.5462 22.2849 22.8619 18.8211 23.2469C19.379 23.7297 19.8761 24.6764 19.8761 26.1276C19.8761 28.2089 19.8581 29.8841 19.8581 30.3965C19.8581 30.8104 20.1381 31.2955 20.9267 31.1428C27.104 29.0835 31.5556 23.2547 31.5556 16.384C31.5556 7.7928 24.5909 0.82843 16.0001 0.82843Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.27053 22.9878C6.23637 23.065 6.11461 23.0882 6.00396 23.0352C5.89111 22.9845 5.82767 22.8791 5.86427 22.8015C5.89782 22.7219 6.01957 22.6997 6.13218 22.7532C6.24527 22.8038 6.30969 22.9102 6.27053 22.9878ZM7.03571 23.6705C6.96154 23.7393 6.81648 23.7073 6.71802 23.5986C6.61628 23.4902 6.59724 23.3452 6.67252 23.2753C6.74901 23.2066 6.88968 23.2387 6.99167 23.3473C7.09342 23.457 7.11318 23.6011 7.03559 23.6706L7.03571 23.6705ZM7.56068 24.544C7.46528 24.6103 7.30936 24.5482 7.2131 24.4098C7.11782 24.2716 7.11782 24.1057 7.21518 24.0392C7.3118 23.9727 7.46528 24.0325 7.56288 24.1697C7.65804 24.3104 7.65804 24.4763 7.56056 24.5441L7.56068 24.544ZM8.44835 25.5558C8.36308 25.6497 8.18154 25.6246 8.04856 25.4962C7.91265 25.3708 7.87471 25.1928 7.96023 25.0987C8.04648 25.0046 8.22912 25.031 8.36308 25.1583C8.49813 25.2835 8.53937 25.4628 8.44848 25.5558H8.44835ZM9.59564 25.8974C9.55819 26.0191 9.38324 26.0745 9.20707 26.0228C9.03115 25.9695 8.91598 25.8267 8.95148 25.7036C8.98808 25.581 9.16376 25.5233 9.34127 25.5787C9.51695 25.6318 9.63237 25.7734 9.59577 25.8974H9.59564ZM10.9015 26.0422C10.9059 26.1705 10.7565 26.2769 10.5715 26.2792C10.3855 26.2832 10.235 26.1794 10.2331 26.0533C10.2331 25.9237 10.3791 25.8183 10.5651 25.8153C10.75 25.8116 10.9015 25.9147 10.9015 26.0422ZM12.1842 25.993C12.2064 26.1182 12.0779 26.2468 11.8943 26.2809C11.7137 26.3139 11.5465 26.2366 11.5235 26.1126C11.501 25.9842 11.6321 25.8558 11.8123 25.8225C11.9962 25.7905 12.1608 25.8658 12.1842 25.993Z"
                    fill="none"
                  />
                </svg>

                <span className="absolute left-1/2 flex h-full w-full -translate-x-1/2 scale-90 items-center justify-center rounded-2xl bg-gray-800 py-10 text-gray-200 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-700/90">
                  Открыть GitHub
                </span>
              </a>

              {/* Разделитель */}
              <span className="mx-3 h-10 border-l border-gray-600 dark:border-gray-500"></span>

              {/* Gmail */}
              <a
                href="mailto:m2302835@gmail.com"
                className="group relative flex items-center justify-center rounded-2xl text-gray-700 transition-all duration-500 dark:text-gray-200"
              >
                <Image
                  src="/Gmail.svg"
                  width={24}
                  height={24}
                  alt="icons"
                  className="h-auto w-15 drop-shadow-xs/70 transition-all duration-500 group-hover:scale-50 group-hover:opacity-0"
                />
                <span className="absolute left-1/2 flex h-full w-full -translate-x-1/2 scale-90 items-center justify-center rounded-2xl bg-gray-800 py-10 text-gray-200 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-700/90">
                  Написать письмо
                </span>
              </a>

              {/* Разделитель */}
              <span className="mx-3 h-10 border-l border-gray-600 dark:border-gray-500"></span>

              {/* Резюме */}
              <a
                href="/resume.pdf"
                download
                className="group relative flex items-center justify-center rounded-2xl text-gray-700 transition-all duration-500 dark:text-gray-200"
              >
                <FileDown className="h-auto w-15 stroke-1 drop-shadow-xs/70 transition-all duration-500 group-hover:scale-50 group-hover:opacity-0" />
                <span className="absolute left-1/2 flex h-full w-full -translate-x-1/2 scale-90 items-center justify-center rounded-2xl bg-gray-800 py-10 text-lg text-gray-200 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-700/90">
                  Скачать резюме
                </span>
              </a>
            </div>
          </motion.div>

          {/* Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: 2, ease: 'easeOut' }}
            className="hero-arrows relative mt-10 px-4 md:translate-y-[20px]"
          >
            <div
              data-speed="0.9"
              className="mx-auto flex items-center justify-center gap-3 text-xl uppercase"
            >
              <motion.div
                initial={{ opacity: 0, x: -200, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: 2, ease: 'easeOut' }}
                className="flex justify-center"
              >
                <div className="relative flex h-6 w-6 animate-bounce items-center justify-center rounded-full border-2 border-orange-500 shadow-md/20 lg:h-9 lg:w-9">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    className="relative flex size-6 items-center justify-center text-gray-800 md:size-12 dark:text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m0 0-6-6m6 6 6-6"
                    />
                  </svg>
                </div>
              </motion.div>
              SCROLL
            </div>
          </motion.div>
          {/* portfolio */}
          <div className="portfolio mt-0 flex flex-col items-center justify-center">
            {/* <div className="container mx-auto border"> */}
            <main className="gallery mx-auto mt-20 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-x-2 gap-y-10 px-4 pb-[29rem] md:mt-30 md:grid-cols-2">
              {/* Left */}
              <div
                data-speed="0.9"
                className="gallery__left flex w-full max-w-md flex-col items-center justify-center gap-y-4 pb-10 text-2xl font-medium text-gray-800 will-change-transform dark:text-gray-200"
              >
                {/* <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    // whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2, ease: 'easeOut' }}
                    className="relative w-full"
                  > */}
                <div className="gallery__item flex w-full items-center justify-center text-6xl font-bold">
                  Hard Skills
                </div>
                {/* </motion.div> */}

                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/html5.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="drop-shadow-xs/10"
                  />
                  <span className="px-2">HTML5</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">CSS3</span>
                  <Image
                    src="/css3.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="drop-shadow-xs/10"
                  />
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/tailwind.svg"
                    alt="CSS3 logo"
                    width={80}
                    height={80}
                    className="drop-shadow-xs/80"
                  />
                  Tailwind CSS
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/js.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="translate-x-[8px] drop-shadow-xs/90"
                  />
                  <span className="px-2">JavaScript</span>
                  <span className="mx-0 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">TypeScript</span>
                  <Image
                    src="/ts.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="-translate-x-[8px] drop-shadow-xs/90"
                  />
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/react.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="drop-shadow-xs/80"
                  />
                  <span className="px-2">React.js</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  {/* <span className="px-2">Next.js</span> */}
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 400 90"
                    className="size-25 translate-x-[10px]"
                  >
                    <path
                      fill="currentColor"
                      d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
                    />
                    <path
                      fill="currentColor"
                      d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
                    />
                  </svg>
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/gsap.svg"
                    alt=""
                    width={50}
                    height={50}
                    className="drop-shadow-xs/80"
                  />
                  <span className="px-2">GSAP</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">Motion</span>
                  <Image
                    src="/motion.svg"
                    alt=""
                    width={90}
                    height={60}
                    className="drop-shadow-xs/80"
                  />
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/figma2.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="drop-shadow-xs/90"
                  />
                  <span className="px-2">Figma</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">Photoshop</span>
                  <Image
                    src="/ps.svg"
                    alt=""
                    width={35}
                    height={30}
                    className="translate-x-[4px] drop-shadow-xs/30"
                  />
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image src="/git.svg" alt="" width={65} height={65} />
                  <span className="px-2">Git</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">GitHub</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 56 56"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-15"
                  >
                    <path
                      d="M28.0001 12.8284C19.41 12.8284 12.4444 19.7928 12.4444 28.384C12.4444 35.257 16.9016 41.0879 23.0824 43.1448C23.8597 43.2888 24.1452 42.8074 24.1452 42.3965C24.1452 42.0256 24.1307 40.8001 24.1241 39.5003C19.7964 40.4413 18.8832 37.665 18.8832 37.665C18.1756 35.8669 17.1561 35.3889 17.1561 35.3889C15.7448 34.4234 17.2625 34.4432 17.2625 34.4432C18.8246 34.553 19.6471 36.0463 19.6471 36.0463C21.0345 38.4244 23.2861 37.7368 24.1738 37.3395C24.3133 36.3339 24.7165 35.6478 25.1614 35.2594C21.7063 34.8659 18.0741 33.5321 18.0741 27.5716C18.0741 25.8734 18.6818 24.4857 19.677 23.3963C19.5154 23.0045 18.983 21.4224 19.8276 19.2797C19.8276 19.2797 21.1339 18.8616 24.1065 20.8742C25.3473 20.5294 26.6781 20.3567 28.0001 20.3508C29.3221 20.3567 30.6538 20.5294 31.897 20.8742C34.8661 18.8616 36.1705 19.2797 36.1705 19.2797C37.0172 21.4224 36.4846 23.0045 36.323 23.3963C37.3204 24.4857 37.9239 25.8733 37.9239 27.5716C37.9239 33.5462 34.2849 34.8619 30.8211 35.2469C31.379 35.7297 31.8761 36.6764 31.8761 38.1276C31.8761 40.2089 31.8581 41.8841 31.8581 42.3965C31.8581 42.8104 32.1381 43.2955 32.9267 43.1428C39.104 41.0835 43.5556 35.2547 43.5556 28.384C43.5556 19.7928 36.5909 12.8284 28.0001 12.8284Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.2705 34.9878C18.2364 35.065 18.1146 35.0882 18.004 35.0352C17.8911 34.9845 17.8277 34.8791 17.8643 34.8015C17.8978 34.7219 18.0196 34.6997 18.1322 34.7532C18.2453 34.8038 18.3097 34.9102 18.2705 34.9878ZM19.0357 35.6705C18.9615 35.7393 18.8165 35.7073 18.718 35.5986C18.6163 35.4902 18.5972 35.3452 18.6725 35.2753C18.749 35.2066 18.8897 35.2387 18.9917 35.3473C19.0934 35.457 19.1132 35.6011 19.0356 35.6706L19.0357 35.6705ZM19.5607 36.544C19.4653 36.6103 19.3094 36.5482 19.2131 36.4098C19.1178 36.2716 19.1178 36.1057 19.2152 36.0392C19.3118 35.9727 19.4653 36.0325 19.5629 36.1697C19.658 36.3104 19.658 36.4763 19.5606 36.5441L19.5607 36.544ZM20.4484 37.5558C20.3631 37.6497 20.1815 37.6246 20.0486 37.4962C19.9127 37.3708 19.8747 37.1928 19.9602 37.0987C20.0465 37.0046 20.2291 37.031 20.3631 37.1583C20.4981 37.2835 20.5394 37.4628 20.4485 37.5558H20.4484ZM21.5956 37.8974C21.5582 38.0191 21.3832 38.0745 21.2071 38.0228C21.0311 37.9695 20.916 37.8267 20.9515 37.7036C20.9881 37.581 21.1638 37.5233 21.3413 37.5787C21.517 37.6318 21.6324 37.7734 21.5958 37.8974H21.5956ZM22.9015 38.0422C22.9059 38.1705 22.7565 38.2769 22.5715 38.2792C22.3855 38.2832 22.235 38.1794 22.2331 38.0533C22.2331 37.9237 22.3791 37.8183 22.5651 37.8153C22.75 37.8116 22.9015 37.9147 22.9015 38.0422ZM24.1842 37.993C24.2064 38.1182 24.0779 38.2468 23.8943 38.2809C23.7137 38.3139 23.5465 38.2366 23.5235 38.1126C23.501 37.9842 23.6321 37.8558 23.8123 37.8225C23.9962 37.7905 24.1608 37.8658 24.1842 37.993Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/python.svg"
                    alt=""
                    width={65}
                    height={65}
                    className="drop-shadow-xs/90"
                  />
                  Python
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/django.svg"
                    alt=""
                    width={65}
                    height={65}
                    className="drop-shadow-xs/90"
                  />
                  Django
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <svg
                    viewBox="0 0 56 56"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-20 drop-shadow-xs/20"
                  >
                    <path
                      d="M23.2637 37.0422C22.0828 36.1353 20.8231 35.2657 19.9623 34.0415C18.1509 31.8823 16.7562 29.3826 15.8027 26.7555C15.2265 25.0474 15.0291 23.216 14.2862 21.5738C13.5091 20.3811 14.4194 19.0772 15.7576 18.6982C16.3532 18.5865 17.4008 18.0379 16.1364 18.4299C15.0028 19.2422 14.893 17.6929 16.0553 17.5947C16.8488 17.4918 17.1409 16.8577 16.8694 16.2869C16.018 15.7446 18.9346 15.1488 17.467 14.3397C15.9382 12.7295 19.6055 12.4195 18.7006 14.2482C18.4841 15.6545 21.2632 13.9905 20.6184 15.6146C21.2736 16.3944 23.0725 15.792 23.0279 16.886C23.9826 16.9502 24.3104 17.7345 25.2065 17.7947C26.1354 18.2043 27.819 18.527 28.1353 19.549C27.2137 20.2612 25.0798 18.0775 24.9774 20.0494C25.2556 22.962 25.1848 25.9624 26.2763 28.7361C26.7925 30.4157 28.044 31.7378 29.1743 33.0459C30.256 34.327 31.7208 35.2288 33.2139 35.9882C34.5236 36.5914 35.9356 36.9914 37.363 37.2422C37.9419 36.8099 38.9641 35.2025 39.8674 35.8804C39.9102 36.6419 38.0748 37.4724 39.7809 37.3882C40.7828 37.0932 41.4779 38.1447 42.3028 37.1961C43.0629 38.0753 45.4622 36.6345 44.9214 38.4314C44.19 38.8922 43.1234 38.6136 42.3909 39.2474C41.1832 38.6585 40.2216 39.7744 38.8845 39.6333C37.3997 39.893 35.8891 39.9978 34.3835 40C31.9138 39.8095 29.3918 39.7293 27.0421 38.8896C25.7188 38.5142 24.427 37.7783 23.2637 37.0422ZM25.3495 37.9246C26.642 38.4702 27.9058 39.0454 29.3222 39.2188C31.5694 39.5241 33.8898 39.9933 36.1451 39.5652C35.1244 39.1152 34.0692 39.7405 33.0524 39.2435C31.8329 39.4997 30.5242 39.1783 29.2842 39.0199C27.8743 38.4067 26.3529 37.9851 25.0325 37.1893C23.3828 36.6009 25.8858 37.9437 26.3313 38.0525C27.3627 38.6241 25.1973 37.7596 24.8919 37.5219C24.0282 37.0488 23.9181 37.1476 24.8064 37.628C24.9853 37.7303 25.1619 37.8375 25.3495 37.9246ZM22.8902 36.2277C24.1427 36.6806 22.8847 35.368 22.311 35.444C22.0567 35.0133 21.3396 34.7413 21.8454 34.51C20.9353 34.8184 20.892 33.3371 20.4644 33.5488C19.5016 33.2519 20.0898 32.2006 18.9429 31.5549C18.8381 30.8745 17.8035 30.2844 17.4736 29.2583C17.3277 28.7328 16.3044 27.224 16.9331 28.6281C17.4683 29.98 18.4098 31.1377 19.1934 32.2938C19.8019 33.3947 20.5205 34.5453 21.6286 35.2321C22.0022 35.5821 22.3629 36.118 22.8902 36.2277ZM19.2825 32.3603C19.3263 32.1755 19.5115 32.7599 19.2825 32.3603V32.3603ZM24.3901 36.7707C23.9914 36.6179 24.6675 36.6494 24.3901 36.7707V36.7707ZM25.07 37.0129C24.7597 37.1997 24.9996 36.6785 25.07 37.0129V37.0129ZM25.921 37.3593C25.2967 37.1218 26.3261 36.9827 25.921 37.3593V37.3593ZM27.3796 38.1531C26.5916 38.0189 27.6257 37.7978 27.3796 38.1531V38.1531ZM24.5789 36.2467C23.766 36.2414 25.2081 35.8493 24.5789 36.2467V36.2467ZM25.2172 36.5575C24.9897 36.6518 25.1994 36.3474 25.2172 36.5575V36.5575ZM28.4077 38.5019C28.9207 38.8181 31.403 39.1946 29.8486 38.6315C29.5885 38.6851 26.9665 37.9075 28.4077 38.5019ZM23.3425 34.6503C22.5463 34.4175 23.2927 34.4397 23.3425 34.6503V34.6503ZM24.828 35.4955C24.0256 35.2925 25.2144 35.2323 24.828 35.4955V35.4955ZM26.0773 36.2434C25.1773 36.0384 26.632 36.0392 26.0773 36.2434V36.2434ZM22.7383 34.0078C23.3399 34.4582 25.1655 34.0654 23.6599 33.7386C22.9746 33.382 21.4302 33.1379 22.4829 33.9536L22.7381 34.0076L22.7383 34.0078ZM26.9235 36.5017C25.8722 36.2635 27.1743 36.0846 26.9235 36.5017V36.5017ZM25.6517 35.5149C27.1235 35.9214 24.4141 34.6061 25.2886 35.3653L25.4824 35.4508L25.6517 35.5149ZM28.2016 36.9537C26.9427 36.7661 29.5954 36.9667 28.2016 36.9537V36.9537ZM22.2018 33.2202C21.858 33.2416 22.1473 32.9669 22.2018 33.2202V33.2202ZM30.5594 38.245C30.1045 38.5856 30.5965 37.7872 30.5594 38.245V38.245ZM24.5804 34.6424C24.1449 34.6324 24.496 34.4012 24.5804 34.6424V34.6424ZM22.334 33.0611C21.2386 32.7169 23.1343 33.0142 22.334 33.0611V33.0611ZM19.6728 31.3817C18.8021 30.7084 19.5732 31.0072 19.6728 31.3817V31.3817ZM26.659 35.7105C26.5124 35.5472 26.5901 35.7461 26.659 35.7105V35.7105ZM31.0074 38.3157C30.7707 38.41 30.9935 38.0663 31.0074 38.3157V38.3157ZM26.2742 35.3224C25.5918 35.2252 26.3526 35.001 26.2742 35.3224V35.3224ZM23.0347 33.3179C22.0812 32.9249 23.6299 33.2557 23.0347 33.3179V33.3179ZM28.5146 36.6424C27.6105 36.4673 29.4422 36.2836 28.5146 36.6424V36.6424ZM25.6641 34.7533C26.7333 34.8879 24.3921 34.0432 25.4296 34.6777L25.6641 34.7533ZM29.3801 36.9841C30.3782 36.4014 30.0492 38.3484 31.0736 37.1488C32.0839 36.4283 30.201 38.0392 31.4463 37.277C32.347 36.689 33.6772 37.5558 34.5176 37.8386C35.1218 37.8096 35.7095 38.3489 36.329 38.0208C37.5216 37.7074 33.9967 37.5557 34.9207 36.9993C33.8293 37.3093 33.0234 36.6296 32.4863 35.9472C31.2622 35.6712 29.8468 35.0602 29.2359 34.0025C28.9868 33.6054 29.5959 34.0584 29.0209 33.4093C28.2833 32.7688 27.9149 32.0418 27.4199 31.2631C26.8284 30.955 26.7594 30.0482 26.6996 31.2327C26.7045 30.4852 25.9854 29.9819 25.8101 30.1912C25.8069 29.4711 26.5793 29.8321 26.0386 29.2993C25.9222 28.5531 25.5391 27.7755 25.4238 26.933C25.2448 26.5269 25.3985 25.657 24.8129 26.5764C24.5997 27.5481 24.7422 25.3825 25.074 26.0967C25.5094 25.3679 24.9175 25.4536 24.8934 25.5547C25.1771 24.9399 25.0729 24.0677 24.8192 24.4005C24.9705 23.7488 25.0581 22.0021 24.593 22.3116C24.875 21.6301 25.1277 19.1934 23.9038 20.1225C23.4079 20.1293 22.549 20.2983 22.1431 20.4954C23.4162 21.1805 22.015 20.7429 21.4969 20.6339C21.4294 21.2679 20.9162 20.9937 20.2749 20.9998C21.299 21.1236 19.7763 22.0227 19.1887 21.6734C18.4257 22.0295 19.8471 22.9182 19.204 23.1929C19.283 23.6072 18.0351 23.0434 18.133 24.0001C17.3922 23.6959 18.031 25.135 18.4016 24.6483C19.6616 24.9812 19.2886 25.7401 19.3206 26.4612C19.1154 26.8812 18.307 25.4737 19.1406 25.5389C18.4831 24.496 18.4132 25.1619 17.8669 25.6464C17.7398 25.6816 19.2606 26.3358 18.3062 26.6593C19.1459 26.7858 19.1698 27.5032 19.3409 27.9571C19.8454 28.4703 19.7422 27.3903 20.346 28.0071C19.9639 27.4577 18.3219 26.459 19.6438 26.7793C19.6368 26.2262 19.4047 25.7802 19.8098 25.7911C20.2109 25.0818 19.3898 27.5397 20.2939 26.6382C20.5441 26.5316 20.6061 25.9282 21.0561 26.6952C21.7093 27.3228 21.2921 27.7777 20.3703 27.203C20.5352 27.7492 21.6033 27.9443 21.4025 28.7985C21.6154 29.5496 21.913 29.273 22.1725 29.2295C22.3762 29.9594 22.4916 29.4226 22.5014 29.0754C23.4333 29.2701 23.2151 29.8082 23.5068 30.1839C24.149 30.467 22.5873 28.2654 23.6901 29.5221C24.8502 30.5446 24.1252 30.9714 23.084 30.8077C23.7429 30.7555 23.9555 31.6773 24.7797 31.645C25.5313 31.9939 26.0401 33.3349 24.7446 32.7766C24.2954 32.3811 22.7052 31.8931 24.004 32.6455C25.2034 33.1878 26.156 33.5123 27.3129 34.193C28.1409 34.7701 28.4985 35.4312 28.8123 35.5618C28.1166 35.8864 26.7155 35.3028 27.7558 35.1238C27.107 35.0084 26.377 34.6881 26.9985 35.4776C27.5271 35.9082 28.8712 35.8628 29.1122 35.9114C28.9078 36.3509 28.5574 36.3858 29.1204 36.42C28.4922 36.7468 29.3219 36.7974 29.3801 36.9841ZM28.0955 33.4422C27.7133 33.0521 27.6145 32.321 28.0276 32.9571C28.2395 33.0402 28.7064 34.1515 28.0955 33.4422ZM32.279 36.0368C32.286 36.2136 32.5174 36.0217 32.279 36.0368V36.0368ZM27.4919 32.4854C27.4774 31.8955 27.6303 32.9404 27.4919 32.4854V32.4854ZM27.0763 31.9392C26.5955 31.0322 27.6823 32.196 27.0763 31.9392V31.9392ZM22.0374 28.5437C22.1764 29.0154 22.3197 28.4703 22.0374 28.5437V28.5437ZM26.0475 30.666C26.221 30.03 26.2514 31.1996 26.0475 30.666V30.666ZM23.2144 28.7426C23.0148 28.3917 23.6322 29.0718 23.2144 28.7426V28.7426ZM25.6458 29.5037C25.1904 28.5073 25.9682 28.9595 25.7465 29.6668L25.6458 29.5037ZM21.4529 26.7736C21.2493 26.4466 20.9124 25.4876 21.0209 25.195C21.119 25.6716 22.0595 27.2468 21.4823 25.8473C20.8443 24.6742 22.2447 26.2281 22.3888 26.5207C22.4558 26.8119 21.9952 26.4412 22.3072 27.1236C21.738 26.3467 21.9712 27.5529 21.4529 26.7736ZM20.1572 25.9018C20.2104 25.1418 20.4538 26.4229 20.1572 25.9018V25.9018ZM20.74 26.0976C21.0182 25.524 21.2116 26.8972 20.74 26.0976V26.0976ZM19.3378 25.0386C18.8553 24.5705 18.5063 24.1392 19.3605 24.7482C19.6897 24.7607 18.6291 23.767 19.4396 24.4326C20.292 24.5843 19.8604 25.7968 19.3378 25.0386ZM20.0743 25.0199C20.2231 25.2867 20.3546 24.7488 20.0743 25.0199V25.0199ZM20.5276 25.1617C20.1027 24.3843 21.043 25.4876 20.5276 25.1617V25.1617ZM19.6266 24.321C18.2242 23.1025 21.389 24.9583 19.8557 24.5469L19.6266 24.321ZM23.6451 26.6007C23.0381 26.2454 23.4843 24.0993 23.6912 25.5671C24.2812 25.3807 23.6586 26.325 24.0987 26.3163C24.0293 26.9121 23.8324 27.1263 23.645 26.6007H23.6451ZM25.1314 27.4584C25.1909 26.8116 25.2566 27.9004 25.1314 27.4584V27.4584ZM24.8732 27.2093C24.8801 27.5345 24.9401 26.933 24.8732 27.2093V27.2093ZM19.9018 23.9207C19.0008 22.707 22.5203 25.1484 20.4788 24.2285C20.2655 24.1741 20.0088 24.1548 19.9018 23.9207ZM22.7639 25.4023C22.6786 24.3802 22.9543 25.5717 22.7639 25.4023V25.4023ZM24.937 26.7633C24.9495 27.1483 25.1051 26.1811 24.937 26.7633V26.7633ZM20.0398 23.4573C20.5753 23.3457 22.2591 24.3756 20.7128 23.7518C20.5409 23.5659 20.1747 23.6505 20.0398 23.4573ZM24.6383 25.6953C24.6955 24.6503 24.9579 25.0712 24.6402 25.8449L24.6383 25.6953ZM20.4383 23.0939C20.6564 22.7815 19.859 21.6811 20.5532 22.6992C20.8532 22.932 21.4216 23.089 20.9197 23.1869C21.7092 23.8669 20.7272 23.3712 20.4383 23.0939ZM24.4109 25.3688C24.5439 26.0663 24.5617 24.1785 24.4109 25.3688V25.3688ZM19.9827 21.9943C20.0708 22.2112 20.1494 21.9246 19.9827 21.9943V21.9943ZM21.019 22.5965C21.2856 22.0502 21.5108 23.2057 21.019 22.5965V22.5965ZM23.9417 24.1839C23.939 23.9741 23.9969 24.4892 23.9417 24.1839V24.1839ZM23.7724 23.818C23.3667 22.8408 24.1498 24.3354 23.7724 23.818V23.818ZM23.5234 23.1774C23.4552 22.7736 23.7548 23.6847 23.5234 23.1774V23.1774ZM23.9288 22.5339C23.6503 22.055 24.2804 20.4233 24.3506 21.4351C24.0567 22.2237 24.2658 22.6649 24.4707 21.6072C24.8494 20.7748 24.389 23.2497 23.9288 22.5339ZM24.3454 20.1072C24.3723 20.2826 24.4667 19.9618 24.3454 20.1072V20.1072ZM23.6497 33.4918C23.4846 33.3512 23.6704 33.5812 23.6497 33.4918V33.4918ZM25.0828 34.1995C25.88 34.3993 25.8759 34.0784 25.1554 33.9832C24.7678 33.6311 23.5451 33.2577 24.6397 33.9395C24.7121 34.1188 24.9412 34.1146 25.0828 34.1995ZM22.2523 32.364C22.6916 32.6838 23.9066 33.2703 22.8779 32.4859C23.2248 32.0923 22.2142 31.8829 22.5494 31.6198C21.6967 31.1103 21.8767 31.1556 22.4741 31.1717C21.4492 30.7244 22.622 30.7578 22.5669 30.5287C22.1717 30.4526 20.6042 29.8484 21.5264 30.5783C20.5889 30.1117 21.3029 30.7521 21.0196 30.6844C20.0609 30.4293 21.8733 31.3973 20.8672 31.157C21.4173 31.5826 22.3478 32.247 21.0999 31.6073C20.9355 31.8385 21.9928 32.1885 22.2523 32.364ZM23.7512 33.2047C22.8576 32.5042 25.574 33.7782 23.7512 33.2047V33.2047ZM31.4245 37.7433C31.1755 38.0444 31.4481 37.3902 31.4245 37.7433V37.7433ZM32.2132 38.0674C32.6337 37.6695 32.2304 38.701 32.91 37.97C32.9173 37.4466 32.8889 37.1375 32.129 37.7732C31.9195 37.8866 31.8258 38.369 32.2132 38.0674ZM19.6941 30.3911C18.7888 29.8979 19.5648 29.8956 19.6941 30.3911V30.3911ZM20.5362 30.9298C19.4205 30.4716 20.2234 30.4236 20.5362 30.9298V30.9298ZM25.3272 33.7508C25.7949 34.1564 27.4756 34.0485 25.8952 33.8008C25.6612 33.4629 24.4091 33.5443 25.3272 33.7508ZM31.9132 37.7221C31.2158 37.9852 32.6332 37.1323 31.9132 37.7221V37.7221ZM33.4105 38.7267C33.1002 38.8095 33.415 38.5373 33.4105 38.7267V38.7267ZM33.4127 38.4616C32.6403 38.5104 34.21 37.6369 33.4127 38.4616V38.4616ZM17.6228 28.6981C16.9433 27.7514 17.2004 27.326 16.5452 26.5532C16.4212 25.9621 15.4211 24.6209 16.0279 26.0418C16.5838 26.8728 16.7489 28.1594 17.6228 28.6981ZM33.1628 38.1996C32.5609 37.7963 34.6297 37.274 33.1628 38.1996V38.1996ZM34.2824 38.6277C33.818 38.499 35.0171 38.012 34.2824 38.6277V38.6277ZM19.4445 29.3447C18.9017 29.3058 19.6547 29.0395 19.4445 29.3447V29.3447ZM34.0488 38.3353C34.7599 37.8877 33.885 37.9564 33.9198 38.3765L34.0488 38.3353ZM24.3974 32.3959C24.0219 32.4217 24.3731 32.0937 24.3974 32.3959V32.3959ZM24.9939 32.7311C24.7025 32.7899 24.8043 32.357 24.9939 32.7311V32.7311ZM35.1898 38.6379C36.101 37.9961 34.6376 38.515 34.9986 38.7595L35.1898 38.6379ZM34.8411 38.4732C34.0574 38.7424 35.5832 37.866 34.8411 38.4732V38.4732ZM36.6234 39.6322C36.0181 39.5267 37.1219 39.3063 36.6234 39.6322V39.6322ZM19.9013 29.1246C20.5694 29.2708 22.5706 30.7308 21.39 29.2257C20.7851 29.0509 21.1479 27.6075 20.5312 27.8631C20.9452 28.5383 20.8717 28.8257 20.0025 28.4C18.91 27.8794 19.3885 28.658 19.6019 28.8726C19.3112 28.9372 19.9869 29.1193 19.9013 29.1246ZM16.8582 26.778C16.9777 26.2951 15.7571 24.1212 16.2817 25.6887C16.4711 26.0171 16.452 26.6393 16.8582 26.778ZM22.4438 30.1402C22.0998 29.8593 22.4276 30.1004 22.4438 30.1402V30.1402ZM23.2908 30.3326C22.3546 30.1248 23.2903 29.8211 23.2908 30.3326V30.3326ZM30.6307 34.8504C30.0774 34.8422 30.4908 34.5008 30.6307 34.8504V34.8504ZM30.9833 35.1017C30.7799 35.1395 30.9314 34.9061 30.9833 35.1017V35.1017ZM33.8926 36.8908C33.5434 36.865 34.1725 36.6891 33.8926 36.8908V36.8908ZM18.3782 27.157C17.5208 26.9412 19.1785 26.8545 18.3782 27.157V27.157ZM29.9846 34.2962C29.4745 34.4216 29.9757 33.7902 29.9846 34.2962V34.2962ZM18.062 26.4376C17.5865 26.326 18.5761 26.268 18.062 26.4376V26.4376ZM19.5543 27.1433C19.3965 27.2063 19.5449 26.977 19.5543 27.1433V27.1433ZM37.7545 38.0402C38.4156 37.9092 39.922 38.3687 40.1656 37.8692C39.3629 37.85 37.388 37.316 37.2946 37.9965L37.4704 38.0234L37.7545 38.0402ZM20.0285 27.26C19.6191 27.241 20.04 26.7474 20.0285 27.26V27.26ZM16.1051 24.6028C15.4274 24.455 15.9269 23.6261 16.1051 24.6028V24.6028ZM17.0408 24.8324C16.1844 24.5503 17.0522 24.5189 17.0408 24.8324V24.8324ZM17.5753 25.0889C17.4208 24.9665 17.4543 25.2431 17.5753 25.0889V25.0889ZM20.9395 27.1958C20.5646 27.0905 21.098 27.0538 20.9395 27.1958V27.1958ZM17.2194 24.5105C16.1356 24.4 17.1289 23.7729 17.2194 24.5105V24.5105ZM15.3011 23.2955C15.1141 23.4237 15.2737 22.9551 15.3011 23.2955V23.2955ZM15.5863 23.0851C15.3414 23.1365 15.5398 22.6813 15.5863 23.0851V23.0851ZM17.1626 24.0039C17.8293 23.7482 15.9486 23.475 17.0264 23.9556L17.1626 24.0039ZM38.2605 36.7273C37.7183 36.6092 38.6871 36.3454 38.2605 36.7273V36.7273ZM40.8093 38.0172C40.3789 38.0821 40.9802 37.5234 40.8093 38.0172V38.0172ZM17.3241 23.1972C16.7955 23.292 17.3942 22.7195 17.3241 23.1972V23.1972ZM15.081 21.7299C14.9605 21.0556 14.9771 19.8719 16.1294 20.272C14.5911 20.5701 17.1941 22.1387 16.8653 20.9002C17.5122 20.9311 18.1308 20.5271 17.7913 21.1404C19.0658 21.003 19.9493 19.924 21.1803 20.0752C22.1392 19.9512 23.1877 19.8573 24.221 19.4805C25.0708 19.4206 25.8886 18.5276 25.4228 17.9982C24.2641 17.9025 23.0514 18.0441 21.7708 18.2927C20.3518 18.5805 19.0626 19.1279 17.6309 19.3627C16.2353 19.5457 17.9115 19.867 17.5119 19.9385C16.7836 20.1854 18.3803 20.3518 17.4174 20.6118C16.8227 20.5014 16.2039 20.3019 16.4578 19.6899C15.1209 19.8594 13.9461 20.401 15.0024 21.7293L15.081 21.7299ZM18.3023 20.1282C18.6158 19.0009 19.9816 21.0559 18.8161 20.2778C18.6769 20.1762 18.448 20.0932 18.3023 20.1282ZM18.3633 19.5815C18.6038 19.7661 18.8158 19.2525 18.3633 19.5815V19.5815ZM18.9377 19.5905C18.9786 19.0717 20.2529 19.8651 19.1479 19.7773L18.9377 19.5905ZM19.7236 19.2819C19.806 19.5733 20.0106 18.9547 19.7236 19.2819V19.2819ZM19.9247 19.1505C20.4024 18.59 22.6305 18.7927 20.9995 19.0959C20.5625 18.7745 20.2276 19.2854 19.9247 19.1505ZM22.8324 18.7129C22.7595 17.1818 24.2768 19.2571 22.8324 18.7129V18.7129ZM23.6573 18.7086C23.9589 17.9369 24.8278 18.3989 23.7968 18.5534C23.8193 18.6356 23.7666 18.9518 23.6573 18.7086ZM16.9986 22.801C16.0419 22.3335 17.9 22.2622 16.9986 22.801V22.801ZM17.6652 22.9818C16.9784 22.8488 17.9811 22.6538 17.6652 22.9818V22.9818ZM15.7015 21.6211C15.092 21.4742 16.2163 21.2348 15.7015 21.6211V21.6211ZM42.3137 37.8758C41.9201 38.0778 42.3286 37.4277 42.3137 37.8758V37.8758ZM39.6095 36.074C39.262 36.1191 39.6864 35.5581 39.6095 36.074V36.074ZM43.0572 38.0497C43.7773 38.052 45.2389 37.8312 43.6722 37.832C43.4265 37.8695 42.2398 37.8614 43.0572 38.0497ZM18.2512 22.6656C18.8339 22.6265 19.163 22.038 18.1385 22.0719C16.5509 21.9113 19.5392 22.6026 17.9349 22.4049C17.7192 22.5442 18.2389 22.7041 18.2512 22.6656ZM18.7643 22.9191C18.5843 23.1132 18.7035 22.5539 18.7643 22.9191V22.9191ZM19.3731 21.3342C19.0233 21.2524 19.6261 21.028 19.3731 21.3342V21.3342ZM17.4352 18.1715C18.4752 17.8261 19.8974 17.438 20.3883 18.3416C19.8887 17.7543 20.1867 17.1763 20.6586 18.0349C21.3261 18.9037 21.6602 17.6397 21.2262 17.3484C21.7208 17.9485 22.2836 18.232 21.5574 17.3864C22.3465 16.4597 19.9774 17.5077 19.439 17.4972C19.1798 17.6106 16.7642 18.0986 17.4352 18.1717V18.1715ZM18.0448 17.0319C18.6379 16.5949 20.0959 17.2919 19.1604 16.5976C19.0687 16.5187 17.1114 17.124 18.0448 17.0319ZM20.207 17.119C20.9011 17.1364 19.9076 16.2085 20.7347 16.6291C20.599 16.1957 19.7717 16.1145 19.3673 15.9414C19.1386 16.3376 19.8329 17.1243 20.207 17.1191V17.119ZM18.4238 15.2028C18.003 15.364 18.664 14.885 18.4238 15.2028V15.2028ZM19.3076 15.4094C20.4263 15.2646 19.0225 14.9392 19.0822 15.3977L19.3076 15.4094ZM17.6575 14.1486C16.8699 13.1448 19.1388 14.3173 18.3385 13.2663C17.665 12.7427 17.0178 13.8556 17.6574 14.1486H17.6575ZM27.7655 19.4642C28.1267 18.8389 26.2741 18.6214 27.5221 19.2425C27.6369 19.2802 27.6111 19.5074 27.7655 19.4642Z"
                      fill="currentColor"
                    />
                  </svg>
                  Flask
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <Image
                    src="/fastapi.svg"
                    alt=""
                    width={65}
                    height={65}
                    className="drop-shadow-xs/90"
                  />
                  FastAPI
                </div>
                <div className="gallery__item flex h-20 w-full items-center justify-center rounded-xl border border-gray-400/60 bg-gray-400/30 shadow-lg dark:border-gray-600 dark:bg-gray-800/80">
                  <span className="px-2">SQL</span>
                  <span className="mx-3 h-6 border-l border-gray-600 dark:border-gray-500"></span>
                  <span className="px-2">MySQL</span>
                  <Image
                    src="/mysql.svg"
                    alt=""
                    width={65}
                    height={65}
                    className="drop-shadow-xs/10"
                  />
                </div>
              </div>

              {/* Right */}
              <div
                data-speed="0.9"
                className="gallery__right flex w-full max-w-md flex-col gap-y-4 pb-10 text-gray-800 will-change-transform dark:text-gray-200"
              >
                <div className="gallery__item mt-20 flex w-full items-center justify-center text-6xl font-bold md:mt-0">
                  Soft Skills
                </div>
                <div className="flex flex-col gap-y-4">
                  {skills.map(s => (
                    <SkillCard key={s.title} {...s} />
                  ))}
                </div>
              </div>
            </main>
            {/* </div> */}
          </div>
          <div data-speed="1.5" className="geekbrains relative h-0 -translate-y-80 p-4">
            <GeekBrains />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

// 'use client';
// // import { Zen_Dots } from 'next/font/google';
// import Image from 'next/image';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { TextPlugin } from 'gsap/TextPlugin';
// import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';

// // const geistZen = Zen_Dots({
// //   weight: '400', // Zen Dots доступен только с этим весом
// //   subsets: ['latin'],
// // });

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin, useGSAP);

// export default function SmoothScrollPage() {
//   const smoother = useRef();

//   useGSAP(() => {
//     smoother.current = ScrollSmoother.create({
//       smooth: 2.5,
//       effects: true,
//       normalizeScroll: true,
//     });

//     //replaces yourElement's text with "This is the new text"
//     gsap.to('.stagnation', {
//       duration: 1,
//       text: 'stagnation',
//       ease: 'power2.inOut',
//       delay: 2,
//       repeat: 100,
//     });

//     // Исчезновение hero
//     gsap.fromTo(
//       '.hero-section',
//       { opacity: 1 },
//       {
//         opacity: 0,
//         scrollTrigger: {
//           trigger: '.hero-section',
//           start: 'center',
//           end: '600',
//           scrub: true,
//         },
//       },
//     );

//     // Галерея — элементы слева
//     gsap.utils.toArray('.gallery__left .gallery__item').forEach(item => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, x: -100, scale: 0.9 },
//         {
//           opacity: 1,
//           x: 0,
//           scale: 1,
//           duration: 1.2,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 90%',
//             end: 'top 40%',
//             scrub: true,
//           },
//         },
//       );
//     });

//     // Галерея — элементы справа
//     gsap.utils.toArray('.gallery__right .gallery__item').forEach(item => {
//       gsap.fromTo(
//         item,
//         { opacity: 0, x: 100, scale: 0.9 },
//         {
//           opacity: 1,
//           x: 0,
//           scale: 1,
//           duration: 1.2,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 90%',
//             end: 'top 40%',
//             scrub: true,
//           },
//         },
//       );
//     });
//   }, []);

//   return (
//     <div id="smooth-wrapper ">
//       <div className="will-change-transform" id="smooth-content">
//         {/* Hero Section */}
//         <header className="hero-section relative">
//           <div
//             data-speed=".6"
//             className="hero absolute left-70 z-10 flex w-[90vw] max-w-[700px] -translate-x-1/2 transform sm:left-2/3"
//           >
//             <Image
//               src="/img/hero.png"
//               alt="Hero image"
//               width={400}
//               height={400}
//               className="h-full w-full object-cover"
//               priority
//             />
//           </div>
//           <div className="container mx-auto px-[2vw]">
//             <div data-speed=".75" className="main-header max-w-6xs relative h-180 text-9xl">
//               <h1
//                 className={
//                   'main-title absolute bottom-[30vh] left-20 leading-[0.9] text-gray-50 uppercase'
//                 }
//               >
//                 super position
//               </h1>
//             </div>
//             <div
//               data-speed=".75"
//               className="stagnation relative bottom-[20vh] left-20 w-1200 bg-amber-800 p-2 text-3xl font-semibold text-gray-50 uppercase"
//             >
//               <h1>stagnation</h1>
//             </div>
//           </div>
//         </header>

//         {/* Portfolio Gallery */}

//         <div className="portfolio">
//           <div className="container mx-auto px-[7vw]">
//             <main className="gallery flex py-[calc(1vw_+_1vh_*_20)]">
//               {/* Left Column */}
//               <div
//                 data-speed=".9"
//                 className="gallery__left mt-[calc(1vw_+_1vh_*_7.5_*_1.75)] flex flex-1 flex-col items-center"
//               >
//                 <div className="gallery__item mb-[calc(1vw_+_1vh_*_7.5)] max-h-[540vh] max-w-[540vh] overflow-hidden rounded-lg will-change-transform">
//                   <Image
//                     src="/img/work/1.jpg"
//                     alt="Work 1"
//                     width={400}
//                     height={400}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item mb-[calc(1vw_+_1vh_*_7.5)] max-h-[300vh] max-w-[calc(1vw_+_1vh_*_50)] overflow-hidden rounded-lg will-change-transform">
//                   <video
//                     src="/img/work/v2.mp4" // Убедитесь, что видео лежит в public/videos/
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <div className="text-block gallery__item relative mb-[calc(1vw_+_1vh_*_7.5)] max-w-[calc(1vw_+_1vh_*_50)] text-gray-200">
//                   <h2 className="text-block__h mb-6 text-4xl leading-[2.4rem]">
//                     Creative floating scroll with amazing parallax effect
//                   </h2>
//                   <p className="text-block__p leading-[1.75]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     amount scrolling.
//                   </p>
//                 </div>

//                 <div className="gallery__item mb-[calc(1vw_+_1vh_*_7.5)] h-100 w-120 overflow-hidden rounded-lg will-change-transform">
//                   <Image
//                     src="/img/work/6.jpg"
//                     alt="Work 6"
//                     width={400}
//                     height={400}
//                     className="h-full w-full object-cover object-[10%_15%]"
//                   />
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div data-speed="1.4" className="gallery__right flex flex-1 flex-col items-center">
//                 <div className="text-block gallery__item relative mb-[calc(1vw_+_1vh_*_7.5)] max-w-[calc(1vw_+_1vh_*_50)] text-gray-200">
//                   <h2 className="text-block__h mb-6 text-4xl leading-[2.4rem]">
//                     Creative floating scroll with amazing parallax effect
//                   </h2>
//                   <p className="text-block__p leading-[1.75]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     amount scrolling.
//                   </p>
//                 </div>

//                 <div className="gallery__item max-h-[180vh] max-w-[calc(1vw_+_1vh_*_47)] overflow-hidden rounded-lg will-change-transform">
//                   <video
//                     src="/img/work/v1.mp4" // Убедитесь, что видео лежит в public/videos/
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] max-w-[calc(1vw_+_1vh_*_50)] overflow-hidden rounded-lg will-change-transform">
//                   <Image
//                     src="/img/work/5.jpg"
//                     alt="Work 5"
//                     width={400}
//                     height={400}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <div className="gallery__item mt-[calc(1vw_+_1vh_*_7.5)] max-h-[180vh] max-w-[calc(1vw_+_1vh_*_50)] overflow-hidden rounded-lg will-change-transform">
//                   <Image
//                     src="/img/work/3.jpg"
//                     alt="Work 3"
//                     width={400}
//                     height={400}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <div className="text-block gallery__item relative mt-[calc(1vw_+_1vh_*_10)] max-w-[calc(1vw_+_1vh_*_50)] text-gray-200">
//                   <h2 className="text-block__h mb-6 text-4xl leading-[2.4rem]">
//                     Creative floating scroll with amazing parallax effect
//                   </h2>
//                   <p className="text-block__p leading-[1.75]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                     amount scrolling.
//                   </p>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

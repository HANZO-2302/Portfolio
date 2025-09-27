'use client';
import './Backgrounddots.css';
import React, { useEffect, useState } from 'react';

type BackgroundDotsProps = {
  count?: number;
};

type DotData = {
  wrapper: {
    top: string;
    right: string;
    animationDuration: string;
    animationDelay: string;
  };
  dot: {
    size: number;
    transformOrigin: string;
    animationDuration: string;
    animationDelay: string;
  };
};

export default function BackgroundDots({ count = 50 }: BackgroundDotsProps) {
  const [dotsData, setDotsData] = useState<DotData[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data: DotData[] = Array.from({ length: count }, () => {
        const wrapperAnimationDuration = `${Math.random() * 50 + 20}s`;
        const wrapperAnimationDelay = `${-(Math.random() * 20)}s`;
        const dotAnimationDuration = `${Math.random() * 20 + 10}s`;
        const dotAnimationDelay = `${-(Math.random() * 10)}s`;

        const dotSize = Math.random() * 5; //Размер точки
        const transformOriginX = `${Math.random() > 0.5 ? '-' : ''}${Math.floor(
          Math.random() * 100,
        )}px`;
        const transformOriginY = `${Math.random() > 0.5 ? '-' : ''}${Math.floor(
          Math.random() * 15,
        )}px`;

        return {
          wrapper: {
            top: `${Math.random() * 90 + 5}%`,
            right: `${Math.random() * 90 + 5}%`,

            animationDuration: wrapperAnimationDuration,
            animationDelay: wrapperAnimationDelay,
          },
          dot: {
            size: dotSize,
            transformOrigin: `${transformOriginX} ${transformOriginY}`,
            animationDuration: dotAnimationDuration,
            animationDelay: dotAnimationDelay,
          },
        };
      });

      setDotsData(data);
    }
  }, [count]);

  return (
    <div className="bg relative z-0">
      {dotsData.map((data, i) => (
        <div
          key={i}
          className={`dotWrapper dotWrapper-${i + 1}`}
          style={{
            top: data.wrapper.top,
            right: data.wrapper.right,
            animation: `flying ${data.wrapper.animationDuration} ease-in-out ${data.wrapper.animationDelay} infinite alternate`,
            position: 'fixed',
          }}
        >
          <div
            className={`dot dot-${i + 1} rounded-full bg-gray-500 dark:bg-[#e0e0e0]`}
            style={{
              width: `${data.dot.size}px`,
              height: `${data.dot.size}px`,
              transformOrigin: data.dot.transformOrigin,
              animation: `
                rotating ${data.dot.animationDuration} ease-in-out ${data.dot.animationDelay} infinite,
                colorChange 100s  ease-in-out infinite
              `,
              willChange: 'transform',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

'use client';

import { useState, useRef, MouseEvent } from 'react';
import './SubmitButton.css';
import Link from 'next/link';

const SubmitButton = () => {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    setPosition({
      top: e.clientY - rect.top,
      left: e.clientX - rect.left,
    });

    const clickEffect = button.querySelector<HTMLSpanElement>('.click');
    if (clickEffect) {
      clickEffect.classList.remove('feedback');
      void clickEffect.offsetWidth; // Trigger reflow
      clickEffect.classList.add('feedback');
    }
  };

  return (
    <div
      ref={buttonRef}
      onClick={handleClick}
      className="submit_btn z-10 transition-transform duration-300"
    >
      <span className="click" style={{ top: position.top, left: position.left }}></span>
      <Link href={'/contacts'}>Contacts</Link>
    </div>
  );
};

export default SubmitButton;

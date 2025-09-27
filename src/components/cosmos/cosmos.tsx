'use client';
import React, { useEffect, useRef } from 'react';

const PARTICLE_NUM = 10;
const PARTICLE_BASE_RADIUS = 0.5;
const FL = 1000;
const DEFAULT_SPEED = 0.3;
const BOOST_SPEED = 0.5;

type Particle = {
  x: number;
  y: number;
  z: number;
  pastZ: number;
};

const Cosmos: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const speedRef = useRef(DEFAULT_SPEED);
  const targetSpeedRef = useRef(DEFAULT_SPEED);
  const mouse = useRef({ x: 0, y: 0 });
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      contextRef.current = canvas.getContext('2d');
    };

    resize();
    window.addEventListener('resize', resize);

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    const randomizeParticle = (p: Particle): Particle => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.z = Math.random() * 1500 + 500;
      return p;
    };

    // init particles
    particlesRef.current = Array.from({ length: PARTICLE_NUM }, () =>
      randomizeParticle({ x: 0, y: 0, z: 0, pastZ: 0 }),
    );

    // mouse handlers
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onMouseDown = () => {
      targetSpeedRef.current = BOOST_SPEED;
    };
    const onMouseUp = () => {
      targetSpeedRef.current = DEFAULT_SPEED;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const loop = () => {
      const ctx = contextRef.current;
      if (!ctx || !canvas) return;

      const cx = centerX() - (mouse.current.x - centerX()) * 0;
      const cy = centerY() - (mouse.current.y - centerY()) * 0;

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.005; //-----------------------------------------

      // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // с хвостом звезды
      // ctx.fillRect(0, 0, canvas.width, canvas.height); // с хвостом звезды
      ctx.clearRect(0, 0, canvas.width, canvas.height); // прозрачный фон
      ctx.beginPath();

      for (let i = 0; i < PARTICLE_NUM; i++) {
        const p = particlesRef.current[i];
        p.pastZ = p.z;
        p.z -= speedRef.current;

        if (p.z <= 0) {
          randomizeParticle(p);
          continue;
        }

        const rx = p.x - cx;
        const ry = p.y - cy;

        const f = FL / p.z;
        const x = cx + rx * f;
        const y = cy + ry * f;
        const r = PARTICLE_BASE_RADIUS * f;

        const pf = FL / p.pastZ;
        const px = cx + rx * pf;
        const py = cy + ry * pf;
        const pr = PARTICLE_BASE_RADIUS * pf;

        const a = Math.atan2(py - y, px - x);
        const a1 = a + Math.PI * 0.5;
        const a2 = a - Math.PI * 0.5;

        ctx.moveTo(px + pr * Math.cos(a1), py + pr * Math.sin(a1));
        ctx.arc(px, py, pr, a1, a2, true);
        ctx.lineTo(x + r * Math.cos(a2), y + r * Math.sin(a2));
        ctx.arc(x, y, r, a2, a1, true);
        ctx.closePath();
      }

      ctx.fillStyle = '#D1D5DC';
      ctx.fill();

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full transform-gpu bg-transparent will-change-transform"
    />
  );
};

export default Cosmos;

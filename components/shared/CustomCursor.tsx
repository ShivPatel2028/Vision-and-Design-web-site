'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX - 20) * 0.12;
      ringY += (mouseY - ringY - 20) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    requestAnimationFrame(animate);

    const handleOver = () => {
      dot.style.transform += ' scale(1.5)';
      ring.style.width = '60px';
      ring.style.height = '60px';
    };
    const handleOut = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
    };

    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleOver);
      el.addEventListener('mouseleave', handleOut);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleOver);
        el.removeEventListener('mouseleave', handleOut);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-[#C8A97E] pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#C8A97E]/50 pointer-events-none z-[9998] transition-[width,height] duration-300 hidden md:block"
      />
    </>
  );
}

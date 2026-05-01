'use client';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9999] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #C8A97E, #E8D5B7)',
        transition: 'width 0.1s linear',
      }}
    />
  );
}

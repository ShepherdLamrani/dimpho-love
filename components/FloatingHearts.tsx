
import React, { useMemo } from 'react';
import { HeartProps } from '../types';

const Heart: React.FC<HeartProps> = ({ left, duration, size, delay }) => (
  <div
    className="floating-heart text-pink-300 opacity-20"
    style={{
      left,
      animationDuration: duration,
      fontSize: size,
      animationDelay: delay,
    }}
  >
    ❤
  </div>
);

const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      size: `${20 + Math.random() * 30}px`,
      delay: `${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((h, i) => (
        <Heart key={i} {...h} />
      ))}
    </div>
  );
};

export default FloatingHearts;

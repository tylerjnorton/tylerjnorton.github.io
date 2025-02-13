import React, { useEffect, useState } from 'react';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      // Check if the element or its parent is a link or button
      const isClickable = target.closest('a, button') !== null;
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className={`
        rounded-full transition-all duration-200
        ${isPointer ? 'w-12 h-12 bg-yellow-400' : 'w-4 h-4 bg-white opacity-50'}
      `} />
    </div>
  );
}
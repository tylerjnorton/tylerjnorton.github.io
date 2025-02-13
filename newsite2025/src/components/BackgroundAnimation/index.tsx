import React from 'react';

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-background overflow-hidden opacity-30">
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl animate-blob1" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-blob2" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-3xl animate-blob3" />
    </div>
  );
}
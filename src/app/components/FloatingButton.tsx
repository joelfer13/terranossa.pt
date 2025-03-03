"use client";

import React from "react";

export default function FloatingButton() {
  const scrollToTop = () => {
    const scrollDuration = 250; // 🔥 Tempo reduzido para um scroll mais rápido
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      
      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce transition z-[9999]"
    >
      <svg
        className="w-6 h-6 transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-6-6 6 6 6-6" />
      </svg>
    </button>
  );
}
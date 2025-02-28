"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        const cursorSize = 32; // Define o tamanho do cursor
        requestAnimationFrame(() => {
          cursorRef.current!.style.transform = `translate(${e.clientX - cursorSize / 2}px, ${e.clientY - cursorSize / 2}px)`;
        });
      }
    };

    const mouseOverHandler = () => {
      if (cursorRef.current) cursorRef.current.classList.add("hover");
    };

    const mouseOutHandler = () => {
      if (cursorRef.current) cursorRef.current.classList.remove("hover");
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
      el.addEventListener("mouseenter", mouseOverHandler);
      el.addEventListener("mouseleave", mouseOutHandler);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, input, textarea, select").forEach((el) => {
        el.removeEventListener("mouseenter", mouseOverHandler);
        el.removeEventListener("mouseleave", mouseOutHandler);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}

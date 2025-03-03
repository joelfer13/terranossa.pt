"use client";

import { HiX } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Overlay({ isOpen, onClose }: OverlayProps) {
  // Declare scrollPosition and setScrollPosition using useState
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollPosition.current = window.scrollY;
  
      // Bloqueia o scroll mantendo a posição atual
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = "0";
      document.body.style.width = "100%";
    } else {
      // Restaura o scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      
      // Mantém a posição do scroll original
      window.scrollTo(0, scrollPosition.current);
    }
  
    return () => {
      // Garante que tudo volta ao normal ao desmontar
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition.current);
    };
  }, [isOpen]);
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-transparent flex flex-col items-center justify-center z-[9999] backdrop-blur-3xl"
        >
          <button onClick={onClose} className="absolute top-10 right-10 text-4xl text-white">
            <HiX />
          </button>
          <ul className="text-3xl font-semibold text-white space-y-6 text-center">
            <li>
              <Link href="/" onClick={onClose} className="text-[#3c5e48] hover:underline cursor-pointer">Início</Link>
            </li>
            <li>
              <Link href="/quinta" onClick={onClose} className="text-[#3c5e48] hover:underline cursor-pointer">Quinta</Link>
            </li>
            <li>
  <Link href="/?scrollTo=about" onClick={onClose} className="text-[#3c5e48] hover:underline cursor-pointer">Sobre</Link>
</li>

            <li className="hover:underline cursor-pointer">
            <Link href="/contactos" onClick={onClose} className="text-[#3c5e48] hover:underline cursor-pointer">Contactos</Link>
            </li>
            <li>
              <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer text-green-600">Reservas</a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
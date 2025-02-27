"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  { src: "/images/quinta-hero.jpg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-hero2.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-hero3.jpg", alt: "Vista da Quinta 3" },
];

export default function Quinta() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 10000); // Troca a cada 10 segundos
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setNextSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 500); // Tempo para a transição ocorrer
  };

  const goToPrevSlide = () => {
    setNextSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 500); // Tempo para a transição ocorrer
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Slideshow */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Imagem atual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </motion.div>
          </AnimatePresence>

          {/* Próxima imagem (pré-carregada) */}
          <motion.div
            key={nextSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ pointerEvents: "none" }} // Evita interação com a próxima imagem
          >
            <Image
              src={slides[nextSlide].src}
              alt={slides[nextSlide].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </motion.div>
        </div>

        <h1 className="relative z-10 text-5xl font-bold">A Nossa Quinta</h1>

        {/* Controles de navegação */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
}
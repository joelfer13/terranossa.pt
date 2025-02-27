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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Muda de imagem a cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Slideshow */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) =>
              index === currentSlide ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }} // Mais rápido e sem branco
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        <h1 className="relative z-10 text-5xl font-bold">A Nossa Quinta</h1>

        {/* Controles de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <FiChevronRight />
        </button>
      </section>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Poppins } from "next/font/google"; // 🔥 Importa a fonte Poppins

const poppins = Poppins({ weight: "700", subsets: ["latin"] });

const slides = [
  {
    type: "video",
    src: "/videos/carronatureza.mp4",
    title: (
      <>
        Bem-vindo à <span className={`${poppins.className}`}>Terra Nossa</span>
      </>
    ),
    description:
      "Uma experiência inesquecível num espaço onde a natureza e o bem-estar andam de mãos dadas.",
  },
  {
    type: "video",
    src: "/videos/estrelas.mp4",
    title: "Refúgio Perfeito",
    description: "Na Terra Nossa, celebramos a riqueza da Nossa Terra",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* 🔥 Fundo dinâmico com fade */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === "video" ? (
              <video
                src={slides[currentSlide].src}
                autoPlay
                loop
                muted
                playsInline // 🔥 Impede tela cheia no iPhone
                controls={false} // 🔥 Remove controles de vídeo
                disablePictureInPicture // 🔥 Bloqueia PIP (modo flutuante)
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" // 🔥 Impede interações
              />
            ) : (
              <Image
                src={slides[currentSlide].src}
                alt="Slide background"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔥 Conteúdo central com fade */}
      <div className="relative z-10 max-w-4xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">{slides[currentSlide].title}</h1>
            <p className="mt-6 text-base md:text-lg opacity-90">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 🔥 Controles de navegação */}
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
  );
}

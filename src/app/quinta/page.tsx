"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import FloatingButton from "@/app/components/FloatingButton";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import { Poppins } from "next/font/google"; // 🔥 Importa a fonte Poppins corretamente

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });

const slides = [
  { src: "/images/quinta-hero.jpg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-hero2.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-hero3.jpg", alt: "Vista da Quinta 3" },
];

const galleryImages = [
  { src: "/images/quinta-1.jpg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-2.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-3.jpg", alt: "Vista da Quinta 3" },
];

export default function Quinta() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextGalleryImage = () => {
    setDirection(1);
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setDirection(-1);
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <main className={`min-h-screen bg-[#FAF7F2] text-gray-900 ${poppins.variable}`}>
      {/* Hero Slideshow */}
      <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
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
        </div>
        {/* Texto fixo da Quinta ajustado */}
        <div className="absolute bottom-24 w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold drop-shadow-lg border-b-4 border-white pb-2 inline-block font-[Poppins]">Quinta</h1>
            <p className="mt-3 text-base md:text-xl opacity-90 drop-shadow-md font-[Poppins]">Descubra um refúgio de serenidade, onde a natureza e o conforto se unem para criar momentos inesquecíveis.</p>
          </motion.div>
        </div>
      </section>

      {/* Nova Secção com Descrição e Galeria */}
      <section className="max-w-6xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeInOnScroll>
          <div>
            <h2 className="text-4xl font-semibold text-[#4b6449] mb-4 border-b-4 border-[#4b6449] inline-block pb-2">Terra Nossa</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Situada num cenário idílico, a nossa quinta oferece um retiro perfeito para quem busca tranquilidade e conexão com a natureza.
              Com paisagens deslumbrantes e um ambiente acolhedor, garantimos uma experiência única para cada visitante.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={galleryImages[currentGalleryImage].src}
              initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={galleryImages[currentGalleryImage].src}
                alt={galleryImages[currentGalleryImage].alt}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Controles de navegação */}
          <button
            onClick={prevGalleryImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-900 p-3 rounded-full shadow-md hover:bg-opacity-100"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={nextGalleryImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-gray-900 p-3 rounded-full shadow-md hover:bg-opacity-100"
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {/* Botão flutuante */}
      <FloatingButton />
    </main>
  );
}

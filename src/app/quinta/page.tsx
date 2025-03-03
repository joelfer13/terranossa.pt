"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FloatingButton from "@/app/components/FloatingButton";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import { Poppins } from "next/font/google";
import Carousel from "@/app/components/Carousel";

// Configuração da fonte Poppins
const poppins = Poppins({
  weight: ["400", "600"], // Pesos da fonte
  subsets: ["latin"], // Subconjunto de caracteres
});

const slides = [
  { src: "/images/quinta-hero.jpg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-hero2.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-hero3.jpg", alt: "Vista da Quinta 3" },
];

export default function Quinta() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-gray-900 overflow-hidden">
      {/* 🔥 Hero Slideshow */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
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
        {/* 🔥 Texto fixo da Quinta ajustado */}
        <div className="absolute bottom-16 w-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className={`text-4xl md:text-6xl font-semibold drop-shadow-lg border-b-4 border-white pb-2 inline-block ${poppins.className}`}>
              Quinta
            </h1>
            <p className={`mt-3 text-base md:text-xl opacity-90 drop-shadow-md ${poppins.className}`}>
              Descubra um refúgio de serenidade, onde a natureza e o conforto se unem para criar momentos inesquecíveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔥 Nova Secção com Descrição e Carrossel */}
      <section className="max-w-6xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeInOnScroll>
          <div>
            <h2 className={`text-4xl font-semibold text-[#4b6449] mb-4 border-b-4 border-[#4b6449] inline-block pb-2 ${poppins.className}`}>
              Terra Nossa
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mt-4 ${poppins.className}`}>
              Situada num cenário idílico, a nossa quinta oferece um retiro perfeito para quem busca tranquilidade e conexão com a natureza.
              Com paisagens deslumbrantes e um ambiente acolhedor, garantimos uma experiência única para cada visitante.
            </p>
          </div>
        </FadeInOnScroll>
        <div>
          <Carousel />
        </div>
      </section>

      {/* 🔥 Botão de Reservar */}
      <FadeInOnScroll>
        <section className="text-center py-16">
          <a
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 text-white bg-green-600 hover:bg-green-700 rounded-lg text-xl shadow-md transition duration-300 transform hover:scale-105 ${poppins.className}`}
          >
            Reservar
          </a>
        </section>
      </FadeInOnScroll>

      {/* 🔥 Localização */}
      <FadeInOnScroll>
        <section className="w-full bg-gray-100 py-5">
          <h2 className={`text-3xl font-semibold text-center mb-6 text-[#4b6449] ${poppins.className}`}>
            Localização
          </h2>
          <div className="max-w-6xl mx-auto px-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.07562568391!2d-7.776643699999999!3d41.29213370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3b496eb37de74f%3A0x993972f655d99c9!2sTerra%20Nossa.%20Masterplanet%20Lda!5e0!3m2!1sen!2spt!4v1740671185377!5m2!1sen!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>
      </FadeInOnScroll>

      {/* 🔥 Botão flutuante */}
      <FloatingButton />
    </main>
  );
}

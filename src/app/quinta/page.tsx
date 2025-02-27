"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import FloatingButton from "@/app/components/FloatingButton";
import FadeInOnScroll from "@/app/components/FadeInOnScroll"; // 🔥 Importa o efeito de fade-in

const slides = [
  { src: "/images/quinta-hero.jpg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-hero2.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-hero3.jpg", alt: "Vista da Quinta 3" },
];

export default function Quinta() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      startAutoSlide();
    }, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => resetTimeout();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Slideshow */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].src}
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

      {/* Descrição da Quinta */}
      <FadeInOnScroll>
        <section className="max-w-4xl mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Sobre a Quinta</h2>
          <p className="text-lg text-gray-700">
            A nossa quinta é um refúgio de tranquilidade, rodeada pela natureza e com uma vista incrível.
            Perfeita para relaxar, explorar e desfrutar de momentos únicos com a família e amigos.
          </p>
        </section>
      </FadeInOnScroll>

      {/* Galeria de Imagens */}
      <FadeInOnScroll>
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-semibold text-center mb-6">Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image src="/images/quarto1.jpg" alt="Quarto 1" width={400} height={300} className="rounded-lg shadow-lg object-cover w-full h-60"/>
            <Image src="/images/quarto2.jpg" alt="Quarto 2" width={400} height={300} className="rounded-lg shadow-lg object-cover w-full h-60"/>
            <Image src="/images/quarto3.jpg" alt="Quarto 3" width={400} height={300} className="rounded-lg shadow-lg object-cover w-full h-60"/>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Botão de Reservar */}
      <FadeInOnScroll>
        <section className="text-center py-16">
          <a
            href="https://www.booking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg text-xl shadow-md transition"
          >
            Reservar no Booking
          </a>
        </section>
      </FadeInOnScroll>

      {/* Localização */}
      <FadeInOnScroll>
        <section className="w-full bg-gray-200 py-16">
          <h2 className="text-3xl font-semibold text-center mb-6">Localização</h2>
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

      {/* Botão flutuante */}
      <FloatingButton />
    </main>
  );
}

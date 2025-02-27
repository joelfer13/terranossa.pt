"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    type: "video",
    src: "/videos/video.mp4",
    title: "Route 25",
    description:
      "Autonomous, Intelligent, Interoperable and Inclusive Mobility Agenda",
  },
  {
    type: "image",
    src: "/images/planet.jpg",
    title: "Your Home",
    description: "To build your vision of mobility",
  },
];

const services = [
  { name: "Mobility Platform", icon: "🚗" },
  { name: "Intelligent Roads", icon: "🛣️" },
  { name: "Intelligent Operations", icon: "⚙️" },
  { name: "Mobility Services", icon: "🚀" },
  { name: "Advanced Air Mobility", icon: "✈️" },
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
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Fundo dinâmico com fade */}
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
            {slides[currentSlide].type === "video" ? (
              <video
                src={slides[currentSlide].src}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
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

      {/* Conteúdo central com fade */}
      <div className="relative z-10 max-w-4xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {services.map((service, index) => (
            <button
              key={index}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              <span className="text-xl">{service.icon}</span>
              <span className="text-sm font-medium">{service.name}</span>
            </button>
          ))}
        </motion.div>
      </div>

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
  );
}

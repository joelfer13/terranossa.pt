"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react"; // Importe o React para usar React.ReactNode

interface FadeInOnScrollProps {
  children: React.ReactNode; // Defina o tipo da prop children
}

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
  const [ref, inView] = useInView({
    triggerOnce: true, // A animação só ocorre uma vez
    threshold: 0.1, // Define quanto do elemento precisa estar visível para disparar a animação
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Inicia invisível e ligeiramente deslocado para baixo
      animate={inView ? { opacity: 1, y: 0 } : {}} // Anima para visível e sem deslocamento
      transition={{ duration: 0.6, ease: "easeOut" }} // Duração e suavização da animação
    >
      {children}
    </motion.div>
  );
}
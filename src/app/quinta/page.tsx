"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FloatingButton from "@/app/components/FloatingButton";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";
import { Poppins } from "next/font/google";
import Carousel from "@/app/components/Carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Configuração da fonte Poppins
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const slides = [
  { src: "/images/quinta-2.jpeg", alt: "Vista da Quinta 1" },
  { src: "/images/quinta-hero.jpg", alt: "Vista da Quinta 2" },
  { src: "/images/quinta-hero3.jpg", alt: "Vista da Quinta 3" },
];  


// **Galeria de Apartamentos e Espaços Comuns**
interface Space {
  title: string;
  desc: string;
  images: string[];
}

const apartamentos: Space[] = [
  {
    title: "Apart. Lua",
    desc: "Ambiente acolhedor e luminoso para relaxar.",
    images: ["/images/apart-lua.jpeg", "/images/apart-lua1.jpeg"],
  },
  {
    title: "Apart. Vénus",
    desc: "Elegância e conforto com um toque rústico.",
    images: ["/images/apart-venus.jpeg","/images/apart-venus1.jpeg"],
  },
  {
    title: "Apart. Sol",
    desc: "Espaço amplo com vista para o jardim.",
    images: [
      "/images/apart-sol1.jpeg",
      "/images/apart-sol2.jpeg",
      "/images/apart-sol3.jpeg",
      "/images/apart-sol4.jpeg",
    ],
  },
];

const espacosComuns: Space[] = [
  {
    title: "Sala",
    desc: "Sala espaçosa para momentos em família e amigos.",
    images: ["/images/sala.jpeg", "/images/sala1.jpeg"],
  },
  {
    title: "Cozinha",
    desc: "Cozinha totalmente equipada para as suas refeições.",
    images: [
      "/images/cozinha.jpeg",
      "/images/cozinha1.jpeg",
      "/images/cozinha2.jpeg",
    ],
  },
  {
    title: "Exterior",
    desc: "Vistas deslumbrantes da quinta e seus arredores.",
    images: [
      "/images/quinta-1.jpg",
      "/images/quinta-2.jpeg",
      "/images/quinta-3.jpg",
      "/images/quinta-4.jpeg",
      "/images/quinta-5.jpeg",
      "/images/quinta-6.jpeg",
      "/images/quinta-7.jpeg",
      "/images/quinta-10.jpeg",
    ],
  },
];
export default function Quinta() {
  const [currentSlide] = useState(0);

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
        {/* 🔥 Texto fixo da Quinta */}
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

      {/* 🔥 Secção Terra Nossa */}
      <section className="max-w-6xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <FadeInOnScroll>
          <div>
            <h2 className={`text-4xl font-semibold text-[#4b6449] mb-4 border-b-4 border-[#4b6449] inline-block pb-2 ${poppins.className}`}>
              Terra Nossa
            </h2>
            <p className={`text-lg text-gray-700 leading-relaxed mt-4 ${poppins.className}`}>
              Situada num cenário idílico, a nossa quinta oferece um retiro perfeito para quem busca tranquilidade e conexão com a natureza.
              Com um ambiente acolhedor, garantimos uma experiência única para cada visitante.
            </p>
          </div>
        </FadeInOnScroll>
        <div>
          <Carousel />
        </div>
      </section>

       {/* 🔥 Secção Interior da Quinta */}
<section className="w-full bg-white shadow-lg py-24">
  <div className="max-w-6xl mx-auto px-10">
    <FadeInOnScroll>
      <div className="text-center">
        <h2 className={`text-4xl font-semibold text-[#4b6449] mb-6 border-b-4 border-[#4b6449] inline-block pb-2 ${poppins.className}`}>
          Interior da Quinta
        </h2>
        <p className={`text-lg text-gray-700 mt-4 ${poppins.className}`}>
          Descubra os nossos apartamentos cuidadosamente decorados, onde o conforto e a elegância se encontram. Cada espaço foi pensado para proporcionar uma estadia relaxante e memorável, com detalhes que refletem o charme rústico e a modernidade.
        </p>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {apartamentos.map((item, index) => (
          <Slideshow key={index} title={item.title} desc={item.desc} images={item.images} />
        ))}
      </div>
    </FadeInOnScroll>
  </div>
</section>

      {/* 🔥 Secção Espaços Comuns */}
<section className="w-full bg-white shadow-lg py-16">
  <div className="max-w-6xl mx-auto px-10">
    <FadeInOnScroll>
      <div className="text-center">
        <h2 className={`text-4xl font-semibold text-[#4b6449] mb-6 border-b-4 border-[#4b6449] inline-block pb-2 ${poppins.className}`}>
          Espaços Comuns
        </h2>
        <p className={`text-lg text-gray-700 mt-4 ${poppins.className}`}>
          Explore os espaços partilhados da quinta, projetados para momentos de convívio e tranquilidade. Da sala aconchegante à cozinha totalmente equipada, cada ambiente foi criado para que se sinta em casa, rodeado pela beleza da natureza.
        </p>
      </div>
    </FadeInOnScroll>

    <FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {espacosComuns.map((item, index) => (
          <Slideshow key={index} title={item.title} desc={item.desc} images={item.images} />
        ))}
      </div>
    </FadeInOnScroll>
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

// **Componente de Slideshow para cada espaço**
function Slideshow({ title, desc, images }: { title: string; desc: string; images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Alternar imagens automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000); // Mudar a cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  // Mudar imagem manualmente
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg shadow-lg"
    >
      {/* Imagem atual */}
      <div className="relative w-full h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image src={images[currentIndex]} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>

    
      {/* Texto sobre a imagem */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] hover:bg-opacity-50 flex flex-col items-center justify-center transition-all p-4 text-center">
        <span className="text-white text-xl font-semibold">{title}</span>
        <span className="text-white text-sm mt-2">{desc}</span>
      </div>

      {/* Botões de navegação */}
      {/* {images.length > 1 && (
        <>
          <button onClick={prevImage} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <FaAngleLeft />
          </button>
          <button onClick={nextImage} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <FaAngleRight />
          </button>
        </>
      )} */}
    </motion.div>
  );
}
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import FadeInOnScroll from "@/app/components/FadeInOnScroll"; // Importe o FadeInOnScroll
import Image from 'next/image';

const images = [
  "/images/quinta-1.jpg",
  "/images/quinta-2.jpeg",
  "/images/quinta-3.jpg",
  "/images/quinta-4.jpeg",
  "/images/quinta-5.jpeg",
  "/images/quinta-6.jpeg",
  "/images/quinta-7.jpeg",
  "/images/quinta-10.jpeg",
  "/images/quinta-11.jpeg",
  "/images/quinta-12.jpeg",
  "/images/quinta-13.jpeg",
  "/images/quinta-14.jpeg"
];

const Carousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <FadeInOnScroll> {/* Envolva o carrossel com FadeInOnScroll */}
      <div className="relative max-w-3xl mx-auto h-[500px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Alojamento ${index + 1}`}
                width={800} // Ajusta conforme necessário
                height={500} // Ajusta conforme necessário
                className="w-full h-full object-cover rounded-2xl"
                priority={index === 0} // Para carregar a primeira imagem mais rápido
                unoptimized // Se necessário para imagens externas
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Setas de navegação personalizadas */}
        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className="absolute top-1/2 left-4 z-10 text-white text-5xl hover:scale-110 transition-transform"
        >
          <HiOutlineChevronLeft className="text-white" />
        </button>
        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className="absolute top-1/2 right-4 z-10 text-white text-5xl hover:scale-110 transition-transform"
        >
          <HiOutlineChevronRight className="text-white" />
        </button>

        {/* Estilização personalizada para os bullets */}
        <style jsx global>{`
          .swiper-pagination {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
          }
          .swiper-pagination-bullet {
            background-color: white !important;
            opacity: 1 !important;
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          .swiper-pagination-bullet-active {
            background-color: #4b6449 !important;
            transform: scale(1.3);
          }
        `}</style>
      </div>
    </FadeInOnScroll>
  );
};

export default Carousel;

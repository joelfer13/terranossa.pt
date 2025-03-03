"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "./components/Hero";
import FloatingButton from "@/app/components/FloatingButton";
import AboutUs from "@/app/components/AboutUs";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scrollTo") === "about") {
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          smoothScrollTo(aboutSection.offsetTop, 500); // Animação de 500ms
        }
      }, 300); // Pequeno atraso para garantir que o DOM está renderizado
    }
  }, [searchParams]);

  // Função de scroll animado
  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startY + (targetY - startY) * easeInOutQuad);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <main>
      <Hero />
      {/* Secção "About Us" */}
      <div id="about">
        <AboutUs />
      </div>
      <FloatingButton />
    </main>
  );
}
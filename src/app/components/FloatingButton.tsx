"use client";

import React from "react";

export default function FloatingButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // 🔥 Faz scroll suave para o topo
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce transition"
    >
      <svg
        className="w-8 h-8 transform rotate-180" // 🔄 Virar a seta para cima
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m-6-6 6 6 6-6"
        />
      </svg>
    </button>
  );
}

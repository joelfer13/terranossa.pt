"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-white">TerraNossa</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">
              Sobre Nós
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Serviços
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

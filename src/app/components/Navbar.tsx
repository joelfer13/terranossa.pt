"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span
                className={`text-xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Terra Nossa
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/about"
              className={`transition-colors ${
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              Sobre Nós
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              Contacto
            </Link>

            {/* Dropdown Alojamentos */}
            <div className="relative group">
              <button
                className={`transition-colors ${
                  scrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
                }`}
              >
                Alojamentos ▼
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href="/quinta"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Quinta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

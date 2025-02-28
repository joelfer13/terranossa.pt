"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const languages = [
    { code: "PT", label: "Português" },
    { code: "EN", label: "English" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // Esconde ao descer
      } else if (currentScrollY < lastScrollY) {
        setVisible(true); // Mostra ao subir
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "transparent" }} // Fundo transparente
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-white">Terra Nossa</span>
            </Link>
          </div>

          {/* Links de navegação */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className="text-lg text-white hover:text-gray-200 transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="/services"
              className="text-lg text-white hover:text-gray-200 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/contact"
              className="text-lg text-white hover:text-gray-200 transition-colors"
            >
              Contacto
            </Link>

            {/* Dropdown Alojamentos */}
            <div className="relative group">
              <button className="text-lg text-white hover:text-gray-200 transition-colors">
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

            {/* 🔥 Dropdown de Idiomas */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button className="text-white text-sm flex items-center space-x-1">
                <span>{selectedLanguage}</span>
                <span className="text-xs">{isLangOpen ? "▲" : "▼"}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white shadow-md rounded-md">
                  {languages
                    .sort((a, b) =>
                      a.code === selectedLanguage ? -1 : b.code === selectedLanguage ? 1 : 0
                    )
                    .map((lang) => (
                      <button
                        key={lang.code}
                        className={`block w-full px-4 py-2 text-sm text-gray-800 hover:text-red-600 ${
                          selectedLanguage === lang.code ? "text-red-600 font-semibold" : ""
                        }`}
                        onClick={() => {
                          setSelectedLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

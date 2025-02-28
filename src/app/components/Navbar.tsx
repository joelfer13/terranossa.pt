"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Poppins, League_Script } from "next/font/google";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const leagueScript = League_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("PT");

  const languages = [
    { code: "PT", label: "Português" },
    { code: "EN", label: "English" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
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
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 🔥 Logo e Nome */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold text-white leading-none ${poppins.className}`}>
                Terra Nossa
              </span>
              <span className={`text-3xl text-white relative top-[2px] leading-none ${leagueScript.className}`}>
                TN
              </span>
            </Link>
          </div>

          {/* 🔥 Links de navegação */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* 🔽 Dropdown Alojamentos */}
            <div
              className="relative"
              onMouseEnter={() => setIsAccommodationOpen(true)}
              onMouseLeave={() => setIsAccommodationOpen(false)}
            >
              <button className="text-lg text-white hover:text-gray-200 transition-colors flex items-center">
                Alojamentos
                <span
                  className={`ml-2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white transform transition-transform duration-200 ${
                    isAccommodationOpen ? "rotate-0" : "rotate-180"
                  }`}
                ></span>
              </button>

              {isAccommodationOpen && (
                <div
                  className="absolute left-0 mt-2 w-36 bg-[#ccccbc] shadow-lg rounded-none transition-opacity duration-300"
                  onMouseEnter={() => setIsAccommodationOpen(true)}
                  onMouseLeave={() => setIsAccommodationOpen(false)}
                >
                  <Link
                    href="/quinta"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-300 transition-colors"
                  >
                    Quinta
                  </Link>
                </div>
              )}
            </div>

            {/* 🔽 Dropdown de Idiomas */}
            <div
              className="relative"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <button className="text-white text-sm flex items-center space-x-1 leading-none">
                <span>{selectedLanguage}</span>
                <span
                  className={`w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white transform transition-transform duration-200 ${
                    isLangOpen ? "rotate-0" : "rotate-180"
                  }`}
                ></span>
              </button>

              {isLangOpen && (
                <div
                  className="absolute right-0 mt-2 w-28 bg-[#ccccbc] shadow-lg rounded-none transition-opacity duration-300"
                  onMouseEnter={() => setIsLangOpen(true)}
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  {languages
                    .sort((a, b) =>
                      a.code === selectedLanguage ? -1 : b.code === selectedLanguage ? 1 : 0
                    )
                    .map((lang) => (
                      <button
                        key={lang.code}
                        className={`block w-full px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
                          selectedLanguage === lang.code ? "text-[#647054] font-semibold" : "text-gray-900"
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
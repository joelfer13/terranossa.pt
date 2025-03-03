"use client";

import Link from "next/link";
import { Poppins, League_Script } from "next/font/google";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const leagueScript = League_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Português");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const accommodationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (accommodationRef.current && !accommodationRef.current.contains(event.target as Node)) {
        setIsAccommodationOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsNavbarVisible(false);
      } else {
        // Scrolling up or near the top
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleAccommodationClick = () => {
    setIsAccommodationOpen(false);
  };

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out bg-transparent ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold text-white leading-none ${poppins.className}`}>
                Terra Nossa
              </span>
              <span className={`text-3xl text-white leading-none ${leagueScript.className}`}>
                TN
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative" ref={accommodationRef}>
              <button
                onClick={() => setIsAccommodationOpen(!isAccommodationOpen)}
                className={`text-lg text-white hover:text-gray-200 transition-colors flex items-center ${poppins.className}`}
              >
                Alojamentos
                <span className="ml-2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white"></span>
              </button>

              {isAccommodationOpen && (
                <div className={`absolute left-0 mt-2 w-36 bg-[#ccccbc] shadow-lg rounded-md overflow-hidden ${poppins.className}`}>
                  <Link
                    href="/quinta"
                    onClick={handleAccommodationClick}
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-300 transition-colors"
                  >
                    Quinta
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={languageRef}>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`text-white text-sm flex items-center space-x-1 leading-none ${poppins.className}`}
              >
                <span>{selectedLanguage === "Português" ? "PT" : "EN"}</span>
                <span className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white"></span>
              </button>

              {isLanguageOpen && (
                <div className={`absolute right-0 mt-2 w-28 bg-[#ccccbc] shadow-lg rounded-md overflow-hidden ${poppins.className}`}>
                  <button
                    onClick={() => handleLanguageClick("Português")}
                    className={`block w-full px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
                      selectedLanguage === "Português" ? "text-[#647054] font-semibold" : "text-gray-900"
                    }`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => handleLanguageClick("English")}
                    className={`block w-full px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
                      selectedLanguage === "English" ? "text-[#647054] font-semibold" : "text-gray-900"
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
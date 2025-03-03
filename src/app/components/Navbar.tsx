"use client";

import Link from "next/link";
import { Poppins, League_Script } from "next/font/google";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Overlay from "./Overlay";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

const leagueScript = League_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out bg-transparent ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <span className={`text-2xl font-bold text-white leading-none ${poppins.className}`}>Terra Nossa</span>
                <span className={`text-3xl text-white leading-none ${leagueScript.className}`}>TN</span>
              </Link>
            </div>
            
            {/* Ícone do menu móvel */}
            <button type="button" onClick={() => setIsMenuOpen(true)} className="text-white text-4xl">
              <HiOutlineMenu />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Menu Overlay */}
      {isMenuOpen && <Overlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

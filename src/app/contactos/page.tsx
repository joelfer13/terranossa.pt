"use client";

import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import FadeInOnScroll from "@/app/components/FadeInOnScroll"; // ✅ Importa FadeInOnScroll

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Contactos() {
  const [,] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [,] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";
  }, []);

  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start text-white">
      {/* Hero Section */}
      <FadeInOnScroll>
        <section className="relative w-full min-h-[50vh] bg-transparent flex flex-col relative z-0 items-center justify-center text-center bg-opacity-60">
          <h1 className={`text-4xl md:text-6xl font-semibold text-white ${poppins.className}`}>
            Contactos
          </h1>
        </section>
      </FadeInOnScroll>

      {/* Contact Information Section */}
      <FadeInOnScroll>
        <section className="bg-white shadow-lg rounded-xl p-10 w-full max-w-5xl mt-[-80px] relative z-20 flex flex-col md:flex-row justify-between items-center">
          {/* Telefone */}
          <div className="flex flex-col items-center text-center px-6 py-6 border-b md:border-b-0 md:border-r md:border-gray-300 md:w-1/2">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-[#647054] flex items-center justify-center rounded-full text-white text-3xl mb-4"
            >
              <FaPhoneAlt />
            </motion.div>
            <p className="text-xl text-gray-600 font-semibold">(+351) 937 920 842</p>
            <p className="text-gray-500">Telemóvel</p>
            <span className="text-sm text-gray-400">(Chamada para rede móvel nacional)</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center px-6 py-8 md:w-1/2">
            <a href="mailto:quim@terranossa.pt" className="text-gray-600 flex flex-col items-center">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-[#647054] flex items-center justify-center rounded-full text-white text-3xl mb-4"
              >
                <FaEnvelope />
              </motion.div>
              <p className="text-xl font-semibold hover:underline">quim@terranossa.pt</p>
            </a>
            <p className="text-gray-500">Email</p>
          </div>
        </section>
      </FadeInOnScroll>
    </main>
  );
}

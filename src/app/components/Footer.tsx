import React from "react";
import { FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image"; // Importação da Logo

export default function Footer() {
  return (
    <footer className="w-full bg-[#e5d5c5] text-gray-900">
      {/* 🔥 Seção superior com logotipos e sombra para separação */}
<div className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 py-6">
    <Image src="/images/portugaleue.png" alt="Portugal 2020" width={400} height={80} />
  </div>
</div>


      {/* 🔥 Conteúdo principal do Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pt-10 pb-16">
        {/* Logo e informações */}
        <div>
          <Image src="/images/Logo.jpg" alt="Logo da empresa" width={60} height={60} />
          <p className="mt-4 text-sm">
            Rua Padre José Jacinto Botelho, 5 <br />
            9675-061 Furnas, São Miguel, Portugal
          </p>
          <p className="mt-2 flex items-center">
            <FaPhoneAlt className="mr-2 text-red-600" />
            +351 296 549 090
          </p>
          <p className="mt-2 flex items-center">
            <FaEnvelope className="mr-2 text-red-600" />
            Contacte-nos
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-gray-900 uppercase">Terra Nossa</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">A Nossa História</a></li>
            <li><a href="#" className="hover:underline">Quartos</a></li>
            <li><a href="#" className="hover:underline">Sustentabilidade</a></li>
            <li><a href="#" className="hover:underline">Restaurante</a></li>
            <li><a href="#" className="hover:underline">Eventos</a></li>
          </ul>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-semibold text-gray-900 uppercase">Sitemap</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Galeria</a></li>
            <li><a href="#" className="hover:underline">Localização</a></li>
            <li><a href="#" className="hover:underline">Segurança</a></li>
            <li><a href="#" className="hover:underline">Sustentabilidade</a></li>
            <li><a href="#" className="hover:underline">Carreiras</a></li>
          </ul>
        </div>

        {/* Newsletter e Redes Sociais */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-gray-900 uppercase">Newsletter</h3>
          <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-900 transition">
            Subscreva
          </button>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-blue-600 text-xl hover:text-blue-800">
              <FaLinkedin />
            </a>
            <a href="#" className="text-red-600 text-xl hover:text-red-800">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 Barra inferior separada */}
      <div className="bg-[#f8f1e7] text-center text-sm py-4">
        <a href="#" className="hover:underline mx-2">Política de Cookies</a> |
        <a href="#" className="hover:underline mx-2">Privacidade</a> |
        <a href="#" className="hover:underline mx-2">Termos e Condições</a> |
        <a href="#" className="hover:underline mx-2">Código de Conduta</a>
        <p className="mt-2 text-xs text-gray-700">© 2025 Terra Nossa - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

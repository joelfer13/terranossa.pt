import React from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e Menu Principal */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">TN</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Open Innovation</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Venture Building</a></li>
            <li><a href="#" className="hover:underline">Work at TerraNossa</a></li>
          </ul>
        </div>

        {/* Soluções */}
        <div>
          <h3 className="font-semibold text-gray-900">OUR SOLUTIONS</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Mobility Platform</a></li>
            <li><a href="#" className="hover:underline">Intelligent Roads</a></li>
            <li><a href="#" className="hover:underline">Intelligent Operations</a></li>
            <li><a href="#" className="hover:underline">Mobility Services</a></li>
            <li><a href="#" className="hover:underline">Advance Air Mobility</a></li>
          </ul>
        </div>

        {/* Outros Interesses */}
        <div>
          <h3 className="font-semibold text-gray-900">YOU MAY ALSO BE INTERESTED IN</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Geomic by TerraNossa</a></li>
            <li><a href="#" className="hover:underline">TerraNossa Tolling Back Office</a></li>
            <li><a href="#" className="hover:underline">Slora by TerraNossa</a></li>
          </ul>
        </div>

        {/* Redes Sociais e Contacto */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-gray-900">FOLLOW US AT</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600 text-xl hover:text-blue-800"><FaLinkedin /></a>
            <a href="#" className="text-red-600 text-xl hover:text-red-800"><FaYoutube /></a>
          </div>
          <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
            CONTACT
          </button>
        </div>
      </div>

      {/* Links de Políticas */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        <a href="#" className="hover:underline mx-2">Cookies Policy</a> |
        <a href="#" className="hover:underline mx-2">Privacy Policy</a> |
        <a href="#" className="hover:underline mx-2">Legal Notice</a> |
        <a href="#" className="hover:underline mx-2">Code of Conduct</a>
      </div>
    </footer>
  );
}

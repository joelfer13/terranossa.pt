import React from "react"; 
import { FaPhoneAlt, FaEnvelope, FaWineGlassAlt} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#a5a58d] text-gray-900">
      {/* 🔥 Seção superior com logotipos e sombra para separação */}
      <div className="bg-white shadow">
  <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-7 py-7">
    <Image
      src="/images/norte2030.png"
      alt="Norte 2030"
      width={220}
      height={60}
    />
    <Image
      src="/images/pt2030.png"
      alt="Portugal 2030"
      width={400}
      height={60}
    />
  </div>
</div>

      {/* 🔥 Conteúdo principal do Footer */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 pt-10 pb-16">
        {/* 🏡 Logo maior à esquerda */}
        <div className="flex justify-center">
          <Image src="/images/Logo.jpg" alt="Logo da empresa" width={170} height={170} />
        </div>

        {/* 🔽 Barra Separadora */}
        <div className="hidden md:block h-28 w-[2px] bg-gray-700 mx-6"></div>

        {/* 📍 Informações à direita em formato de coluna */}
        <div className="flex flex-col space-y-4 items-center text-center">
          <p className="text-sm">
          Mondrões, Rua Estrada Municipal 564 <br />
          5000-325 Vila Real, Portugal
          </p>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-black-600" />
            <span>+351 937 920 842</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-black-600" />
            <Link href="/contactos" className="text-black-600 hover:underline">Contacte-nos</Link>
          </div>
          <div className="flex items-center">
            <FaWineGlassAlt className="mr-1 text-black-600" />
            <Link href="Https://www.life-excelsior.com" className="text-black-600 hover:underline">Wine Gourmet</Link>
          </div>
        </div>
      </div>

      {/* 🔥 Barra inferior separada */}
      <div className="bg-[#647054] text-center text-sm py-1">
        <p className="mt-2 text-xs text-gray-700">© 2025 Terra Nossa - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

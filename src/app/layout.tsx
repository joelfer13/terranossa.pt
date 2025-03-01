import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importe o Navbar
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terra Nossa",
  description: "Descrição do seu site",
};

// Gera os parâmetros estáticos para internacionalização
export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }]; // Locales suportados
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navbar /> {/* Adicione o Navbar aqui */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
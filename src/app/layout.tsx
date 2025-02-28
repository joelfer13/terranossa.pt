import "@/app/globals.css";
import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/app/components/CustomCursor"; // 🔥 Importa o cursor



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}>
      <CustomCursor />
        <Navbar />
        <main className="pt-0 flex-1 w-full flex flex-col items-center justify-center p-0">
        {children}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}

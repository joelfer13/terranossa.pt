import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Import the Navbar
import Footer from "./components/Footer"; // Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terra Nossa",
  description: "Descrição do seu site",
  icons: {
    icon: "images/logotransparente.png", // Caminho do favicon na pasta public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt"> {/* Set a static locale */}
      <body className={inter.className}>
        <Navbar /> {/* Add the Navbar here */}
        {children}
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}
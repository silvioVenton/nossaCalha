import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { GoogleTagManager } from "@next/third-parties/google";
import "keen-slider/keen-slider.min.css";
import NavBar from "../../components/nav";
import { WhatsAppFixed } from "../../components/WhatsappAppFixed";
import Footer from "../../components/Footer";


const inter = Roboto({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nossa Calha e Telhas",
  description:
    "Comércio de telhas fibrocimento e fabricação de telhas metálicas e termoacústicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      
      <body className={inter.className }>
        <GoogleTagManager gtmId="GTM-MPC2WLH" />
        {/* Navbar Responsiva */}
        <NavBar />

        {/* Ícone do WhatsApp fixo no canto inferior direito */}
        <WhatsAppFixed />

        {children}
        

        <Footer/>
      </body>
    </html>
  );
}


// components/NavBar.tsx
import { label } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const menuItems = [
    { label: "home", href: "/"},
    { label: "Sobre nós", href: "/empresa" },
    { label: "Fibrocimento", href: "/#fibrocimento" },
    { label: "Metálicas", href: "/#metalicas" },
    { label: "Termoacústicas", href: "/#termoacusticas" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/lg2.png"
            width={160}
            height={50}
            alt="Logotipo da empresa"
            className="h-auto w-auto"
            priority
          />
        </div>

        {/* Frase / Slogan */}
        <p className="text-center text-lg md:text-2xl font-semibold text-gray-800">
          A marca da sua cobertura
        </p>

        {/* Menu */}
        <ul className="flex flex-wrap justify-center gap-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="px-4 py-2 rounded-full text-sm md:text-base text-gray-700 border border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

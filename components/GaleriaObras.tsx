"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GaleriaObras() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const imagens = [
    {
      alt: "Galpão industrial finalizado",
      desktop: "/imagens/obra1-desktop.webp",
      tablet: "/imagens/obra1-tablet.webp",
      mobile: "/imagens/obra1-mobile.webp",
    },
    {
      alt: "Cobertura metálica em obra comercial",
      desktop: "/imagens/obra2-desktop.webp",
      tablet: "/imagens/obra2-tablet.webp",
      mobile: "/imagens/obra2-mobile.webp",
    },
    {
      alt: "Instalação de calhas em telhado residencial",
      desktop: "/imagens/obra3-desktop.webp",
      tablet: "/imagens/obra3-tablet.webp",
      mobile: "/imagens/obra3-mobile.webp",
    },
    {
      alt: "Fabricação de telhas metálicas",
      desktop: "/imagens/obra4-desktop.webp",
      tablet: "/imagens/obra4-tablet.webp",
      mobile: "/imagens/obra4-mobile.webp",
    },
    {
      alt: "Estrutura pronta com telha termoacústica",
      desktop: "/imagens/obra5-desktop.webp",
      tablet: "/imagens/obra5-tablet.webp",
      mobile: "/imagens/obra5-mobile.webp",
    },
  ];

  // Animação contínua
  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame: number;

    const scroll = () => {
      if (slider && !isHovered) {
        slider.scrollLeft += 0.5;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  // Setas
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-12 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Obras já realizadas
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Setas */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-200 shadow-lg p-2 rounded-full z-10"
          aria-label="Voltar"
        >
          <ChevronLeft className="text-gray-700 w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-200 shadow-lg p-2 rounded-full z-10"
          aria-label="Avançar"
        >
          <ChevronRight className="text-gray-700 w-6 h-6" />
        </button>

        {/* Carrossel */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth px-2"
        >
          {imagens.map((img, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] h-[220px] md:h-[260px] rounded-xl overflow-hidden relative group shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={img.desktop} />
                <source media="(min-width: 640px)" srcSet={img.tablet} />
                <Image
                  src={img.mobile}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 350px, 280px"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


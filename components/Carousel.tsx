'use client'

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

type ImageSet = {
  alt: string
  mobile: string
  tablet?: string
  desktop?: string
}

type CarouselProps = {
  autoPlay?: boolean
  interval?: number // em milissegundos
}

export default function Carousel({ autoPlay = true, interval = 4000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  const images: ImageSet[] = [
    {
      alt: "Imagem 1",
      mobile: "/bannerTermoMobile.webp",
      tablet: "/bannerTermoTablet.webp",
      desktop: "/bannerTermoDesk.webp",
    },
    {
      alt: "Imagem 2",
      mobile: "/bannerMetalicaMobile.webp",
      tablet: "/bannerMetalicaTablet.webp",
      desktop: "/bannerMetalicaDesktop.webp",
    },
    {
      alt: "Imagem 3",
      mobile: "/bannerFibroMobile.webp",
      tablet: "/bannerFibroTablet.webp",
      desktop: "/bannerFibroDesk.webp",
    },
  ]

  const getImageSrc = (img: ImageSet): string => {
    if (windowWidth < 640) return img.mobile
    if (windowWidth < 1024) return img.tablet || img.mobile
    return img.desktop || img.tablet || img.mobile
  }

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  // Detectar o tamanho da tela de forma segura
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize() // Executa ao montar
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Autoplay
  useEffect(() => {
    if (!autoPlay || !loaded || !instanceRef.current) return

    timerRef.current = setInterval(() => {
      instanceRef.current?.next()
    }, interval)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoPlay, loaded, interval])

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider w-full h-auto">
        {images.map((img, idx) => (
          <div className="keen-slider__slide relative" key={idx}>
            <Image
              src={getImageSrc(img)}
              alt={img.alt}
              width={2000}
              height={500}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black"
            aria-label="Próximo"
          >
            →
          </button>
        </>
      )}

      {/* Paginação */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}


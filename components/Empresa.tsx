import Image from "next/image";

export default function Empresa() {
  return (
    <main className="p-0 m-0">
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-start overflow-hidden">

        {/* Imagem de fundo responsiva */}
        <Image
          src="/bac.png"
          alt="Imagem institucional"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />

        {/* Camada de escurecimento para legibilidade */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Conteúdo sobreposto */}
        <div className="relative z-10 px-6 md:px-12 max-w-4xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md mb-6">
            15 anos protegendo obras
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl md:text-2xl drop-shadow-sm">
            Transformando construções em Várzea Paulista e toda a região com segurança e qualidade.
          </p>
        </div>
      </section>
    </main>
  );
}

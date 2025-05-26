// components/SectionTelhado.tsx
import React from 'react';

const SectionTelhado = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem sugerida */}
        <div>
          <img
            src="/images/obra-telhado.jpg" // 👉 substitua pela sua imagem (ex: telhado em construção ou casa moderna)
            alt="Importância do telhado na construção"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Conteúdo textual */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O telhado é mais do que proteção. É segurança, conforto e valorização do seu imóvel.
          </h2>

          

          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              Evite infiltrações e prejuízos estruturais com a escolha certa do telhado.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              A fase do telhado define o ritmo da entrega da obra — atrasos aqui custam caro.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              Telhas inadequadas ou mal escolhidas causam superaquecimento e desconforto interno.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              Com os materiais certos, seu imóvel ganha proteção térmica, acústica e valorização.
            </li>
          </ul>

          <div className="mt-8">
            <a
  href="https://wa.me/5511997865848?text=Olá!%20Gostaria%20de%20um%20orçamento%20e%20informações."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all text-sm"
>
  Solicite um orçamento personalizado
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTelhado;

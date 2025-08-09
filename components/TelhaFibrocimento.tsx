// components/TelhaFibrocimento.tsx
import React from 'react';

const TelhaFibrocimento = () => {
  return (
    <section id='fibrocimento' className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <div>
          <img
            src="/telhas/fibro.webp"
            alt="Telha de Fibrocimento"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Telhas de Fibrocimento
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Ideal para obras econômicas, leves e duráveis.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Leveza e facilidade na instalação</li>
            <li>✓ Ótimo custo-benefício</li>
            <li>✓ Durabilidade em diferentes climas</li>
            <li>✓ Ideal para coberturas de galpões, casas e áreas externas</li>
          </ul>
          <div className="mt-6">
            <a
  href="https://wa.me/5511947737992?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20telhas%20de%20fibrocimento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all text-sm"
>
  Peça um orçamento de Fibrocimento
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TelhaFibrocimento;

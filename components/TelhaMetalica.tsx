// components/TelhaMetalica.tsx
import React from 'react';

const TelhaMetalica = () => {
  return (
    <section id='metalicas' className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Conteúdo */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Telhas Metálicas
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Alta resistência para obras industriais, comerciais e residenciais.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Altamente resistentes e duráveis</li>
            <li>✓ Excelente para grandes vãos e coberturas longas</li>
            <li>✓ Baixa manutenção e ótimo acabamento</li>
            <li>✓ Fabricadas sob medida</li>
          </ul>
          <div className="mt-6">
            <a
  href="https://wa.me/5511947737992?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20telhas%20metálicas."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all text-sm"
>
  Peça um orçamento de Telhas Metálicas
</a>
          </div>
        </div>

        {/* Imagem */}
        <div>
          <img
            src="/telhas/metal.webp"
            alt="Telha Metálica"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TelhaMetalica;

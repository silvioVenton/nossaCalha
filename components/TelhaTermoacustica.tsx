// components/TelhaTermoacustica.tsx
import React from 'react';

const TelhaTermoacustica = () => {
  return (
    <section id='termoacusticas' className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem */}
        <div>
          <img
            src="/telhas/termo.webp"
            alt="Telha Termoacústica"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Telhas Termoacústicas
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Redução de calor e ruído com máxima eficiência.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Isolamento térmico e acústico integrado</li>
            <li>✓ Conforto em ambientes industriais e residenciais</li>
            <li>✓ Indispensável em galpões e áreas com alta exposição solar</li>
            <li>✓ Tecnologia para economia de energia</li>
          </ul>
          <div className="mt-6">
              <a
  href="https://wa.me/5511947737992?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20telhas%20termoacústicas."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all text-sm"
>
  Peça um orçamento de Telhas Termoacústicas
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelhaTermoacustica;

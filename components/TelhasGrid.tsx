import Image from 'next/image';
import Link from 'next/link';

const TelhasCards = () => {
  return (
    <section className="p-8 border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 com promoção */}
        <div className="relative border p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 overflow-hidden">

          {/* Selo redondo com link */}
          <Link href="/promocaoFibrocimento"
            
              className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs sm:text-sm font-bold 
                         w-28 h-28 flex items-center justify-center text-center rounded-full border-4 border-white 
                         shadow-lg hover:bg-red-700 transition-all duration-300"
              title="Aproveite a promoção">
            
              OFERTA  IMPERDÍVEL
            
          </Link>

          <Image
            src="/telhas/fibrocimento.webp"
            width={250}
            height={250}
            alt="telhaFibrocimento"
            className="mx-auto"
          />
          <p className="text-2xl mt-4">Telha de</p>
          <p className="text-3xl font-semibold">Fibrocimento</p>
          <span className="text-slate-500 text-sm mt-2 block">
            Ideal para construções residenciais modernas com telhado embutido, a telha de fibrocimento é uma opção econômica, 
            resistente e de baixa manutenção. Disponível em diversos tamanhos e espessuras, oferece praticidade e agilidade na 
            execução da cobertura, sendo perfeita para quem busca um bom custo-benefício sem abrir mão da durabilidade.
          </span>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          {/* Selo redondo com link */}
          <Link href="/promocaoMetalica"
            
              className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs sm:text-sm font-bold 
                         w-28 h-28 flex items-center justify-center text-center rounded-full border-4 border-white 
                         shadow-lg hover:bg-red-700 transition-all duration-300"
              title="Aproveite a promoção">
            
              OFERTA  IMPERDÍVEL
            
          </Link>
          <Image
            src="/telhas/galvanizada.webp"
            width={250}
            height={250}
            alt="telhaMetálica"
            className="mx-auto"
          />
          <p className="text-2xl mt-4">Telha </p>
          <p className="text-3xl font-semibold">Metálica</p>
          <span className="text-slate-500 text-sm mt-2 block">
            A telha metálica é a escolha certa para quem busca resistência, leveza e excelente acabamento. 
            Indicada para coberturas de galpões, indústrias e grandes vãos, também pode ser usada em projetos 
            residenciais modernos. Com alta durabilidade e fácil instalação, proporciona uma obra mais limpa, rápida e eficiente.
          </span>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <Image
            src="/telhas/trapezio.webp"
            width={250}
            height={250}
            alt="telhaTermoacústica"
            className="mx-auto"
          />
          <p className="text-2xl mt-4">Telha </p>
          <p className="text-3xl font-semibold">Termoacústica</p>
          <span className="text-slate-500 text-sm mt-2 block">
            A telha termoacústica oferece o máximo conforto térmico e isolamento sonoro, sendo ideal para ambientes que 
            exigem controle de temperatura e redução de ruídos. Indicada para residências, comércios e indústrias, 
            ela alia resistência, durabilidade e eficiência energética em uma única solução.
          </span>
        </div>

      </div>
    </section>
  );
};

export default TelhasCards;









import React from "react";
import Image from "next/image";

const LandingTelhaPromocao = () => {
  return (
    <>
      {/* FAIXA FIXA DE URGÊNCIA NO TOPO */}
      <div className="w-full bg-red-600 text-white text-center py-2 px-4 text-sm font-semibold shadow-md z-50  left-0">
        ⚠️ Últimos dias! Promoção exclusiva – Telhas fibrocimento 110x244x5mm por R$ 49,50!
      </div>

      {/* HERO SECTION */}
      <main
        className="pt-16 min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/telhas/fibro.webp')" }}
      >
        <div className="bg-black bg-opacity-70 min-h-screen p-6 md:p-12 flex flex-col justify-center items-center">

          {/* TÍTULO DE CHAMADA */}
          <section className="text-center max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 shadow-md">
              🔥 Promoção por Tempo Limitado!
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Telhas de Fibrocimento com preço imbatível para quem busca qualidade, durabilidade e economia!
            </p>
          </section>

          {/* DESTAQUE DE PREÇO E CTA */}
          <section
            className="relative w-full text-center py-12 px-6 mb-10 rounded-xl shadow-2xl overflow-hidden max-w-4xl"
            
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
            <div className="relative z-10">
              <p className="text-xl font-bold uppercase text-yellow-300">TELHA FIBROCIMENTO EM OFERTA</p>
              <h2 className="text-5xl font-extrabold mt-2 mb-4 text-yellow-400 drop-shadow-lg">
                110cm x 244cm x 5mm
              </h2>
              <p className="text-lg font-semibold mb-2">
                Aproveite o melhor preço para sua obra!
              </p>
              <span className="block text-6xl font-extrabold text-white drop-shadow mt-2 mb-4">
                R$ 49,50
              </span>
              <p className="text-sm text-yellow-200 mb-6">
                Valor por unidade – Estoque limitado
              </p>
              <a
                href="https://wa.me/55119997865848?text=Quero%20aproveitar%20a%20promoção%20da%20telha%20de%20fibrocimento%20110x244x5mm!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-300 transition-all"
              >
                GARANTIR MEU DESCONTO AGORA
              </a>
              <p className="text-sm text-yellow-200 mt-4">
                Promoção válida para pagamentos à vista com dinheiro ou PIX
              </p>
            </div>
          </section>

          {/* BENEFÍCIOS DO PRODUTO */}
          <section className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl max-w-4xl text-left">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4 text-center">
              Por que escolher nossa telha?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
              <li>✔ Mais leve, fácil de transportar e instalar</li>
              <li>✔ Excelente isolamento térmico</li>
              <li>✔ Alta durabilidade contra sol e chuva</li>
              <li>✔ Menor custo por metro quadrado</li>
              <li>✔ Pronta entrega para toda a região</li>
            </ul>
          </section>

          {/* IMAGEM ILUSTRATIVA */}
          <section className="mt-12">
            <Image
              src="/telhas/fibro.webp"
              alt="Telha de fibrocimento em oferta"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </section>

          {/* LOCALIZAÇÃO PARA RETIRADA */}
          <section className="bg-white text-gray-800 mt-16 mb-12 p-8 rounded-xl shadow-xl w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-yellow-500 text-center mb-4">
              Retire direto na loja!
            </h2>
            <p className="text-center text-lg mb-4">
              Estamos localizados na <strong>Av. Pacaembu, 836 – Jardim Paulista, Várzea Paulista – SP</strong>
            </p>

            <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-md mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.684951737872!2d-46.9943502!3d-23.5096278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef984a660eb7b%3A0x7a1c56a6c410f9fa!2sAv.%20Pacaembu%2C%20836%20-%20Jardim%20Paulista%2C%20V%C3%A1rzea%20Paulista%20-%20SP%2C%2013222-021!5e0!3m2!1spt-BR!2sbr!4v1716739915515!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/55119997865848?text=Quero%20retirar%20a%20telha%20de%20fibrocimento%20direto%20na%20loja%20na%20Av.%20Pacaembu%20836"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow hover:bg-yellow-300 transition-all text-center block w-full sm:w-auto"

              >
                FALAR COM ATENDENTE PARA RETIRADA
              </a>
            </div>
          </section>

          {/* CHAMADA FINAL */}
          <section className="text-center mt-4 mb-12">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Estoque limitado. Promoção válida enquanto durarem as unidades!
            </h3>
            <a
              href="https://wa.me/55119997865848?text=Quero%20garantir%20minha%20telha%20de%20fibrocimento%20110x244x5mm%20agora!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-yellow-400 transition"
            >
              QUERO COMPRAR AGORA
            </a>
          </section>
        </div>
      </main>
    </>
  );
};

export default LandingTelhaPromocao;




import React from "react";

const RetiradaLocal = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 text-gray-800 rounded-xl shadow-lg mt-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-4">
        Retire direto na loja!
      </h2>
      <p className="text-center text-lg mb-6">
        Prefere retirar pessoalmente? Estamos te esperando com pronta entrega em nossa loja:
      </p>

      <div className="text-center font-semibold text-gray-900 mb-4">
        📍 Avenida Pacaembu, 836 – Jardim Paulista, Várzea Paulista – SP
      </div>

      <div className="w-full h-[350px] rounded-lg overflow-hidden shadow-md mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.684951737872!2d-46.9943502!3d-23.5096278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef984a660eb7b%3A0x7a1c56a6c410f9fa!2sAv.%20Pacaembu%2C%20836%20-%20Jardim%20Paulista%2C%20V%C3%A1rzea%20Paulista%20-%20SP%2C%2013222-021!5e0!3m2!1spt-BR!2sbr!4v1716739915515!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/5511947737992?text=Quero%20retirar%20a%20telha%20de%20fibrocimento%20direto%20na%20loja%20na%20Av.%20Pacaembu%20836"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-yellow-300 transition-all"
        >
          FALAR COM ATENDENTE PARA RETIRADA
        </a>
      </div>
    </section>
  );
};

export default RetiradaLocal;

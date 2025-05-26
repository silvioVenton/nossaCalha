// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo e Descrição */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Nossa Calha e Telhas</h2>
          
          <p className="text-sm mt-4">
            Há mais de 15 anos garantindo proteção, qualidade e confiança em cada telhado.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="/empresa" className="hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="/#fibrocimento" className="hover:text-white transition-colors">Telhas de Fibrocimento</a></li>
            <li><a href="/#metalicas" className="hover:text-white transition-colors">Telhas Metálicas</a></li>
            <li><a href="/#termoacusticas" className="hover:text-white transition-colors">Telhas Termoacústicas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Av. Pacaembu, 836 - Várzea Paulista/SP</li>
            <li>📞 (11) 99786-5848</li>
            <li>✉️ contato@empresa.com.br</li>
            <li>🕒 Atendimento: Seg a Sex - 7h às 17h</li>
          </ul>
        </div>

        {/* Newsletter e Redes */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Receba novidades</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="px-4 py-2 rounded-md bg-gray-800 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-sm transition-all">
              Cadastrar
            </button>
          </form>

          <div className="mt-6">
            <p className="text-sm mb-2">Siga nas redes:</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © 2025 Venton Company. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

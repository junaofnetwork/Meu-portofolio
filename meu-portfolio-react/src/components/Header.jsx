import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center gap-6 p-6 bg-gray-100 border-b border-gray-300 shadow-sm">
      <img src="/perfil.jpg" alt="Foto de perfil de João Eduardo" className="w-24 h-24 rounded-full border-4 border-green-500 object-cover shadow-sm" />
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">João Eduardo Brandenburg de Almeida</h1>
        <ul className="text-gray-700">
          <li>Desenvolvedor Full Stack Python na <a href="https://ebaconline.com.br/sale/referral?grsf=1jgdi5" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">EBAC</a></li>
          <li>Técnico em Informática no <a href="https://vascocoutinho.ceet.secti.es.gov.br/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Ceet Vasco Coutinho</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

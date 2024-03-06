import React from 'react';
import everton from '../assets/img/everton.png';


const Professor = () => {
  return (
    <div className="bg-creme">
      <div className="container max-w-6xl mx-auto px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-10 ">
          <div className="text-center lg:text-left lg:mr-10">
            <h2 className="md:text-3xl text-2xl font-semibold text-black uppercase">Professor</h2>
            <h1 className="text-4xl md:text-5xl text-black mb-4">Everton Amorim</h1>
            <div className='border-b-8 border-amarelo lg:mr-28 mb-5'></div>
            <p className="text-justify text-xl md:text-2xl leading-tight text-black">Animador, Concept-Art, Diretor de animação e Diretor de arte para projetos de animação em curtas metragem e longa metragem. <br/>
              Everton possui cinco anos de experiência no mercado de animação, contribuindo com produções autorais, e trabalhando no mercado nacionais e internacionais do audiovisual.</p>
          </div>
          
          <img src={everton} className="w-72 mb-6 lg:mb-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Professor;

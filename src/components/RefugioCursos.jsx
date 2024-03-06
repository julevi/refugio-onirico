import React from 'react';
import mao from '../assets/img/mao.png';
import maoinvertida from '../assets/img/maoinvertida.png';

const RefugioCursos = () => {
  return (
    <div className="bg-amarelo z-20 overflow-hidden">
           
      <div className="relative">
        <div className="absolute h-auto hidden 2xl:block" style={{ top: '5rem', left: '-2rem', width: '20rem' }}>
          <img src={mao} className="" alt="" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute h-auto hidden 2xl:block" style={{ top: '5rem', right: '-2rem', width: '20rem' }}>
          <img src={maoinvertida} className="" alt="" />
        </div>
      </div>


      <div className="container max-w-7xl lg:max-w-4xl mx-auto px-6 xl:px-0">

        <div className="flex flex-col lg:flex-row items-center justify-center py-16 ">

          <div className="text-center">
            <div>
              <h1 className="leading-tight text-4xl md:text-5xl md:text-6xl text-black mb-4">Cursos Refúgio</h1>
              <div className='border-b-8 border-roxo md:mx-36 mb-4'></div>
            </div>

            <p className="text-xl md:text-2xl text-black">O canal <i>Refúgio Onírico</i> vem ensinando sobre animação desde 2019, e atualmente seu foco passou a ser <strong>trazer conteúdos com ainda mais qualidade.</strong> Nosso foco é fazer você evoluir na animação e poder viver trabalhando do conforto da sua casa com o que <strong>você ama.</strong></p>
          </div>

        </div>

      </div>


    </div>
  );
};

export default RefugioCursos;

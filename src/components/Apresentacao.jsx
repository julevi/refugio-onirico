import React from 'react';
import video from '../assets/video/video.gif';
import background from '../assets/img/background.png';

const Apresentacao = () => {
  return (
    <div className="bg-cinza relative">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${background})`, opacity: 0.1 }}></div>
      <div className="container max-w-7xl mx-auto py-5 xl:py-10 px-2 xl:px-10 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-center py-10 xl:py-20 ">
          <div className="text-center xl:text-left mb-6 xl:mb-0s">
            <h2 className="text-3xl leading-tight lg:text-6xl font-bold text-white">Ensino de animação utilizando processos simples e intuitivos.</h2>
            <h1 className="text-4xl mt-2 lg:text-6xl text-amarelo mb-4 font-ortem">Vamos Animar!</h1>
          </div>
          <img src={video} className="" alt="" style={{ width: '36rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;

import React from 'react';
import video from '../assets/img/video.png';

const Apresentacao = () => {
  return (
    <div className="bg-cinza">
    <div className="container max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center justify-center py-20 ">
          <div className="text-center md:text-left mr-36">
            <h1 className="leading-tight text-7xl font-bold text-white mb-4">Ensino de animação com processos fáceis e intuitivos.</h1>
            <h1 className="text-7xl font-bold text-amarelo mb-4">Vamos Animar!</h1>
          </div>
          <img src={video} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
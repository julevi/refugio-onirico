import React from 'react';
import video from '../assets/video/video.mp4';


const Apresentacao = () => {
  return (
    <div className="bg-cinza">
    <div className="container max-w-7xl mx-auto py-5 xl:py-10 px-2 xl:px-10">
        <div className="flex flex-col xl:flex-row items-center justify-center py-10 xl:py-20 ">
          <div className="text-center xl:text-left mb-6 xl:mb-0s">
            <h1 className="text-3xl leading-tight lg:text-6xl font-bold text-white">Ensino de animação utilizando processos simples e intuitivos.</h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-amarelo mb-4">Vamos Animar!</h1>
          </div>
          <video src={video} className="" alt="" style={{width: '36rem'}} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;

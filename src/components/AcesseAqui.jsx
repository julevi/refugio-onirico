import React from 'react';
import background from '../assets/img/background.png';

const AcesseAqui = () => {
    return (
        <div className="bg-amarelo relative z-10">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${background})`, opacity: 0.05, zIndex: 1 }}></div>

            <div className="container max-w-7xl mx-auto px-20 relative z-20">
                <div className="flex flex-col xl:flex-row items-center justify-center px-6 xl:px-0 py-10">
                    <div className="mx-20 py-10">
                        <p className="text-2xl text-center leading-tight text-white"><i>Acesse aqui os nossos</i></p>
                        <h1 className="uppercase text-4xl md:text-5xl text-center text-black mb-4">Cursos</h1>
                        <button className="w-60 md:w-72 bg-roxo text-xl text-white py-2 hover:bg-cinza focus:outline-none focus:ring focus:border-purple">
                            <i>Clique aqui</i>
                        </button>
                    </div>
                    <div className="mx-20 py-10">
                        <p className="text-2xl text-center leading-tight text-white"><i>Acesse aqui os nossos</i></p>
                        <h1 className="uppercase text-4xl md:text-5xl text-center text-black mb-4">Ebooks</h1>
                        <button className="w-60 md:w-72 bg-roxo text-xl text-white py-2 hover:bg-cinza focus:outline-none focus:ring focus:border-purple">
                            <i>Clique aqui</i>
                        </button>
                    </div>
                    <div className="mx-20 py-10">
                        <p className="text-2xl text-center leading-tight text-white"><i>Acesse aqui os cursos</i></p>
                        <h1 className="uppercase text-4xl md:text-5xl text-center text-black mb-4">indicados</h1>
                        <button className="w-60 md:w-72 bg-roxo text-xl text-white py-2 hover:bg-cinza focus:outline-none focus:ring focus:border-purple">
                            <i>Clique aqui</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcesseAqui;

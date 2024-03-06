import React from 'react';
import cursoframe from '../assets/img/cursos/animacaoframe.png';
import clock from '../assets/icons/clock.webp';

const QuadroCursos = () => {
    const gridItems = [
        { image: cursoframe, title: 'Curso de Animação Frame a Frame', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam unde voluptatibus debitis hic similique labore? Veniam porro placeat delectus vel aliquid aut, quasi ea sint minus dolorum ab nihil.' },
        { image: cursoframe, title: 'Curso de Animação Frame a Frame', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam unde voluptatibus debitis hic similique labore? Veniam porro placeat delectus vel aliquid aut, quasi ea sint minus dolorum ab nihil.' },
        { image: cursoframe, title: 'Curso de Animação Frame a Frame', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam unde voluptatibus debitis hic similique labore? Veniam porro placeat delectus vel aliquid aut, quasi ea sint minus dolorum ab nihil.' },
        { image: cursoframe, title: 'Curso de Animação Frame a Frame', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam unde voluptatibus debitis hic similique labore? Veniam porro placeat delectus vel aliquid aut, quasi ea sint minus dolorum ab nihil.' },
    ];

    return (
        <div className="bg-cinza">
            <div className="container max-w-7xl xl:max-w-4xl mx-auto px-6 xl:px-0">

                <div className="text-center mb-6 xl:mb-0">
                    <h1 className="text-4xl lg:text-6xl text-amarelo font-ortem pt-12">Melhores cursos de animações</h1>
                    <h2 className="text-2xl text-white"><i> <b>Valores acessiveis</b> para o seu aprendizado</i></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
                    {gridItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-roxo rounded-xl overflow-hidden">
                            <img src={item.image} className="max-w-full h-auto mb-2 rounded-t-xl" alt={`Item ${index}`} />

                            <div className='items-center justify-center flex-col flex m-5 mx-14'>
                                <h3 className="text-2xl text-white font-bold mb-1">{item.title}</h3>

                                <p className="text-sm text-white mt-2 text-left">{item.description}</p>

                                <div className='flex my-5 justify-between items-center w-full'>
                                    <button className="w-32 bg-amarelo text-lg text-cinza py-2 hover:bg-cinza hover:text-white  focus:outline-none focus:ring focus:border-purple">
                                        <i>Saiba mais</i>
                                    </button>
                                    <div className='flex my-2 md:my-0 justify-center items-center'>
                                        <img src={clock} alt="" className='w-8'/>
                                        <p className='text-white ml-2 text-lg'>12h</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuadroCursos;

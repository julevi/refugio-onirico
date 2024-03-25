import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do React Router
import CourseRating from './CourseRating';
import cursosData from '../data/cursosData.json';

const QuadroCursos = () => {
    return (
        <div className="bg-cinza">
            <div className="container max-w-7xl mx-auto px-6 xl:px-0">
                <div className="text-center mb-6 xl:mb-0">
                    <h1 className="text-4xl lg:text-6xl text-amarelo font-ortem pt-12">Melhores cursos de animações</h1>
                    <h2 className="text-2xl text-white"><i> <b>Valores acessíveis</b> para o seu aprendizado</i></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
                    {cursosData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center bg-roxo rounded-xl overflow-hidden">
                            <img src={item.image} className="w-full h-full object-cover rounded-t-xl" alt={`Item ${index}`} />
                            
                            <div className='items-center justify-center flex-col flex m-5 mx-6'>
                                <h3 className="text-2xl text-white font-bold mb-1">{item.title}</h3>
                                
                                <p className="text-sm text-white mt-2 text-left">{item.description}</p>
                                
                                <div className='flex my-5 justify-between items-center w-full'>
                                    <div className='flex flex-col my-2 md:my-0 justify-center items-center'>
                                        <CourseRating rating={item.courseRating} />
                                    </div>
                                    <Link to={`/refugio-onirico/cursos/${index}`} className="w-32 bg-amarelo text-lg text-cinza py-2 hover:bg-cinza hover:text-white  focus:outline-none focus:ring focus:border-purple">
                                        <i>Saiba mais</i>
                                    </Link>
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

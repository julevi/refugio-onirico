import React from 'react';
import roughAnimation from '../assets/img/cursos/roughAnimation.jpg';
import animaticsParaAnimação from '../assets/img/cursos/animaticsParaAnimação.jpg';
import figuraSemEstresse from '../assets/img/cursos/figuraSemEstresse.png';
import desenhandoAnimes from '../assets/img/cursos/desenhandoAnimes.jpg';
import vidaAnimada from '../assets/img/cursos/vidaAnimada.png';
import characterDesign from '../assets/img/cursos/characterDesign.png';
import CourseRating from './CourseRating';

const QuadroCursos = () => {
    const gridItems = [
        {
            image: roughAnimation,
            title: 'Animação 2D - Rough Animation - Estilo Anime',
            description: 'Esse curso é destinado a artistas que já atuam ou estão entrando no campo da animação e desejam se especializar um pouco mais na técnica de animação frame a frame voltado para o estilo anime.',
            courseRating: 4.5
        },
        {
            image: animaticsParaAnimação,
            title: 'Curso de Animatics para Animação',
            description: 'Nesse curso você aprenderá como fazer um animatic do zero para qualquer história ou roteiro de animação. Você vai entender como funciona a linguagem cinematográfica e vai aplicar em seus roteiros para criar as melhores cenas.',
            courseRating: 4.5
        },
        {
            image: figuraSemEstresse,
            title: 'Curso FIGURA SEM STRESS 1 - Figura humana e anatomia',
            description: 'Neste curso você aprenderá os princípios do desenho de anatomia, passando por todos os fundamentos básicos do desenho de figura, então você aprenderá a utilizar seu conhecimento para desenhar livremente qualquer figura.',
            courseRating: 4
        },
        {
            image: desenhandoAnimes,
            title: 'Curso DESENHANDO ANIMES - Ei Nerd',
            description: 'Neste curso de como desenhar animes do Ei Nerd, aprenda técnicas comprovadas para desenhar seus personagens favoritos de forma precisa e divertida. Desenvolva habilidades para dar vida a qualquer personagem que você imaginar, transformando sua criatividade em arte.',
            courseRating: 4
        },
        {
            image: vidaAnimada,
            title: 'Animando a Vida - Curso de animação completo',
            description: 'Nesse curso você aprenderá todos os passos para criar uma animação completa, seja para empresas ou até para criar um canal no Youtube. O professor que irá lhe acompanhar é o Michel, dono do canal Vida Animada no Youtube, que hoje conta com mais de 2.1 Milhões de inscritos e milhões de visualizações todos os meses.',
            courseRating: 4
        },
        {
            image: characterDesign,
            title: 'Curso de Character Design - Criando personagens',
            description: 'No curso de character design você vai aprender a desenhar personagens de maneira fluída, com enfoque no uso de formas simples e no movimento do personagem. O método do curso é o mesmo usado em grandes escolas como CalArts, Schoolism e CGMA; e em estúdios como Disney, Dreamworks e Pixar.',
            courseRating: 4
        },

    ];

    return (
        <div className="bg-cinza">
            <div className="container max-w-7xl mx-auto px-6 xl:px-0">

                <div className="text-center mb-6 xl:mb-0">
                    <h1 className="text-4xl lg:text-6xl text-amarelo font-ortem pt-12">Melhores cursos de animações</h1>
                    <h2 className="text-2xl text-white"><i> <b>Valores acessiveis</b> para o seu aprendizado</i></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
                    {gridItems.map((item, index) => (
                       <div key={index} className="flex flex-col items-center justify-center bg-roxo rounded-xl overflow-hidden">
                       <img src={item.image} className="w-full h-full object-cover rounded-t-xl" alt={`Item ${index}`} />
                   
                       <div className='items-center justify-center flex-col flex m-5 mx-6'>
                           <h3 className="text-2xl text-white font-bold mb-1">{item.title}</h3>
                   
                           <p className="text-sm text-white mt-2 text-left">{item.description}</p>
                   
                           <div className='flex my-5 justify-between items-center w-full'>
                               <div className='flex flex-col my-2 md:my-0 justify-center items-center'>
                                   <CourseRating rating={item.courseRating} />
                               </div>
                               <button className="w-32 bg-amarelo text-lg text-cinza py-2 hover:bg-cinza hover:text-white  focus:outline-none focus:ring focus:border-purple">
                                   <i>Saiba mais</i>
                               </button>
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

import React from "react";

import degrade from '../assets/img/degrade.webp'
import imagem1 from '../assets/img/encontreAqui/imagem1.png'
import imagem2 from '../assets/img/encontreAqui/imagem2.png'
import imagem3 from '../assets/img/encontreAqui/imagem3.png'
import imagem4 from '../assets/img/encontreAqui/imagem4.png'

import cap from '../assets/icons/encontreAqui/cap.svg'
import group from '../assets/icons/encontreAqui/group.svg'
import tv from '../assets/icons/encontreAqui/tv.svg'
import phone from '../assets/icons/encontreAqui/phone.svg'

import background from '../assets/img/background.png';

const projetos = [
    { nome: "Assista as aula quando quiser", imagem: imagem1, icone: tv },
    { nome: "Assista as aulas pelo celular", imagem: imagem2, icone: phone },
    { nome: "Desafios para te testar", imagem: imagem3, icone: cap },
    { nome: "+150 alunos aprovados", imagem: imagem4, icone: group },
];

const EncontreAqui = () => {
    return (
        <div className='bg-roxo relative z-10 overflow-hidden'>
            <div className="absolute inset-0" style={{ backgroundImage: `url(${background})`, opacity: 0.05, transform: 'scaleX(-1)' }}></div>

            <div className='container max-w-7xl lg:max-w-4xl mx-auto px-6 xl:px-0 py-10'>

                <div className="flex flex-col lg:flex-row items-center justify-center ">
                    <div className="text-center">
                        <p className="text-xl md:text-2xl leading-tight text-white">
                            Aqui você vai encontrar <span className="font-bold text-amarelo">cursos</span>, <span className="font-bold text-amarelo">e-books</span> super completos e <span className="font-bold text-amarelo">indicações de cursos</span> para você evoluir seu nível de animação e assim se tornar um <span className="font-bold text-amarelo">grande artista</span>.
                        </p>
                    </div>
                </div>

                <div className="md:grid md:grid-cols-4">
                    {projetos.map((projeto, index) => (

                        <div className="px-4 pt-6 relative" key={index}>
                            <div className="cursor-pointer relative overflow-hidden hover:transform hover:z-20 hover:scale-110 transition-transform duration-300 ease-in-out">
                                <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full bg-amarelo opacity-70"></div>
                                <img className="absolute bottom-0 left-0 right-0 z-20 w-full" src={degrade} alt="" />
                                <div className="p-4 absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center">
                                    <img className="w-24 text-creme p-4 z-30" src={projeto.icone} alt="" />
                                    <p className="text-center justify-center uppercase font-bold text-creme z-30">{projeto.nome}</p>
                                </div>
                                <img src={projeto.imagem} alt="" className="w-full h-full object-cover z-40" />
                            </div>
                        </div>


                    ))}
                </div>


            </div>

        </div>
    )
}

export default EncontreAqui;
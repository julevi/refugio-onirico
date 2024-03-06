import React from 'react';
import image1 from '../assets/img/galeria/image1.png';
import image2 from '../assets/img/galeria/image2.png';
import image3 from '../assets/img/galeria/image3.png';
import image4 from '../assets/img/galeria/image4.png';

const Galeria = () => {
    const imagens = [image1, image2, image3, image4];

    return (
        <div className="bg-cinza">
            <div className="container max-w-7xl xl:max-w-4xl mx-auto px-6 xl:px-0">
                <div className="flex flex-col xl:flex-row items-center justify-center py-10 space-y-4 xl:space-x-4 xl:space-y-0">
                    {imagens.map((imagem, index) => (
                        <img
                            key={index}
                            src={imagem}
                            className="max-w-full h-auto xl:max-w-xs"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Galeria;

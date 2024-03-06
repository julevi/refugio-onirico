import React from 'react';

import logo from '../assets/img/logo.png';

import youtube from '../assets/icons/youtube.webp'
import instagram from '../assets/icons/instagram.webp'
import tiktok from '../assets/icons/tiktok.webp'
import facebook from '../assets/icons/facebook.webp'

const Footer = () => {
    return (

        <footer className="bg-roxo absolute w-full z-10">
            <div className='container max-w-4xl mx-auto py-2 px-10'>
                <div className='flex items-center justify-center pt-5 flex-col md:flex-row'>

                    <div className='flex items-center justify-between w-full md:w-auto flex-col md:flex-row'>
                        <img className='w-32 h-auto md:mr-4' src={logo} alt="" />

                        <p className='text-white text-center md:mr-4 my-2 md:my-0'> Copyright © 2024 Refúgio Onírico. All Rights Reserved.</p>

                        <div className='flex w-36 my-2 md:my-0'>
                            <a className='mr-2' href="https://www.youtube.com/@Everton_Amorim_/featured"><img src={youtube} alt="" /></a>
                            <a className='mr-2' href="https://www.instagram.com/everton_amorim_/?igshid=1jah25pngbu94"><img src={instagram} alt="" /></a>
                            <a className='mr-2' href="https://www.tiktok.com/@everton_amorim_?_t=8k15zSDmme5&_r=1"><img src={tiktok} alt="" /></a>
                            <a className='mr-2' href="https://www.facebook.com/Refugioonirico"><img src={facebook} alt="" /></a>
                        </div>

                    </div>

                </div>
                <a href="https://www.linkedin.com/in/jpradoweb/"><p className='text-sm text-white text-center md:mr-4 my-2 md:my-0'><i>Desenvolvido por @jpradoweb</i> </p></a>
            </div>
        </footer>


    );
}

export default Footer;
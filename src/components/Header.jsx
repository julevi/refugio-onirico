import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import menu from '../assets/icons/menu.png';
import xsimbolo from '../assets/icons/simbolo-x.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-roxo z-10">
      <header className="p-4">
        <div className="flex max-w-7xl mx-auto px-4 items-center">
          <div className="flex-auto">
            <img className="w-44 cursor-pointer" src={logo} alt="" />
          </div>

          <div className="md:flex md:items-center md:ml-auto">
            <ul className={`hidden md:flex md:space-x-8 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
              <li className={`${location.pathname === '/' ? 'text-amarelo font-bold' : 'text-white'}`}>
                <Link to="/refugio-onirico" className="text-xl font-semibold">
                  Cursos
                </Link>
              </li>
              <li className={`${location.pathname === '/portfolio' ? 'text-amarelo font-bold' : 'text-white'}`}>
                <Link to="/refugio-onirico" className="text-xl font-semibold">
                  Ebooks
                </Link>
              </li>
              <li className={`${location.pathname === '/portfolio' ? 'text-amarelo font-bold' : 'text-white'}`}>
                <Link to="/refugio-onirico" className="text-xl text-white font-semibold">
                  Cursos Indicados
                </Link>
              </li>
            </ul>

            <div className="flex cursor-pointer md:hidden" onClick={toggleMobileMenu}>
              <img className="w-8" src={menu} alt="" />
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-roxo flex items-center justify-center">
          <div className="absolute top-12 right-8 z-60">
            <img className="w-8 cursor-pointer" src={xsimbolo} alt="" onClick={toggleMobileMenu} />
          </div>

          <ul className="flex flex-col text-center space-y-6">
            <li>
              <Link to="/refugio-onirico" className={`text-2xl ${location.pathname === '/refugio-onirico' ? 'text-white font-bold' : 'text-amarelo'}`}>
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/refugio-onirico" className={`text-2xl ${location.pathname === '/refugio-onirico' ? 'text-white font-bold' : 'text-amarelo'}`}>
                Ebooks
              </Link>
            </li>
            <li>
              <Link to="/refugio-onirico" className={`text-2xl ${location.pathname === '/refugio-onirico' ? 'text-white font-bold' : 'text-amarelo'}`}>
                Cursos Indicados
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;

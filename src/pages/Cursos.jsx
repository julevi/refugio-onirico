import React from 'react';
import Header from '../components/Header';
import QuadroCursos from '../components/QuadroCursos';
import Professor from '../components/Professor';
import Footer from '../components/Footer';
import "../styles/font.css";

function Cursos() {
  return (
    <>
      <Header />
      <QuadroCursos/>
      <Professor/>
      <Footer/>
    </>
  );
}

export default Cursos;
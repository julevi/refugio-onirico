import React from 'react';
import Header from '../components/Header';
import Apresentacao from '../components/Apresentacao';
import RefugioCursos from '../components/RefugioCursos';
import EncontreAqui from '../components/EncontreAqui';
import AcesseAqui from '../components/AcesseAqui';
import Galeria from '../components/Galeria';
import Professor from '../components/Professor';
import Footer from '../components/Footer';
import "../styles/font.css";

function Home() {
  return (
    <>
      <Apresentacao />
      <RefugioCursos/>
      <EncontreAqui/>
      <AcesseAqui/>
      <Galeria/>
      <Professor/>
    </>
  );
}

export default Home;
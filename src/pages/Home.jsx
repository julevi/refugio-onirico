import React from 'react';
import Header from '../components/Header';
import Apresentacao from '../components/Apresentacao';
import RefugioCursos from '../components/RefugioCursos';
import EncontreAqui from '../components/EncontreAqui';
import AcesseAqui from '../components/AcesseAqui';
import Professor from '../components/Professor';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <Apresentacao />
      <RefugioCursos/>
      <EncontreAqui/>
      <AcesseAqui/>
      <Professor/>
      <Footer/>
    </>
  );
}

export default Home;
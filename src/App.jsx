// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Ebooks from './pages/Ebooks';
import CursosDetalhes from './components/CursosDetalhes';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/refugio-onirico" element={<Home />} />
          <Route path="/refugio-onirico/cursos" element={<Cursos />} />
          <Route path="/refugio-onirico/ebooks" element={<Ebooks />} />
          <Route path="/refugio-onirico/cursos/:id" element={<CursosDetalhes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

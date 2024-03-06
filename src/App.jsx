import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Indicados from './pages/Indicados';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path="/refugio-onirico" element={<Home/>}/>
              <Route path="/refugio-onirico/cursos" element={<Cursos/>}/>
              <Route path="/refugio-onirico/indicados" element={<Indicados/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
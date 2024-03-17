import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Ebooks from './pages/Ebooks';
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
              <Route path="/refugio-onirico/ebooks" element={<Ebooks/>}/>
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
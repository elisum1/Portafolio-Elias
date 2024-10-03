import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Portafolio from './pages/Portafolio.jsx';
import Inicio from './pages/inicio.jsx';
import Contact from './pages/Contact.jsx';
import History from './pages/history.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;

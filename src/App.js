import React from "react";
import Hero from "./componentes/inicio/hero/hero";
import Favoritos from "./componentes/favoritos/favoritos";
import Navegador from "./componentes/navegador/nav";
import Personajes from "./componentes/personajes/personajes"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navegador />
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="/" element={<Navigate to="/Hero" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

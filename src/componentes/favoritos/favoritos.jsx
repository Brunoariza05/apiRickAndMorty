import React, { useEffect, useState } from "react";
import FavoritosTemplate from "./heroFavoritos/favoritosTemplate";
import './favoritos.css';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);
  const [aviso, setAviso] = useState('');

  useEffect(() => {
    // Obtener la lista de personajes favoritos del localStorage
    const personajesFavoritos = JSON.parse(localStorage.getItem('personajesGuardados')) || [];
    setFavoritos(personajesFavoritos);

    // Limpiar el aviso después de 2.5 segundos
    if (aviso) {
      const timeoutId = setTimeout(() => {
        setAviso('');
      }, 2500);

      return () => clearTimeout(timeoutId);
    }
  }, [aviso]);

  const limpiarLocalStorage = () => {
    localStorage.removeItem('personajesGuardados');
    setFavoritos([]); // Limpiar local storage, lista de favoritos
    setAviso('Se ha limpiado la lista de personajes favoritos.');
  };

  const quitarPersonaje = (nombre) => {
    // Obtener la lista actual de personajes guardados del localStorage
    const personajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || [];
    
    // Filtrar el personaje a quitar
    const nuevosFavoritos = personajesGuardados.filter(p => p.nombre !== nombre);
    
    // Actualizar el localStorage y el estado
    localStorage.setItem('personajesGuardados', JSON.stringify(nuevosFavoritos));
    setFavoritos(nuevosFavoritos);
    setAviso('Se ha eliminado el personaje de favoritos.');
  };

  return (
    <div id="favoritos-contenedor">
      <div id="p">
        <p id="favoritos-titulo">Tus personajes favoritos</p>
        <p id="trash" onClick={limpiarLocalStorage}>🗑️</p>
      </div>
      {favoritos.length > 0 ? (
        <div id="lista-favoritos-contenedor">
          {favoritos.map(personaje => (
            <FavoritosTemplate
              key={personaje.nombre} 
              nombre={personaje.nombre}
              especie={personaje.especie}
              imagen={personaje.imagen}
              onQuitar={() => quitarPersonaje(personaje.nombre)}
            />
          ))}
        </div>
      ) : (
        <p id="aviso-lista-vacia">Aún no hay personajes guardados.</p>
      )}
      {aviso && <p id="aviso-limpieza-personajes">{aviso}</p>}
    </div>
  );
};

export default Favoritos;

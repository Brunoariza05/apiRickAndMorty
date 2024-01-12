import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PersonajesTemplate from "./heroPersonajes/personajesTemplate";
import './personajes.css';

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [mensajeAgregado, setMensajeAgregado] = useState(false);
  const [mensajeQuitado, setMensajeQuitado] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        // Indicar que la carga está en progreso
        setCargando(true);

        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`);
        const data = await response.json();
        setPersonajes((prevPersonajes) => [...prevPersonajes, ...data.results]);
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      } finally {
        // Indicar que la carga ha terminado
        setCargando(false);
      }
    };

    obtenerPersonajes();
  }, [pagina]);

  const cargarMasPersonajes = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  const guardarPersonajeEnLocalStorage = (personaje) => {
    const personajesGuardados = JSON.parse(localStorage.getItem('personajesGuardados')) || [];
    const existePersonaje = personajesGuardados.some(p => p.nombre === personaje.nombre);

    if (!existePersonaje) {
      personajesGuardados.push(personaje);
      localStorage.setItem('personajesGuardados', JSON.stringify(personajesGuardados));
      setMensajeAgregado(true);
    } else {
      const nuevosPersonajesGuardados = personajesGuardados.filter(p => p.nombre !== personaje.nombre);
      localStorage.setItem('personajesGuardados', JSON.stringify(nuevosPersonajesGuardados));
      setMensajeQuitado(true);
    }

    setTimeout(() => {
      setMensajeAgregado(false);
      setMensajeQuitado(false);
    }, 3000);
  };

  return (
    <>
      <div id="contenedor-personajes">
        <h4 id="personajes-titulo">Personajes</h4>
        <div id="lista-personajes-contenedor">
          {personajes.map(personaje => (
            <PersonajesTemplate
              key={personaje.id}
              nombre={personaje.name}
              especie={personaje.species}
              imagen={personaje.image}
              onGuardar={guardarPersonajeEnLocalStorage}
            />
          ))}
        </div>
        {cargando && <FontAwesomeIcon icon={faSpinner} spin size="3x" id="cargando" />}
        <button id="personajes-boton" onClick={cargarMasPersonajes}>
          Ver más
        </button>
      </div>
      {mensajeAgregado && <p id="personaje-favorito">El personaje fue agregado a favoritos.</p>}
      {mensajeQuitado && <p id="personaje-quitado">El personaje fue quitado de favoritos.</p>}
    </>
  );
};

export default Personajes;

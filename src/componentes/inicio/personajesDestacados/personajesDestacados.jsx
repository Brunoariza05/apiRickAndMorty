import React from "react";
import './personajesDestacados.css';
import { Link } from 'react-router-dom';
import TemplatePersonajes from "./templatePersonajes";
import { useState, useEffect } from "react";

const PersonajesDestacados = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
     const obtenerPersonajes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setPersonajes(data.results);
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      }
    };

    obtenerPersonajes();
    }, []);

    return (
        <>
        <div id="personajes-destacados-contenedor">
            <h3 id="personajes-destacados-titulo">personajes destacados ★</h3>
        <div id="personajes-contenedor">
            {personajes.map(personaje => (
          <TemplatePersonajes
            key={personaje.id}
            nombre={personaje.name}
            especie={personaje.species}
            imagen={personaje.image}
          />
        ))}
        </div>
        <button id="personajes-destacados-boton"><Link to="/personajes">ver mas</Link></button>
       </div>
        </>
    )
};

export default PersonajesDestacados;
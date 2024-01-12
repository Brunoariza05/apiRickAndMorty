import React from "react";
import PersonajesDestacados from "../personajesDestacados/personajesDestacados";
import Formulario from "../formulario/formulario";
import './hero.css';

const Hero = () => {
    return (
        <>
        <div id="hero-contenedor">
            <h1 id="hero-titulo">RICK AND MORTY</h1>
            <p id="hero-subtitulo">los personajes</p>
        </div>
        <PersonajesDestacados />
        <Formulario />
        </>
    )
};

export default Hero;
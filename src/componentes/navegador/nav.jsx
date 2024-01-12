import React from "react";
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import './nav.css';

const Navegador = () => {
    return (
        <div id="nav-contenedor">
            <img src={logo} id="imagen-logo" alt="logo"/>
            <ul id="nav-opciones">
                <li className="nav-opcion"><Link to="/Hero">INICIO</Link></li>
                <li className="nav-opcion"><Link to="/personajes">PERSONAJES</Link></li>
                <li className="nav-opcion"><Link to="/favoritos">FAVORITOS</Link></li>
            </ul>
        </div>
    );
};

export default Navegador;

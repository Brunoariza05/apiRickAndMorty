import React from "react";

const TemplatePersonajes = ( {nombre, imagen, especie }) => {
    return (
        <>
        <div id="card-contenedor">
            <h1>{nombre}</h1>
            <h1>{especie}</h1>
            <img src={imagen} alt={nombre} />
        </div>
        </>
    )
};

export default TemplatePersonajes;
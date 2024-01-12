import React, { useState } from "react";

const PersonajesTemplate = ({ nombre, imagen, especie, onGuardar }) => {
  const [estrellaRellena, setEstrellaRellena] = useState(false);

  const handleClick = () => {
    setEstrellaRellena(!estrellaRellena);
    onGuardar({ nombre, imagen, especie });
  };

  return (
    <>
      <div id="card-contenedor">
        <h1>{nombre}</h1>
        <h1>{especie}</h1>
        <img src={imagen} alt={nombre} />
        <p className="estrella" onClick={handleClick}>
          {estrellaRellena ? '★' : '☆'}
        </p>
      </div>
    </>
  );
};

export default PersonajesTemplate;

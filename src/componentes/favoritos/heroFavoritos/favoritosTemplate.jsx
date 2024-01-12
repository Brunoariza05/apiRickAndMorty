import React from "react";

const FavoritosTemplate = ({ nombre, especie, imagen, onQuitar }) => {
  return (
    <>
      <div id="card-contenedor">
        <h1>{nombre}</h1>
        <h1>{especie}</h1>
        <img src={imagen} alt={nombre} />
        <p id="cruz" onClick={onQuitar}>❌</p>
      </div>
    </>
  );
};

export default FavoritosTemplate;

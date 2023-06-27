import React from "react";

function Prueba(props) {
  return (
    <div className="cartas" style={{ backgroundColor: props.color }}>
      <h1>Nombre: {props.nombre}</h1>
      <h2>edad: {props.edad} años</h2>
      <p>profesion: {props.profesion}</p>
    </div>
  );
}

export default Prueba;

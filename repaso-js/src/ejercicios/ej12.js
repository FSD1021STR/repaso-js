import React from "react";

//Muestra la posicion del array y el nombre del equipo siguiendo este formato: posicion.equipo
const Ej12 = (props) => {
  const equipos = ["Barça", "Sevilla", "Betis", "Cadiz", "Alcorcon", "Madrid"];

  return (
    <div>
      <h1>Lista de equipos</h1>
      <p>
        {equipos.map((equipo,indice)=>(
          <p>
            {indice}.{equipo}
          </p>
        ))}
      </p>
    </div>
    /*<div>
    <h1>Lista de equipos</h1>
    <p>
      {equipos.map((equipo, indice) => (
        <p>
          {indice}.{equipo}
        </p>
      ))}
    </p>
  </div>*/
  );
};

export default Ej12;

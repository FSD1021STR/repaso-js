import React from "react";

const Ej8 = (props) => {
  const equipos = ["Barça", "Sevilla", "Betis", "Cadiz", "Alcorcon", "Madrid"];

  return (
    <div>
      <h1>Lista de equipos</h1>
      <p>
        {equipos.map((equipo, indice) => (
          <p>
            {indice}.{equipo}
          </p>
        ))}
      </p>
    </div>
  );
};

export default Ej8;

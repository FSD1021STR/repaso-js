import React from "react";

const Ej10 = (props) => {

  const amigos = [
    {
      nombre: "pepe",
      edad: 32,
    },
    {
      nombre: "paco",
      edad: 22,
    },
    {
      nombre: "pedro",
      edad: 42,
    },
    {
      nombre: "luis",
      edad: 52,
    },
    {
      nombre: "jesus",
      edad: 62,
    },
    {
      nombre: "jose",
      edad: 72,
    },
  ];

  return (
    <div>
      <h1>Mis amigos mayores de 42 años</h1>
      <p>
        {amigos.filter(amigo => amigo.edad > 42).map(amigo => <p>{amigo.nombre}-{amigo.edad}</p>)}
      </p>
    </div>
  );
};

export default Ej10;
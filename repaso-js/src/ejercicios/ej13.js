import React from "react";
//Muestra solo el nombre de cada uno de los amigos

const Ej13 = (props) => {
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

  // {
  //   /*amigos.???(amigo => (
  //   <p>
  //     {amigo.???}
  //   </p>
  // ))*/
  // }
  return (
    <div>
      <h1>Mis amigos son</h1>
      <p>
        {amigos.map((amigo) => (
          <p>{amigo.nombre}</p>
        ))}
      </p>
    </div>
  );
};

export default Ej13;

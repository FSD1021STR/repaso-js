import React from "react";

// Filtra el array de amigos por una edad en especifico, luego muestra el resultado siguiendo este estilo: pepe - 32

const Ej14 = (props) => {

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
        {/*amigos.???(amigo => ???).???(amigo => <p>{amigo.???}-{amigo.???}</p>)*/}
        {amigos
          .filter((amigo) => amigo.edad > 42)
          .map((amigo) => (
            <p>
              {amigo.nombre} - {amigo.edad}
            </p>
          ))}
      </p>
    </div>
  );
};

export default Ej14;
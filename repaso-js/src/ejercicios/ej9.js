import React from "react";

//Muestra el nombre de mis amigos

const Ej9 = (props) => {

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
      <h1>Mis amigos son</h1>
      <p>
        {/*amigos.???(amigo => (
          <p>
            {amigo.???}
          </p>
        ))*/}
      </p>
    </div>
  );
};

export default Ej9;

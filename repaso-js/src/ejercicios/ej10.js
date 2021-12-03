import React from 'react';



const Ej10 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];

    return (
      <div>
        {/* Esta Luis entre mis amigos?:  amigos.???(amigo => ????).toString() */}
        Esta Luis entre mis amigos?: {amigos.find((amigo) => amigo === "luis")}
        {/* .toString()} */}
      </div>
    );
}

export default Ej10;
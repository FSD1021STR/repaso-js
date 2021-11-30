import React from 'react';
//Muestra todos los elementos del array separados por comas
const Ej3 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];

    return (
        <div>
            {amigos.join(", ")}
        </div>
    )
}

export default Ej3;
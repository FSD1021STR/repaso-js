import React from 'react';

//Selecciona mis mejores amigos "pedro" y "luis"
const Ej5 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];

    return (
        <div>
            {amigos.slice(2, 4).join(", ")}
        </div>
    )
}

export default Ej5;
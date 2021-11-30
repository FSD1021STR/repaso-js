import React from 'react';

//Selecciona mis mejores amigos "pedro" y "luis"
const Ej5 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];

    return (
        <div>
            {amigos.splice(2, 2).join(", ")}
        </div>
    )
}

export default Ej5;
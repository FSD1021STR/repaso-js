import React from 'react';

//Añade a "jaime" a mis amigos
const Ej6 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];
    amigos.push('Jaime');
    return (
        <div>
            {amigos.join(', ')}
        </div>
    )
}

export default Ej6;
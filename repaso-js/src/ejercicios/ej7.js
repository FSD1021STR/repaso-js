import React from 'react';

const Ej7 = (props) => {
    const amigos = ["pepe", "paco", "pedro", "luis", "jesus", "jose"];

    return (
        <div>
            {amigos.map(amigo => <p>Mi amigo es: {amigo}<br/></p>)}
        </div>
    )
}

export default Ej7;
import React from 'react';

const Ej2 = (props) => {
    const nadar = "nadar";
    const correr = "correr";
    const bicicleta = "bicicleta";

    const deporte = correr;

    const objeto = () => {
        if(deporte === nadar) {
            return "bañador";
        } else if (deporte === correr) {
            return "bambas";
        } else {
            return "bicicleta";
        }
    }

    return (
        <div>
            <p>Que deporte voy a realizar?: {deporte}</p>
            <p>Que voy a necesitar? {objeto()}</p>
        </div>
    )
}

export default Ej2;
import React from 'react';

const Ej1 = (props) => {
    const luzRoja = "rojo";
    const luzVerde = "verde";

    const semaforo = luzVerde;

    const puedoPasar = () => {
        if(semaforo === luzRoja) {
            return "No";
        }
        else {
            return "Si";
        }
    }

    return (
        <div>
            <p>El semaforo esta en: {semaforo}</p>
            <p>Puedo pasar?: {puedoPasar()}</p>
        </div>
    )
}
export default Ej1;
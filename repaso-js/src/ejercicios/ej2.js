import React from 'react';


//Que objeto necesito para cada deporte?
const Ej2 = (props) => {
    const nadar = "nadar";
    const correr = "correr";
    const bicicleta = "bicicleta";

    const deporte = correr;

    const objeto = () => {
        if (deporte===nadar) {
            return 'bañador'
        }
        else if (deporte===correr){
            return 'bambas'
        }
        else {
            return 'bici'
        }
        //si el deporte es nadar, necesitare el bañador
        //si es correr, bambas
        //o sino la bicicleta
    }

    return (
        <div>
            <p>Que deporte voy a realizar?: {deporte}</p>
            <p>Que voy a necesitar? {objeto()}</p>
        </div>
    )
}

export default Ej2;
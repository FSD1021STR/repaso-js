import React from 'react';


//Que objeto necesito para cada deporte?
const Ej2 = (props) => {
    const nadar = "nadar";
    const correr = "correr";
    const bicicleta = "bicicleta";

    const deporte = correr;

    const objeto = () => {
        //si el deporte es nadar, necesitare el bañador
        if (deporte==="nadar"){
            return(
                <p>Need a Swimsuit</p>
            )
        }
        //si es correr, bambas
        else if (deporte==="correr") {
            return(
                <p>Need Running Shoes</p>
            )
        }
        //o sino la bicicleta
        else{
            return(
                <p>Need a Bike</p>
            )
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
import React from 'react';

const Ej1 = (props) => {
    const luzRoja = "rojo";
    const luzVerde = "verde";

    const semaforo = luzRoja;

    //En los Condicionales simpre hay que definir antes las constantes que van 
    //intervenir y luego dejar fija una de estas constantes.

    const puedoPasar = () => {
        if (semaforo==="red") {
            return (
                <p>Stop, if u care about ur life!!</p>
            )
        }

        else {
            return(
                <p>Go ahead!</p>
            )
        }
        //si la luz es roja, no puedo pasar, si es verde si
        //en vez de usar CONSOLE.LOG, usamos RETURN
    }

    return (
        <div>
            <p>El semaforo esta en: {semaforo}</p>
            <p>Puedo pasar?: {puedoPasar()}</p>
        </div>
    )
}
export default Ej1;
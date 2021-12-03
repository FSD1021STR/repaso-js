import React from 'react';

const Ej1 = (props) => {
    const luzRoja = "rojo";
    const luzVerde = "verde";

    const semaforo = luzRoja;

    const puedoPasar = () => {
      //si la luz es roja, no puedo pasar, si es verde si
      if (semaforo === luzRoja) {
        return "No puede pasar";
      } else {
        return "Si puede pasar";
      }
    };

    return (
      <div>
        <p>El semaforo esta en: {semaforo}</p>
        <p>Puedo pasar ? : {puedoPasar()}</p>
      </div>
    );
}
export default Ej1;
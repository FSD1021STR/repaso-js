import React from 'react';

const Ej11 = (props) => {
    const numeros = [20,50,30,10,80,40];

    return (
      <div>
        {/* Hay algun numero superior a 30?:  numeros.????(numeros => ????).toString() */}
        Hay algun numero superior a 30 ?:{" "}
        {numeros.filter((numero) => numero > 30).join(", ")}
        {/* .toString()} */}
      </div>
    );
}

export default Ej11;
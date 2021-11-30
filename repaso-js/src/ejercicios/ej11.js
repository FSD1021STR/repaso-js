import React from 'react';

const Ej11 = (props) => {
    const numeros = [20,50,30,10,80,40];

    return (
        <div>
          Hay algun numero superior a 30?:  {numeros.some(numeros => numeros > 30).toString()}
        </div>
    )
}

export default Ej11;
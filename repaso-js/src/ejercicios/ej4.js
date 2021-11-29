import React from 'react';

const Ej4 = (props) => {
    const numeros = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div>
           Los numeros superiores a 5 son: {numeros.filter(numero => numero > 5).toString()}
        </div>
    )
}

export default Ej4;
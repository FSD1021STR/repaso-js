import React from 'react';

const Ej8 = (props) => {
    const numeros = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div>
           Los numeros superiores a 5 son: {numeros.filter(numero => numero > 5).join(",")}
        </div>
    )
}

export default Ej8;
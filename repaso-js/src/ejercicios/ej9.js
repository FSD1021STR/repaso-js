import React from 'react';

const Ej9 = (props) => {
    const elementos = ["hipotenusa", "cateto", "pitagoras", "x", "y", "z"];

    return (
        <div>
          Encuentra la x:  {elementos.find(elemento => elemento === "x")}
        </div>
    )
}

export default Ej9;
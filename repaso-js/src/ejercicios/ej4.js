import React from 'react';
//elimina a los nazis del array
const Ej4 = (props) => {
    const guerraMundial = ["aliados", "comunistas", "nazis"];
    guerraMundial.pop();
    return (
        <div>
            {guerraMundial.join(", ")}
        </div>
    )
}

export default Ej4;
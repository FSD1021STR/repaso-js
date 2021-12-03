import React from "react";

const ArrowFunction = () => {
    const concatena = (palabra1, palabra2) => {
        return palabra1+palabra2
    }
    const sergioRadigales = concatena("Sergio " , "Radigales")
    return(
        <div>
            {sergioRadigales}
        </div>
    )
}

export default ArrowFunction;

//standar para React. Pura MODA. 
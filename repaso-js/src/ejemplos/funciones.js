import React from "react";

export function Funcion() {
    
    const suma=(n1, n2) => n1+n2 //forma sencilla de estructurar una funcion
    //solo utilizable cuando hay 1 sola linea de codigo//
    const resta=(n1,n2) => n1-n2

    const plus=(n1, n2, n3) => {
        return (
            n1+n2+n3
        ) // esta es la segunda forma de estructurar una funcion. 
    }
     return(
        <div>
            {suma(7,3)}
            {resta(10,7)}
            {resta(1,8)}
            {resta(5,5)}
            {plus(7,7,7)}
        </div>
        )
}

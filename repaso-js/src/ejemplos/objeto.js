import React from "react";

function EjemploObjeto () {
    const persona = {
        nombre: "Jaume", // propiedad del objeto persona
        apellido: "Meskini",
        edad: 32
        }
    return (
        <div>
            {persona.nombre}
        </div>
    )
}

export default EjemploObjeto;
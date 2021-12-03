import React from "react";

function EjemploArray () {
    const verduras = ["patata", "pimiento", "espinacas", "zanahorias"];
    const coche = {
        año: 2020,
        color: "negro",
        matricula: "3456 JMC",
        piezas: ["motor", "volante", "ruedas"]
        }
        const coches = [{
            año: 2020,
            color: "negro",
            matricula: "3456 JMC",
            piezas: ["motor", "volante", "ruedas"]
            }, {
            año: 2008,
            color: "rojo",
            matricula: "1234 FXP",
            piezas: ["piston", "cilindro", "ruedas"]
            }]
        return (
            <div>
                <div>
                    {verduras[2]} 
                    
                </div>
                <div>
                    {coche.piezas[1]}
                </div>
                <div>
                    {coches[1].piezas[1]}
                </div>
            </div>
    )
}

export default EjemploArray;
/* {verduras[2]} para llamar a elemento del Array por su orden
*/
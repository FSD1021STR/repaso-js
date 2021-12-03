import React from "react";
import "./myArrow.css";

 export const MyArrow = () => {
    const concatena = (p1,p2) => {
        return p1+p2
    }
    
    return(
        <div className="container">
            <div className="arrow1">
                <div className="concat1">
                    {concatena("My ", "Arrow ", "Function")}
                </div>
                <div className="exp1">
                    <p>Este tipo de codigo lo usaria si solo quisiese usar este mensaje una vez</p>
                    <p>Ya que la funcion concatena solo tiene mensaje definido 1 vez, en el return</p>
                </div>
            </div>
        </div>

    )
}

export const MyArrow2 = () => {
    const concatena = (p1,p2,p3) => {
        return p1+p2+p3
    }
    const myArrow2 = concatena("My ", "Arrow ","Function2")
    return(
        <div className="container">
            <div className="arrow2">
                <div className="concat2">
                    {myArrow2}
                </div>
                <div>
                    <p>De este modo en el que planteo el codigo podre usar 
                    la funcion concatena las veces que yo crea oportuno, 
                    ya que defino el mensaje que mostrara concatena como una constante</p>
                </div>
                <div className="concat2">{myArrow2}</div>
                <div className="concat2">{myArrow2}</div>
                <div className="concat2">{myArrow2}</div>
                <div className="concat2">{myArrow2}</div>
            </div>
        </div>
    )
    
}
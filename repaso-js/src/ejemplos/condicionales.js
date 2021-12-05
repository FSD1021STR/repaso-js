import React from "react";

export function Estatus() {

const pasarloBien= "party"
const estudiar= "focus"
const triunfar= "code"

const estado= estudiar

const estatus= () => {
    if (estado==="party") {
        return(
            <p>Take a lot of money and waste it with no regrets!!</p>
        )
    }
    else if (estado==="focus") {
        return(
            <p>Sit on the chair and focus on ur pro goals!</p>
        )
    }
    else {
        return(
        <p>Open VSC</p>
        )
    }
} 
      return(
          <div>
              <div>
                <h2>What I want Today?? {estado}</h2>
              </div>
              <div>
                I must {estatus()}
              </div>
          </div>
      )
}
import React from "react";

export const MetodosArray =() => {
    const amigos = ["Marta" ,"Tate" , "Silvia" , "Javi" , "Luis"]
    // console.log(amigos.pop()) esto es para eliminar el ultimo 
    // de los elementos del Array
    return(
        <div>
            <div>
                 {amigos.slice(2,3)}
                 {amigos.join(",")}
            </div>
            <div>
                {amigos.join("")}
            </div>
        </div>
    )
}
//el metodo .slice (x,x), no se queda con el ultimo elemento, 
//si elegimos el rango 1,3, nos mostrara desde la posicion 1 a la 2.s

export const Amigos=() => {
    const amigos =["Silvia","Javi","Antonio","Elvira"]
    amigos.push("Alexa")
    return(
        <div>
            <div>
                {amigos.find(x=>x===2)}                
            </div>
            <div>
                {amigos.slice(1,3).join(" ")}
            </div>
            <div>
                {amigos.push("Juan")}
            </div>
        </div>      
    )
}

export const Push = () => {
    const friends = ["Alexa", "Chico", "Maya", "Tala"]
    friends.push("DevilSound")
    return(
        <div>
            {friends.join(" /")}
        </div>
    )
}

export const MoreMetodos=() => {
    const friends = ["Alexa", "Chico", "Maya", "Tala"]
    return(
        <div>
            {friends.map(friend=>friend).join("/ ")}
            {friends.filter(friend => friend)}
        </div>
    )
}

export const MetodosInteresante = () => {
    const amigos = [{
        id: "1",
        nombre: "Alexa",
        apellido: "GataRoneante",
        edad: 1.3
    },
    {
        id:"2",
        nombre: "Marta",
        apellido: "Alejandre",
        edad: 27,
        },
    {
        id:"3",
        nombre: "Raisa",
        apellido: "Barcelona",
        edad: 32,
    },
    {
        id:"4",
        nombre: "Carlos",
        apellido: "Radigales",
        edad: 62
    },
    {
        id:"5",
        nombre: "Marisa",
        apellido: "Pastor",
        edad: 57
    },
    {
        id:"6",
        nombre: "Juan",
        apellido:"Sora",
        edad: 39
    }
    ]

    //en la practica, para buscar un solo elemento usamos .FIND
    //si queremos hacer un listado o queremos filtrar por letras
    //usamos .FILTER

    const amigoJuan =
        amigos.find(amigo=>amigo.id==="6")
    const mayoresDeTreinta = 
        amigos.filter((amigo)=>amigo.edad>30)
        .map(amigo=>amigo.nombre+ " " + amigo.apellido)
        .join("/ ")
    
    return(
        <div>
        <div>
            {mayoresDeTreinta}
            
        </div>
        <div>
            {amigoJuan}
        </div>
        </div>
    )
}

export const SecondTry = () => {
    const amigos = [{
        id: "1",
        nombre: "Alexa",
        apellido: "GataRoneante",
        edad: 1.3
    },
    {
        id:"2",
        nombre: "Marta",
        apellido: "Alejandre",
        edad: 27,
        },
    {
        id:"3",
        nombre: "Raisa",
        apellido: "Barcelona",
        edad: 32,
    },
    {
        id:"4",
        nombre: "Carlos",
        apellido: "Radigales",
        edad: 62
    },
    {
        id:"5",
        nombre: "Marisa",
        apellido: "Pastor",
        edad: 57
    },
    {
        id:"6",
        nombre: "Juan",
        apellido:"Sora",
        edad: 39
    }
    ]

    const amigoJuan = amigos.find(amigo =>amigo.id==="6")
return(
    <div>
        {amigoJuan.nombre}
    </div>
)}


//Normalmente la logica de JS va antes del RETURN, 
//y el HTML solo va para mantener la estructura.
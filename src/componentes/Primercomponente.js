import React, {useState} from "react";

export const Primercomponente = () => {

    // let nombre = "ema";
    let web = "emaweb.es";

    const [ nombre, setNombre] = useState("ema");

    let curso = "6to C";

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre) ;
    }


  return (
    <div>
      {/* <h2>Hola</h2> */}
      <p>Mi nombre es: {nombre} </p>
      {/* <p>Mi curso es: {curso} </p> */}

    <button type="button" onClick={ () => cambiarNombre("Mire profe, soy genial :)")}>
        Cambiar nombre
        </button>
    </div>
  );
};

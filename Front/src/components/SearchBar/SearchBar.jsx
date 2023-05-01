import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  // osea onSearch es una propiedad de props = {onSearch= (caca)=>{return caca};}
  const [id, setID] = useState(""); // esto es <input>""</input>
  const funcion = (event) => {
    // cuando usamos esta funcion el input puede valer cualquier valor
    setID(event.target.value);
    // event.target es quien hace el evento ( en este caso es input);
  };
  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="search"
        placeholder="Ingrese un numero del 1 al 826"
        onChange={funcion}
      />
      {/*input de tipo buscador*/}
      <button
        className={styles.boton}
        onClick={() => {
          onSearch(id);
        }}
      >
        Buscar
      </button>
      {/*Boton X, cuando se le hace clic se ejecuta una funcion y se ejecuta una funcion recibida por parametro*/}
    </div>
  );
}
/*ME APARECIA UN ALERT CON UNDEFIEND PORQUE ESTABA INVOCANDO LA FUNCION ONSHEARCH() Y ESO ES INCORRECTO
DEBIA HACER UNA FUNCION QUE EJECUTE ESA OTRA FUNCION.. EL PARAMETRO ID ES DE CADA PERSONAJE..*/

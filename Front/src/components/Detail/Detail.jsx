import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styles from "./Detail.module.css";
import Nav from "../Nav/Nav";

const Detail = () => {
  const { id } = useParams(); // ! ERROR QUE ME COSTO LA VIDA FUE PONER ID EN VEZ DE DETAILID...PORQUE EN LAS RUTAS DE APP TENGO COM DETAIL/DETAILID
  const [character, setcharacter] = useState({});
  useEffect(() => {
    //* cuando el componente se monte vamos hgacer la peticion a la url con el id que obtenemos de params Hook..
    const URL = "http://localhost:3001";
    axios
      .get(`${URL}/detail/${id}`)
      .then((Response) => setcharacter(Response.data));
  }, []);
  return (
    <>
      <Nav />
      <div className={styles.padre}>
        <div className={styles.div1}>
          {character.name ? (
            <div className={styles.div2}>
              <div className={styles.div3}>
                <h2>Name: {character.name}</h2>
                <h2>Status: {character.status}</h2>
                <h2>Specie: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2>
                {/*Se pregunta si ya se cargo esta propiedad , entonces que se ejecute y devuelva la propiedad name del origin que es propiedad de character*/}
              </div>
              <img className={styles.imagen} src={character.image} />
            </div>
          ) : (
            <h3 className={styles.h3}>Loading...</h3> //* si todavia no llego la repuesta o se tarda en darnosla entonces renderizamos un "CARGANDO".
          )}
        </div>
      </div>
    </>
  );
};
export default Detail;

{
  /*Este código es el que buscará al personaje de la API cada vez que el componente se monte.*/
}
{
  /*Y luego, cada vez que se desmonte, borrará su información.*/
}
{
  /*operador ternario ? si se cumple la condicion : si no se cumple la condicion*/
}
{
  /*Poner siempre () parentesis cuando se trata de retornar mucho codigo y siempre un div vacio , para que todo ese codigo sea un solo elemento*/
}

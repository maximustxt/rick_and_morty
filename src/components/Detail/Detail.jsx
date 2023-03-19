 import { useState } from "react";
 import {useParams} from "react-router-dom";
 import { useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import styles from "./Detail.module.css";


 const Detail = () => {
 const {detailId} = useParams();
 const [character,setcharacter] = useState({});
 useEffect(() => {
   const URL = "https://be-a-rym.up.railway.app/api";
   const KEY = "2fed7cd4836b.dab7726779e7348bd5ea";

axios(`${URL}/character/${detailId}?key=${KEY}`)
.then((Response) => setcharacter(Response.data))
 },[]);
   return (
     <div>
      { character.name ?
         (<div className={styles.div}>
          <div className= {styles.div1}>  
         <h2>Name: {character.name}</h2>
         <h2>Status: {character.status}</h2>
         <h2>Specie: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>Origin: {character.origin?.name}</h2> {/*Se pregunta si ya se cargo esta propiedad , entonces que se ejecute y devuelva la propiedad name del origin que es propiedad de character*/}
         </div>
         <img  className={styles.imagen} src={character.image} />
         <Link to={"/home"}>
         <button className={styles.boton}>Home</button>
         </Link> 
         </div>)
         : <h3 className={styles.h3} >Loading...</h3>
      }  
     </div>
   )
 }
 export default Detail;

{/*Este código es el que buscará al personaje de la API cada vez que el componente se monte.*/}
{/*Y luego, cada vez que se desmonte, borrará su información.*/}
{/*operador ternario ? si se cumple la condicion : si no se cumple la condicion*/}
{/*Poner siempre () parentesis cuando se trata de retornar mucho codigo y siempre un div vacio , para que todo ese codigo sea un solo elemento*/}
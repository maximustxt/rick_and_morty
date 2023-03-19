import {Link} from "react-router-dom";
import { addFavorite,deleteFavorite } from "../../redux/actions";
import styles from "./Card.module.css"; // el ./ => esto quiere decir que es en la carpeta... ../ sale de la carpeta y entra en la carpeta que le indiquemos => ../Card/Card.jsx
import { connect } from "react-redux";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


 function Card ({id,name,species,gender,image,onClose,addFavorite,deleteFavorite,myFavorites}){
    
       const [isFav , setIsFav] = useState(false);
      // dispatch le enviaba informacion a las actiond para que despues la funcion reduce , cambie o modifique el estado global con esa misma informacion
    
        // useEffect(() => {
        //      for(let i = 0; i<myFavorites.length; i++){
        //               if(myFavorites[i].id === id){
        //                       setIsFav(true);
        //                  }
        //              }
        //          }, [myFavorites]);

     useEffect(() => {
         myFavorites.forEach((fav) => {
            if (fav.id === id) {
               setIsFav(true);
            }
         });
      }, [myFavorites]);
     

    const handleFavorite = (dispatch) => {
         if(isFav === true){
                setIsFav(false);
                dispatch(deleteFavorite(id)); // esto le manda a action ==> {type: delete , payload : id que nos dan por aca..}
            } else {
                    setIsFav(true);
                     dispatch(addFavorite({id,name,species,gender,image,onClose}));
                }
                }
            
            
                 return (
                        <div className={styles.contenedor}>
                            <div className={styles.divBoton}  >
                             {
                        isFav ? (
                               <button  className={styles.boton11} onClick={handleFavorite}>❤️</button>
                            ) : (
                                   <button  className={styles.boton11} onClick={handleFavorite}>🤍</button>
                                )
                             }
                                         <button className={styles.boton} onClick={()=>onClose(id)}>X</button>
                            </div>
                                          <Link to={`/detail/${id}`} className={styles.Link}>  
                                         <h2>Nombre: {name}</h2>
                                         </Link> 
                                         <h2 className={styles.caracter} >Specie: {species}</h2>
                                         <h2 className={styles.caracter} >Genero: {gender}</h2>
                                      <img  className={styles.img} src={image} alt=""/>
                                     </div>
                                 )
                                 }


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}
// traemos el state global de redux , esto no los brinda la funcion conecct()..
// y luego esto lo tenemos como props en nuestro componentes Card..

const mapDispatchToProps = (dispatch) => {
    return {
      addFavorite: (character) => {
          dispatch(addFavorite(character))
        },
        deleteFavorite: (id)=> {
            dispatch(deleteFavorite(id));
        }
    };
};



export default connect(mapStateToProps,mapDispatchToProps)(Card);

                            
                            
    {/* <Link to={`/detail/${id}`}> esto seria que cuando aga clic en el link me va aparecer el id de cada personaje en un nuevo servidor o Ruta*/}
    {/* pagina the shadow css generator es super util*/}
   
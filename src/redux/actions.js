 export const ELIMINAR = "ELIMINAR";
 export const AGREGAR = "AGREGAR";
 export const  FILTER = "FILTER";
 export const ORDER = "ORDER";


  export const addFavorite = (character) => {
        return {type: AGREGAR,payload: character};
 }


  export const deleteFavorite = (id) => {
         return {type: ELIMINAR, payload: id};
 }


 export const filterCards = (gender) => {
       return {type: FILTER,payload: gender,}
 }

 export const orderCards = (id) => {
       return {type: ORDER,payload:id,}
 }

{/*A la funcion delteFavorite recibe el id de los personajes y addFavorite recibe un personaje*/}
import axios from "axios";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const LOGIN = "LOGIN";
export const GET_FAVORITES = "GET_FAVORITES";
export const REMPLACE_FAV = "REMPLACE_FAV";
export const REMPLACE_HOME = "REMPLACE_HOME";
export const VACIO_HOME = "VACIO_HOME";

export const getFavorites = (idUser) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/favoritos?idUser=${idUser}`
      );
      dispatch({ type: GET_FAVORITES, payload: response.data });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        //* cuando me tiraba el error de estado 500 cuando hacia el dispatch del get , aca lo que hago es preguntar por ese error y setear el peyload en un array vacio , de esta manera no mostrara mas la card ultima cundo sea eliminada
        dispatch({ type: GET_FAVORITES, payload: [] });
      } else {
        //* de lo contrario tirrar el error normal y corriente de catch..
        alert(error.response.data.error);
      }
    }
  };
};

export const Login = (username, password) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/login?username=${username}&password=${password}`
      );
      if (response.data.access === true) {
        dispatch({ type: LOGIN, payload: response.data.dataValues.id });
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};

export const RemplaceFav = (Array) => {
  return { type: REMPLACE_FAV, payload: Array };
};

{
  /*A la funcion delteFavorite recibe el id de los personajes y addFavorite recibe un personaje*/
}

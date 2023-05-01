import { Link } from "react-router-dom";
import { getFavorites, RemplaceFav } from "../../redux/actions";
import styles from "./Card.module.css"; // el ./ => esto quiere decir que es en la carpeta... ../ sale de la carpeta y entra en la carpeta que le indiquemos => ../Card/Card.jsx
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
// import imagen from "../image/multiplicar.png";

function Card({ id, name, species, gender, image, onClose, Fav }) {
  const idUser = useSelector((state) => state.idUser);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const character = { name, species, gender, image };

  const addFavorite = async (character) => {
    const Character = { ...character, idUser: idUser };
    try {
      await axios.post("http://localhost:3001/favoritos", Character); // character sweia el body que luego lo usamos en nuestro servidor y aparte character es lo que le pasamos como argumento a esta funcion cuando hacemos la funcion handleFavorite ===> character ===> addFavorite({ id, name, species, gender, image }).
      swal({
        text: "Personaje agregado como Favorito.",
        icon: "success",
        buttons: "Aceptar",
      });
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "warning",
        buttons: "Aceptar",
      });
    }
  };

  // dispatch(getFavorites(idUser));

  const deleteFavorite = async (id, idUser) => {
    try {
      const result = await axios.delete(
        `http://localhost:3001/favoritos/${id}?idUser=${idUser}`
      ); // character sweia el body que luego lo usamos en nuestro servidor y aparte character es lo que le pasamos como argumento a esta funcion cuando hacemos la funcion handleFavorite ===> character ===> addFavorite({ id, name, species, gender, image }).
      // const arrayNuevo = myFavorites?.filter((Favs) => Favs.id !== id);
      // console.log(arrayNuevo);
      console.log(result.data);
      dispatch(RemplaceFav(result.data));
      swal({
        text: "Card eliminada con exito!!.",
        icon: "success",
        buttons: "Aceptar",
      });
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "warning",
        buttons: "Aceptar",
      });
    }
  };
  //dispatch le enviaba informacion a las actiond para que despues la funcion reduce , cambie o modifique el estado global con esa misma informacion

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      deleteFavorite(id, idUser); // esto le manda a action ==> {type: delete , payload : id que nos dan por aca..}
    } else {
      setIsFav(true);
      addFavorite(character, idUser);
    }
  };

  return (
    <>
      {Fav === 1 ? (
        <div className={styles.contenedor}>
          <div className={styles.divBoton}>
            {isFav ? (
              <button className={styles.boton11} onClick={handleFavorite}>
                ❤️
              </button>
            ) : (
              <button className={styles.boton11} onClick={handleFavorite}>
                🤍
              </button>
            )}
          </div>
          <h2 className={styles.caracter}>Nombre: {name}</h2>
          <h2 className={styles.caracter}>Specie: {species}</h2>
          <h2 className={styles.caracter}>Genero: {gender}</h2>
          <img className={styles.img} src={image} />
        </div>
      ) : (
        <div className={styles.contenedor}>
          <div className={styles.divBoton}>
            {isFav ? (
              <button className={styles.boton11} onClick={handleFavorite}>
                ❤️
              </button>
            ) : (
              <button className={styles.boton11} onClick={handleFavorite}>
                🤍
              </button>
            )}
            <button className={styles.boton} onClick={() => onClose(id)}>
              X{/* <img className={styles.imagenBoton} src={imagen} /> */}
            </button>
          </div>
          <h2 className={styles.caracter}>Nombre: {name}</h2>
          <h2 className={styles.caracter}>Specie: {species}</h2>
          <h2 className={styles.caracter}>Genero: {gender}</h2>
          <Link to={`/detail/${id}`} className={styles.Link}>
            <img className={styles.img} src={image} />
          </Link>
        </div>
      )}
    </>
  );
}

// traemos el state global de redux , esto no los brinda la funcion conecct()..
// y luego esto lo tenemos como props en nuestro componentes Card..

export default Card;

{
  /* <Link to={`/detail/${id}`}> esto seria que cuando aga clic en el link me va aparecer el id de cada personaje en un nuevo servidor o Ruta*/
}
{
  /* pagina the shadow css generator es super util*/
}

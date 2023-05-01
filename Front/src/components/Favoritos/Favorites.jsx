import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/actions";
import styles from "../Favoritos/Favorites.module.css";
import { getFavorites } from "../../redux/actions";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";

const Favorite = () => {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.idUser);
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    dispatch(getFavorites(idUser));
  }, []);

  // for (let i = 0; i < myFavorites.length; i++) {
  //   if (myFavorites[i].name === myFavorites[i + 1].name) {
  //     myFavorites.push(myFavorites);
  //   }
  // }

  const funcionOrder = (event) => {
    dispatch(action.orderCards(event.target.value));
  };

  const Funcionfilter = (event) => {
    dispatch(action.filterCards(event.target.value));
  };

  return (
    <>
      <Nav />
      <div>
        <div>
          <select className={styles.select} onChange={funcionOrder}>
            <option value="Descendente">Descendente</option>
            <option value="Ascendente">Ascendente</option>
          </select>
          <select className={styles.select} onChange={Funcionfilter}>
            <option value="All Character">All Character</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>

        <div className={styles.divPadre}>
          {myFavorites?.map(({ id, name, gender, species, image, Fav }) => {
            return (
              <Card
                Fav={Fav}
                key={id}
                id={id}
                name={name}
                gender={gender}
                species={species}
                image={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Favorite;

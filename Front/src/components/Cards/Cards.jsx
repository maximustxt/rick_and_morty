import Card from "../Card/Card";
import styles from "./Cards.module.css";
import Nav from "../Nav/Nav";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function Cards({
  characters,
  onClose,
  onSearch,
  idUser,
  setcharacters,
  FuncionCharRandom,
}) {
  /* es el arreglo de <personajes className=""></personajes> tambien usamos la prop onClose =>FUNCTION*/

  console.log(characters);

  const [prevIdUser, setPrevIdUser] = useState(idUser); // creamos un estadoque va a contener el id con el que iniciamos sesion.

  useEffect(() => {
    if (prevIdUser !== idUser) {
      // hacemos una condicion diciendo si el stado prevIdUser es diferente de idUser entonces se vacia el array de characters...
      // de lo contrario no ingresa a este bloque de codigo nunca.
      setcharacters([]); // se vacias el state.
      setPrevIdUser(idUser); // el estado PrevIdUser toma el valor del nuevo usuario que inicio sesion.
      // y la unica manera de modificar el estado es seeteandolo , no hay otra manera... por eso es que si la condicion se cumple va a tomar el nuevo valor del usuario
    }
  }, [idUser]);

  // const FuncionCharRandom = async () => {
  //   const inicioChar = 1;
  //   const FinChar = 826; // cantidad de personajes en total.

  //   const idCharRandom = inicioChar + Math.floor(Math.random() * FinChar);

  //   const response = await axios.get(
  //     `http://localhost:3001/onsearch/${idCharRandom}`
  //   );
  //   console.log(response.data);
  //   setcharacters([...characters, response.data]);
  //   console.log(characters);
  // };

  return (
    <>
      <Nav onSearch={onSearch} FuncionCharRandom={FuncionCharRandom} />
      <div className={styles.contenedor}>
        {characters?.map(
          ({
            id,
            name,
            species,
            gender,
            image /*podia hacer destructuring aqui...*/,
          }) => (
            <Card
              key={id}
              id={id} // es el id de cada personaje del array characters.. se lo pasamos como props a Card..
              name={name}
              species={species}
              gender={gender}
              image={image}
              idUser={idUser}
              onClose={onClose}
            />
          )
        )}
      </div>
    </>
  );
}

import Card from '../Card/Card';
import styles from "./Cards.module.css";
export default function Cards({characters,onClose}) {/* es el arreglo de <personajes className=""></personajes> tambien usamos la prop onClose =>FUNCTION*/
   return (<div className={styles.contenedor}>
 {characters.map(({id,name,species,gender,image /*podia hacer destructuring aqui...*/}) => 
 <Card id = {id} // es el id de cada personaje del array characters.. se lo pasamos como props a Card..
 name= {name}
species = {species}
gender = {gender}
image = {image} 
onClose = {onClose}/> 
 )}
   </div>);
}


/*const characters = [
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
];

export const Rick = {
  id: 1,
  name: "Rick Sanchez",
  species: "Human",
  gender: "Male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};*/
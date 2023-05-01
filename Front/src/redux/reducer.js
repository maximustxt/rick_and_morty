import {
  FILTER,
  ORDER,
  GET_FAVORITES,
  LOGIN,
  REMPLACE_FAV,
  REMPLACE_HOME,
  VACIO_HOME,
} from "./actions";

const initialState = {
  myFavorites: [],
  character: [],
  allCharacters: [],
  idUser: 0,
};

const reducer = (state = initialState, actions) => {
  console.log(state.idUser);
  switch (actions.type) {
    case GET_FAVORITES:
      // console.log(actions.payload);
      return {
        ...state,
        myFavorites: actions.payload, //* aca si hago [...state.myFavorites, actions.payload] se va a crear un array nuevo donde dentro van haber elementos y otro array que seria actions.payload..
        allCharacters: actions.payload, //* hacemos una copia de myfavorites en otro array para despues hacer el filter y order y no pisar el array de Myfavorites..
      };
    case FILTER:
      if (actions.payload === "All Character") {
        // pregunta si el genero es all character que me traiga todas las cards , osea el array completo (array auxiliar)
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      } else {
        // de lo contrario guardamos en un auxiliar el array completo , para poder manipularlo despues en el filtrado por los otros generos
        const Arrayaxuliar = [...state.allCharacters];
        return {
          ...state,
          myFavorites: Arrayaxuliar.filter(
            (pars) => pars.gender === actions.payload
          ),
        };
      }

    case ORDER:
      return {
        ...state,

        // si algunos de los casos se cumplio myFavorites pasa a ser el array modificado y ordenado... [id 1 , id 2 , id3] , luego en el componente Favorites.jsx recorro este array y voy renderizando cada personaje en base a su orden...
        myFavorites:
          actions.payload === "Descendente"
            ? [...state.myFavorites].sort((a, b) => b.id - a.id) // si b es menor al a ===> decendente..
            : [...state.myFavorites].sort((a, b) => a.id - b.id), // si a es menor a b ===> acendente... y el metodo sort devuelve un nuevo array con los elementos ordenados..
      }; // ! ERROR: puse allcharacters y esta mal !!! porque hace  un ordenamiento de todas las cartas y no de las cartas filtradas en myfavorites.. cuando hago el filter , me devuelve las cartas filtradas en myfavorites y en base a ello debo hacer el ordenamiento... por eso lo anterior estaba mal...
    case LOGIN:
      return {
        ...state,
        idUser: actions.payload,
      };

    case REMPLACE_FAV:
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;

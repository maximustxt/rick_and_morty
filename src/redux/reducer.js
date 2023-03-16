import { AGREGAR,ELIMINAR,FILTER,ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [], 
}

const reducer = ( state = initialState , actions) => {

switch(actions.type){
case AGREGAR : return {
    ...state,
    myFavorites : [...state.allCharacters,actions.payload],
    allCharacters: [...state.allCharacters,actions.payload],
}
case ELIMINAR : return {
    ...state,
    myFavorites: state.myFavorites.filter(pars => pars.id !== actions.payload),
}
case FILTER : return {
    ...state,
    myFavorites: state.allCharacters.filter(pars => pars.gender === actions.payload),
}
case ORDER : return {
    ...state,
    myFavorites: state.allCharacters.sort(()=>{
        if( actions.payload === "Ascendente"){
            return -1;
        } 
        if(actions.payload === "Descendente"){
            return 1;
        }
    
    })
}
default: return {...state};
}

}

/*
words.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

*/
export default reducer;
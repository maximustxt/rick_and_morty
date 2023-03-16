import React from "react";
import { connect } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions";
import Card from "../Card/Card";

class Favorite extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

         const funcionOrder = (event) => {
             this.props.orderCards(event.target.value);
         }

             const Funcionfilter = (event) => {
                 this.props.filterCards(event.target.value);
             }



        return (<div>
                      <div>
                        <select name="name" onChange={funcionOrder}>
                        <option value="Descendente">Descendente</option>
                        <option value="Ascendente">Ascendente</option>
                        </select>
                        <select name="name" onChange={Funcionfilter}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                        </select>
                         
                     </div> 
    
                 {
                      this.props.myFavorites.map((personaje) => { return (<Card
                        name = {personaje.name}
                        gender =  {personaje.gender}
                        species= { personaje.species}
                        image = {personaje.image}
                      />)})
                 }
                
                 </div>)
             }
    }


    const  mapStateToProps = (state)=> {
        return {
            myFavorites: state.myFavorites,
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            orderCards: (id) => {
                dispatch(orderCards(id));
        },
        filterCards: (gender) => {
            dispatch(filterCards(gender));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorite);

 //import { useSelector } from "react-redux";

// const Favorite = () => {
// //    const mapStateToProps = () => {
// //     const  myFavorites = useSelector(state => state.myFavorite);
// //    }
// const  myFavorites = useSelector(state => state.myFavorite);
// return (<div>
    
//     {
//          myFavorites.map(personaje => <div>
//             <h4>Name: personaje.name</h4>
//             <h4>Gender: personaje.gender</h4>
//             <h4>Especies: personaje.species</h4>
//             <img src = {personaje.image}  />
//          </div>)
//     }
    
//     </div>)
// }
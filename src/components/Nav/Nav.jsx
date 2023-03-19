import SearchBar from "../SearchBar/SearchBar";
import styled from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <div className= {styled.Nav}>
              {/* <div className={styled.contenedor}>
      			  <p>Hola</p>
			    <ul>
      <li>Usuario</li>
      <li>Bienvenido</li>
				      <li>👋👋</li>
			    </ul>
      </div> */}
            <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"/>
        <Link to={"/Favorites"} className={styled.Link}>Favorites</Link>    
        <Link to = {"/home"} className={styled.Link} >Home</Link>  
        <Link to = {"/about"} className={styled.Link}>About</Link>
        <Link to={"/"} className = {styled.Link} >Logout</Link>
        <SearchBar onSearch={onSearch} />
        </div>
    )
}
{/*Home es ===> Cards*/}
export default Nav;
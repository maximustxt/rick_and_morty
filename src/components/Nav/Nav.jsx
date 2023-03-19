import SearchBar from "../SearchBar/SearchBar";
import styled from "./Nav.module.css";
import {Link} from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <div className= {styled.Nav}>
            <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"/>
        <Link to={"/Favorites"} className={styled.Link}>Favorites</Link>    
        <Link to = {"/home"} className={styled.Link} >Home</Link>  
        <Link to = {"/about"} className={styled.Link}>About</Link>
        <Link to={"/"} className = {styled.Link} >Login</Link>
        <SearchBar onSearch={onSearch} />
        </div>
    )
}
{/*Home es ===> Cards*/}
export default Nav;
import SearchBar from "../SearchBar/SearchBar";
import styled from "./Nav.module.css";
import { Link } from "react-router-dom";
import imagen from "../image/salida-de-emergencia.png";

const Nav = ({ onSearch, FuncionCharRandom }) => {
  return (
    <div className={styled.Nav}>
      <img
        className={styled.img}
        src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
      />
      <Link to={"/Favorites"} className={styled.Link}>
        Favorites
      </Link>
      <Link to={"/home"} className={styled.Link}>
        Home
      </Link>
      <Link to={"/about"} className={styled.Link}>
        About
      </Link>
      <Link to={"/"}>
        <img className={styled.imagen} src={imagen} />
      </Link>
      <button className={styled.buton} onClick={FuncionCharRandom}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Agregar Random
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
{
  /*Home es ===> Cards*/
}
export default Nav;

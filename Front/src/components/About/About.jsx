import styles from "./About.module.css";
import imagen from "../image/imagen-perfilLinkedin.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.divPadre}>
      <Link className={styles.Link} to="/Home">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </Link>
      <div className={styles.div}>
        <h1>MI PERFIL</h1>
        <p>
          Mi nombre es Ignacio Martin , esta es mi aplicacion hecha con ganas y
          mucha voluntad...
          <br />
          esta aplicacion trata sobre las Cards de los personajes de Rick and
          Morty...
          <br />
          Espero que les guste...
        </p>
        <img className={styles.imagen} src={imagen} />
      </div>
    </div>
  );
};

export default About;

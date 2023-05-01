import styles from "./Form.module.css";
import { useState } from "react";
import axios from "axios";
import validacion from "./validation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../redux/actions";
import swal from "sweetalert";

const Form = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errores, seterrores] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const Propiedad = event.target.name; // esto seria el nombre del input osea username o password..
    const value = event.target.value; // esto seria el valor de la propiedad , osea lo que escribamos en el input..
    setUserData({ ...userData, [Propiedad]: value });
    seterrores(validacion({ ...userData, [Propiedad]: value }, errores));
  };
  const SubmitHandel = async (event) => {
    try {
      event.preventDefault(); // hace que no se recargue la pagina , por defecto el evento submit recarga la pagina...
      await axios.get(
        `http://localhost:3001/login?username=${userData.username}&password=${userData.password}`
      );
      dispatch(Login(userData.username, userData.password));
      swal({
        text: "Inicio de sesion exitoso!!.",
        icon: "success",
        buttons: "Aceptar",
      });
      navigate("/Home");
    } catch (error) {
      swal({
        title: "Alert",
        text: error.response.data.error,
        icon: "warning",
        buttons: "Aceptar",
      });
    }
  };

  return (
    <div className={styles.div2}>
      <div className={styles.div}>
        <h1>INICIO DE SESION</h1>
        <form onSubmit={SubmitHandel}>
          {/*Es un eventp de formulario no de button..*/}
          <div className={styles.div1}>
            <label className={styles.label} htmlFor="username">
              Username :
            </label>
            <input
              placeholder="Escribir email aqui..."
              value={userData.username}
              type="text"
              name="username"
              onChange={handleInputChange}
              className={errores.username ? styles.error : styles.correcto}
            ></input>
            <span className={styles.span}>{errores.username}</span>
          </div>
          <div className={styles.div1}>
            <label className={styles.label} htmlFor="password">
              Password :
            </label>
            <input
              placeholder="Escribir contraseña aqui..."
              value={userData.password}
              type="password"
              name="password"
              onChange={handleInputChange}
              className={errores.password ? styles.error : styles.correcto}
            ></input>
            <span className={styles.span}>{errores.password}</span>
          </div>
          <button className={styles.boton} type="submit">
            Iniciar Sesion
          </button>
          <Link className={styles.registro} to="/Registro">
            Registrarse
          </Link>
        </form>
      </div>
    </div>
  );
};

{
  /* className={errores.username ? styles.error : styles.success} ==> entonces aca se pregunta si en el estado de errores en gmail hay algo entonces que se ejecute el estilo de la class error , de lo contrario que se ejecute la class que esta todo correcto*/
}
{
  /* <span>{errores.username}</span>  ==> Aca creamos un span que nos mostrara el tipo de error al lado del input*/
}

export default Form;

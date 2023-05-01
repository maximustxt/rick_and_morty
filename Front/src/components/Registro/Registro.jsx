import styles from "./Registro.module.css";
import { useState } from "react";
import axios from "axios";
import validaciones from "./validaciones";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Registro = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errores, seterrores] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const Propiedad = event.target.name; // esto seria el nombre del input osea username o password..
    const value = event.target.value; // esto seria el valor de la propiedad , osea lo que escribamos en el input..
    setUserData({ ...userData, [Propiedad]: value });
    seterrores(validaciones({ ...userData, [Propiedad]: value }, errores));
  };
  const SubmitHandel = async (event) => {
    try {
      event.preventDefault(); // hace que no se recargue la pagina , por defecto el evento submit recarga la pagina...
      await axios.post("http://localhost:3001/login", userData);
      swal({
        text: "Registro creado exitosamente!!.",
        icon: "success",
        buttons: "Aceptar",
      });
      navigate("/");
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
        <h1>REGISTRO</h1>
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
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;

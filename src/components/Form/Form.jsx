import styles from "./Form.module.css";
import { useState } from "react";
import validacion from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errores,seterrores] = useState({ username: "", password: "" });
  
  const handleInputChange = (event) => {
    const Propiedad = event.target.name; // esto seria el nombre del input osea username o password..
    const value = event.target.value;  // esto seria el valor de la propiedad , osea lo que escribamos en el input..
    setUserData({...userData , [Propiedad] : value})
     seterrores(validacion({...userData , [Propiedad] : value},errores));
  }
  const SubmitHandel = (event) => {
    event.preventDefault(); // hace que no se recargue la pagina , por defecto el evento submit recarga la pagina...
   login(userData);
  }

return (
    <div  className={styles.div2}>
    <div className={styles.div}>
      <h1>REGISTRO</h1>
        <form onSubmit={SubmitHandel}> {/*Es un eventp de formulario no de button..*/}
            <div className={styles.div1}>
            <label className={styles.label} htmlFor="username">Username : </label>
                <input placeholder="Escribir email aqui..."
                value={userData.username}
                type="text" 
                name="username"
                onChange={ handleInputChange}
                className={errores.username ? styles.error : styles.correcto} 
                ></input>
                <span className={styles.span}>{errores.username}</span> 

            </div>
            <div className={styles.div1}>
            <label className={styles.label} htmlFor="password">Password : </label>
                <input placeholder="Escribir contraseña aqui..."
                value = {userData.password} 
                type="text"
                name="password"
                onChange={ handleInputChange}
                className={errores.password ? styles.error : styles.correcto}
                ></input>
                <span className={styles.span}>{errores.password}</span> 
            </div>
        <button className={styles.boton} type="submit">Login</button>
        </form>
    </div>
    </div>
)
}

{/* className={errores.username ? styles.error : styles.success} ==> entonces aca se pregunta si en el estado de errores en gmail hay algo entonces que se ejecute el estilo de la class error , de lo contrario que se ejecute la class que esta todo correcto*/}
{/* <span>{errores.username}</span>  ==> Aca creamos un span que nos mostrara el tipo de error al lado del input*/}

{/*const validacionEmail = (userData,seterrores,errores) => {
    if (!userData.username) seterrores({ ...errores, username: "Email vacío"}); // se pregunta si en la propiedad usename del estado no hay algo, entonces que tire un error el el stado erores diciendo "esta vacio"..
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) // de lo contrario que verifique que el usename cumpla con ciertos panoramas como : @ , .com , etc.., de lo contrario tirar otro error diciendo "es invalido"
      seterrores({ ...errores, username: "" });
    else seterrores({ ...errores, username: "Email inválido" });
  }
}*/}


export default Form;
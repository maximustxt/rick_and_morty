

const validacion = (userData,erroresx) => {
  // username:
  const errores = {...erroresx};
  if (!userData.username){
    errores.username =  "Email vacio"
  } else if(userData.username.length > 35){
    errores.username =  "El email no debe superar los 35 caracteres..."
  }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username))  {
    errores.username =  "";
  }else{
    errores.username =  "Email invalido";
}

//password:

 if(userData.password.length < 6 &&  userData.password.length > 10){
  errores.password =  "La longitud debe ser mayor de 6 y menor a 10 ";
} else if(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.password)){
 errores.password = "";
} else{
  errores.password =  "password invalida";
}
return errores; // retornamos el objeto con los errores modificados..
}


export default validacion;

// const validacionEmail = (userData,seterrores,errores) => {
//     if (!userData.username) seterrores({ ...errores, username: "Email vacío" }); 
//   else {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) 
//       seterrores({ ...errores, username: "" });
//     else seterrores({ ...errores, username: "Email inválido" });
//   }
// }
// const validacionPassword = (userData,seterrores,errores) => {
//     if (!userData.password) seterrores({ ...errores, password: "Contraseña vacía" });
//   else {
//     if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(userData.password))
//       seterrores({ ...errores, password: "" });
//     else seterrores({ ...errores, password: "Contraseña inválida" });
//   }
// }
require("dotenv").config();
const { database } = require("./DB_connection");
const server = require("../src/server");
const PORT = process.env.PORT || 3001; //* si en .env hay PORT entonces que obtenfa de ahi el puerto de lo contrario le damos el 3001.

//? IMPORTANTE!!:  Recordar siempre en el pack json , en script : start : poner la carpeta donde escucha nuestro servidor el puerto y la DataBase..

//*--------------------------------------SINCRONIZACION---------------------------------------*//
database
  .sync({ force: true }) // siempre cuando aparezca el id valor nulo es porque debo poner force en true..
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port " + PORT);
    });
  })
  .catch((res) => console.log(res));

//?  PRIMERO ME ASEGURO DE QUE SE SINCRONICE LA DB
//? LUEGO COMO REPUESTA LEVANTO EL PUERTO DEL SERVIDOR
//? RECORDAR QUE .SYNC() RETORNA UNA PROMESA , ESTE METODO SIRVE PARA SINCRONIZAR LA DB CON EL SERVER

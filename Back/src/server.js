const express = require("express");
const router = require("./routes/index");
const cors = require("cors");
const server = express();
//middlwares:

server.use(cors()); //? el cors siempre va arriba antes del middlwares donde te redirije en las rutas...
server.use(express.json());
server.use(router); //* si no ponemos las / es que quiere decir que todas las rutas van en direccion a el archivo router..

module.exports = server;

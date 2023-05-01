const { User } = require("../DB_connection");

const login = async ({ username, password }) => {
  const respuesta = await User.findOne({
    where: {
      username,
      password,
    },
  }); // aca lo que hace es filtrar y buscar un usuario que coincida con el email y password pasados por parametro , si no coinciden entonces debo tirar un error...

  if (!respuesta) {
    throw Error("usuario no encontrado");
  } else {
    return respuesta;
  }
};

module.exports = login;

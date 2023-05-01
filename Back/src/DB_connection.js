require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;
const FavoriteModel = require("../src/models/Favorite");
const UserModel = require("../src/models/users");

//*-------------CREACION (DAR LUZ A LA BASE DE DATOS)-------------*//

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const database = new Sequelize( //* es preferible ponerle database y no sequelize
  // URL
  `Postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
//*-------------ACA SE CREA LA TABLA MANDANDO LA DB COMO PARAMETRO-------------------*//
FavoriteModel(database); //* es preferible ponerle database y no sequelize
UserModel(database); //* es preferible ponerle database y no sequelize

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
//*-------------LLAMAS A LAS TABLAS YA CREADAS DE LA DB------------------*//

const { User, Favorite } = database.models; //* la nueva instancia de sequelize tiene una propiedad .models donde se encuentran todos los modelos creados para nuestra database...
//---------------------------tabla intermedia N:N----------------------------------------//
Favorite.belongsToMany(User, { through: "user_favorite" }); //* de esta manera se crea la tabla intermedia , se "vinculan" las otras dos tablas creadas (modelos) y le incorporamos un nombre a la tabla intermedia , esto solo sucede en relaciones de VARIOS A VARIOS (N:N)
User.belongsToMany(Favorite, { through: "user_favorite" }); //* de esta manera se crea la tabla intermedia , se "vinculan" las otras dos tablas creadas (modelos) y le incorporamos un nombre a la tabla intermedia , esto solo sucede en relaciones de VARIOS A VARIOS (N:N)

module.exports = {
  database,
  ...database.models,
};

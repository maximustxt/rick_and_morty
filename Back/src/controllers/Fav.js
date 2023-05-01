const { Favorite, User } = require("../DB_connection"); // modelos.

//*------------DELETE-------------*//

const FavDelete = async (id, idUser) => {
  const characterEliminar = await Favorite.findByPk(id);
  if (!characterEliminar) {
    throw Error("No se encontro ningun personaje con ese id");
  } else {
    const userX = await User.findByPk(idUser);
    if (!userX) {
      throw Error("El usuario especificado no existe");
    }

    await userX.removeFavorite(characterEliminar);
    await characterEliminar.destroy();

    const Response = await Favorite.findAll({
      include: [
        {
          model: User,
          through: { attributes: [] },
          where: {
            id: idUser,
          },
        },
      ],
    });

    return Response;
  }
};

//*------------GET-------------*//

/*

await Product.findAll({ include: Category }); // This doesn't work

await Product.findAll({ // This works, passing the alias
  include: {
    model: Category,
    as: 'groups'
  }
});

await Product.findAll({ include: 'groups' }); // This also works

*/

const FavGet = async (idUser) => {
  console.log(idUser);
  let whereClause = {};
  if (idUser) {
    whereClause = { id: idUser };
  }

  const response = await Favorite.findAll({
    include: [
      {
        model: User,
        through: { attributes: [] },
        where: whereClause,
      },
    ],
  });

  return response;
};

//*------------POST-------------*//

const FavPost = async ({ name, image, species, gender, idUser }) => {
  const userX = await User.findByPk(idUser);
  if (!userX) {
    console.log("Error");
    throw Error("El usuario especificado no existe");
  }

  const [character, created] = await Favorite.findOrCreate({
    where: {
      name,
      image,
      species,
      gender,
    },
  });

  if (!created) {
    const hasFavorite = await userX.hasFavorite(character); // este metodo devuelve true si character ya se encuentra en la tabla de favoritos asociado a user y si no devuelve false
    if (hasFavorite) {
      console.log("Error");
      throw Error("El personaje ya fue agregado a los favoritos del usuario");
    }
  }

  await userX.addFavorite(character);

  return character;
  // const [character, created] = await Favorite.findOrCreate({
  //   where: {
  //     name,
  //     image,
  //     species,
  //     gender,
  //   },
  // });

  // if (created === false) {
  //   throw Error("Personaje ya existente");
  // }

  // const userX = await User.findByPk(idUser);
  // if (!userX) {
  //   console.log("Error");
  //   throw Error("El usuario especificado no existe");
  // }

  // await userX.addFavorite(character);

  // return character;

  // // const Favorites = await Favorite.findAll({
  // //   where: {
  // //     name,
  // //   },
  // // });

  // // if (!Favorites.length) {
  // const character = await Favorite.create({
  //   name,
  //   image,
  //   species,
  //   gender,
  // }); // create() es un metodo que agrega a nuesta DB un nuevo elemento y se crea una nueva fila para el mismo.

  // const userX = await User.findByPk(idUser);
  // if (!userX) {
  //   console.log("Error");
  //   throw Error("El usuario especificado no existe");
  // }

  // await userX.addFavorite(character);

  // return character;
};
// } else {
//   throw Error("Personaje ya existente");
// }
// };

module.exports = { FavDelete, FavGet, FavPost };

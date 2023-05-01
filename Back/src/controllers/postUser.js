const { User } = require("../DB_connection"); // modelos.

const postUser = async ({ username, password }) => {
  const [row, created] = await User.findOrCreate({
    where: {
      username,
      password,
    },
  });

  if (created === false) {
    throw Error("Usuario ya registrado");
  } else {
    return row;
  }
};

module.exports = postUser;

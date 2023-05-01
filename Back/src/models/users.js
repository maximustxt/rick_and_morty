const { DataTypes } = require("sequelize");

//*---------------------CREACION DE LAS TABLAS (MODELOS)------------------------*//

module.exports = (database) => {
  database.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  ); // esto seria la creacion de la tabla..
};

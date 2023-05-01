const { DataTypes } = require("sequelize");

//*---------------------CREACION DE LAS TABLAS (MODELOS)------------------------*//

module.exports = (database) => {
  database.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Fav: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    { timestamps: false }
  ); // esto seria la creacion de la tabla..
};

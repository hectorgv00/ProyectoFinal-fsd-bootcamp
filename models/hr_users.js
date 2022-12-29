"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HR_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      HR_Users.hasMany(models.Positions);
      HR_Users.hasMany(models.Skills);
    }
  }
  HR_Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HR_Users",
    }
  );
  return HR_Users;
};

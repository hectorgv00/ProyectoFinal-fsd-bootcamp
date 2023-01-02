"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Skills.hasMany(models.CandidateSkills);
    }
  }
  Skills.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      image_URL: {
      type:  DataTypes.STRING,
      allowNull:false,
      },
    },
    {
      sequelize,
      modelName: "Skills",
    }
  );
  return Skills;
};

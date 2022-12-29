"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CandidateSkills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidateSkills.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mark: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CandidateSkills",
    }
  );
  return CandidateSkills;
};

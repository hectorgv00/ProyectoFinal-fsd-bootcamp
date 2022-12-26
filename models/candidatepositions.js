'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CandidatePositions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CandidatePositions.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    testDate: DataTypes.DATE,
    completionDate: DataTypes.DATE,
    result: DataTypes.INTEGER,
    registryDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CandidatePositions',
  });
  return CandidatePositions;
};
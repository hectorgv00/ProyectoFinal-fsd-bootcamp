'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Positions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Positions.hasMany(models.HR_Users)

    }
  }
  Positions.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Positions',
  });
  return Positions;
};
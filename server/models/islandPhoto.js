'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IslandPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IslandPhoto.belongsTo(models.User);
      IslandPhoto.belongsTo(models.Feed);
    }
  };
  IslandPhoto.init({
    feedId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    // textContent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IslandPhoto',
  });
  return IslandPhoto;
};
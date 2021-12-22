'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeIsland extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LikeIsland.belongsTo(models.User);
      LikeIsland.belongsTo(models.Island);
    }
  };
  LikeIsland.init({
    userId: DataTypes.INTEGER,
    IslandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LikeIsland',
  });
  return LikeIsland;
};
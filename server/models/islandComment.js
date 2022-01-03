'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IslandComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IslandComment.belongsTo(models.User);
      IslandComment.belongsTo(models.Feed);
    }
  };
  IslandComment.init({
    feedId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    textContent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'IslandComment',
  });
  return IslandComment;
};
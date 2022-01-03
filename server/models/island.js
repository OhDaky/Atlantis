'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Island extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Island.belongsTo(models.User)
      Island.belongsToMany(models.Tag, { through: "Islands_Tags", timestamps: false });
      Island.hasMany(models.IslandComment);
      Island.hasMany(models.LikeIsland);
    }
  };
  Island.init({
    userId: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    image: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Island',
  });
  return Island;
};
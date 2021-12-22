'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Island);
      User.hasMany(models.IslandComment);
      User.hasMany(models.LikeIsland);
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    signUpType: DataTypes.STRING,
    accountType: DataTypes.STRING,
    // refreshToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Book, Comment, Like, Event,
    }) {
      this.hasMany(Book, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userId' });
      this.hasMany(Event, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

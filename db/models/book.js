const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({  User,Comment,Like,Genre }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'bookId' });
      this.hasMany(Like, { foreignKey: 'bookId' });
      this.belongsTo(Genre, { foreignKey: 'genreId' });
    }
  }
  Book.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Genres',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    author: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};

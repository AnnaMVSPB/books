const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User,Book }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Book, { foreignKey: 'bookId' });
    }
  }
  Like.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
    bookId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Books',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};

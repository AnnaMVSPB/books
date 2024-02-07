const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate({ Book }) {
      this.hasMany(Book, { foreignKey: 'genreId' });

    }
  }
  Genre.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};

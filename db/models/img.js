const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    static associate({ Event }) {
      this.belongsTo(Event, { foreignKey: 'eventId' });
    }
  }
  Img.init({
    url: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    eventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
      },
      onDelete: 'Cascade',
    },
  }, {
    sequelize,
    modelName: 'Img',
  });
  return Img;
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({User,Img  }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Img, { foreignKey: 'eventId' });
    }
  }
  Event.init({
    name: {
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
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};

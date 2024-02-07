/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Imgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id',
        },
        onDelete: 'Cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Imgs');
  },
};

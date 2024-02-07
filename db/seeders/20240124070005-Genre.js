/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Genres',
      [
        {
          name: 'Биографии. Мемуары',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Российская литература',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Поэзия',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};

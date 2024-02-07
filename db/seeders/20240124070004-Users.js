/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash('12345678', 10);
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Ignat',
          email: 'i@i',
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marat',
          email: 'm@m',
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

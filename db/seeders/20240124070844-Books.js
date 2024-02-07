/** @type {import('sequelize-cli').Migration} */
const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface) {
    const books = JSON.parse(await fs.readFile(path.join(__dirname, '..', 'books.json'), 'utf-8'));
    await queryInterface.bulkInsert(
      'Books',
      books.map((el) => ({
        ...el,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};

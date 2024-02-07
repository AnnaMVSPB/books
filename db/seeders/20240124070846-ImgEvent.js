/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(
      'Imgs',[
        {
        url:'https://um.mos.ru/upload/iblock/dca/01.jpg',
        eventId:'1',
        createdAt: new Date(),
        updatedAt: new Date(),
        }
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Imgs', null, {});
  },
};

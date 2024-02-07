/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface) {

    await queryInterface.bulkInsert(
      'Events',[
        {name:'Встреча книжного клуба',
        userId:'1',
        description:'33.14.22 пройдет встреча почитателей Иосифа Бродского',
        createdAt: new Date(),
        updatedAt: new Date(),
        }
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};

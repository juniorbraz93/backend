module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
      name: 'jb',
      email: 'jb@gmail.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'elias',
      email: 'eli@gmail.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'arthur',
      email: 'arthur@gmail.com',
      password: '123456',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alloNull: false,
      },
      name: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      email:{
        type: Sequelize.STRING,
        alloNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        alloNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        alloNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        alloNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('users')
  }
};

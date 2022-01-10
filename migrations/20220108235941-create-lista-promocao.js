'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('listaPromocaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      promocaoId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany Promocao n:n
          model: 'Promocaos',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      listaId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany Lista n:n
          model: 'Lista',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('listaPromocaos');
  }
};
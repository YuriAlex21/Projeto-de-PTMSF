'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ArmazenamentoItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      armazenamentoId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany Armazenamentos n:n
          model: 'Armazenamentos',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      qtd: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany Items n:n
          model: 'Items',
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
    await queryInterface.dropTable('ArmazenamentoItems');
  }
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArmazenamentoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArmazenamentoItem.belongsTo(models.Armazenamento),
      ArmazenamentoItem.belongsTo(models.Item)
    }
  };
  ArmazenamentoItem.init({
    armazenamentoId: DataTypes.INTEGER,
    qtd: DataTypes.STRING,
    itemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArmazenamentoItem',
  });
  return ArmazenamentoItem;
};
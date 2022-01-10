'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here hasMany(models.Armazenamento)
      Item.belongsTo(models.Usuario);
      Item.belongsToMany(models.Armazenamento, {through: 'ArmazenamentoItem', foreignKey: 'itemId'});
    }
  };
  Item.init({
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
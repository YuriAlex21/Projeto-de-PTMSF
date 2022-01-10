'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armazenamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here hasMany(models.Item)
      Armazenamento.belongsTo(models.Usuario);
      Armazenamento.belongsToMany(models.Item, {through: 'ArmazenamentoItem', foreignKey: 'armazenamentoId'});
    }
  };
  Armazenamento.init({
    mes: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Armazenamento',
  });
  return Armazenamento;
};
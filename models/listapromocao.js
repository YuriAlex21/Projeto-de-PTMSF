'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listaPromocao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      listaPromocao.belongsTo(models.Lista),
      listaPromocao.belongsTo(models.Promocao)
    }
  };
  listaPromocao.init({
    promocaoId: DataTypes.INTEGER,
    qtd: DataTypes.STRING,
    listaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'listaPromocao',
  });
  return listaPromocao;
};
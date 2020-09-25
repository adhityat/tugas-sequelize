const { DataTypes } = require('sequelize');
const sq = require('../config/connection');
const ModelUser = require('../model/modelUser');


const ModelTodo = sq.define('Todo', {
  
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    kegiatan: {
      type: DataTypes.STRING,
      length:30
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
       
    },
  }, {
   
  });
  
    ModelTodo.belongsTo(ModelUser);
    ModelUser.hasMany(ModelTodo);

    ModelTodo.sync({alter:true})
  
  module.exports = ModelTodo;
const { DataTypes } = require('sequelize');
const sq = require('../config/connectionSequelize')


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
      
  
    },
  }, {
   
  });
  
  ModelTodo.sync({alter:true})
  
  module.exports = ModelTodo;
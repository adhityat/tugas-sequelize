const { DataTypes } = require('sequelize');
const sq = require('../config/connectionSequelize')

const ModelUser = sq.define('User', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    length:30
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    length:30
  }
}, {
 
});

ModelUser.sync({alter:true})

module.exports = ModelUser;
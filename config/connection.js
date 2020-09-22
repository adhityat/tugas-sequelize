const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fosan-todo', 'postgres', 'academy', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  });

  module.exports =  sequelize;
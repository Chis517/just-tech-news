// imports Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// creates connection to the database, passes in MySQL info, username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
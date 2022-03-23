const Sequelize = require('sequelize');
require('dotenv').config()

//const db = new Sequelize('testing_ali_fullstack', 'root', 'root', {
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD, {  
  //host: '127.0.0.1',
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: '3306',
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;
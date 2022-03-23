const Sequelize = require('sequelize');

const db = new Sequelize('testing_ali_fullstack', 'root', 'root', {
//const db = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {  
  host: '127.0.0.1',
  //host: DB_HOST,
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
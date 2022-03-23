const Sequelize = require('sequelize');
const db = require('../lib/db');

const Users = db.define('users_test_rafael_martinez_reyes', {
    ID: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    FIRST_NAME: {
        type: Sequelize.STRING(60), 
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: 'El nombre no puede ir vacío'
            }
        }
    },
    SECOND_NAME: {
      type: Sequelize.STRING(60), 
      allowNull: false, 
    },
    FIRST_SURNAME: {
      type: Sequelize.STRING(60), 
      allowNull: false, 
      validate: {
          notEmpty: {
              msg: 'El apellido paterno no puede ir vacío'
          }
      }
    },
    SECOND_SURNAME: {
      type: Sequelize.STRING(60), 
      allowNull: false, 
    },
    BIRTHDATE: {
      type: Sequelize.STRING(10), 
      allowNull: false, 
      validate: {
          notEmpty: {
              msg: 'La fecha de nacimiento no puede ir vacía'
          }
      }
    },
    EMAIL: {
      type: Sequelize.STRING(60),
      allowNull : false, 
      validate: {
          isEmail: {
              msg : 'Agrega un correo válido'
          },
          notEmpty: {
              msg: 'El e-mail no puede ir vacío'
          }
      }, 
      unique: {
          args: true,
          msg: 'Usuario ya existe'
      }
    },
    PHONE_NUMBER: {
      type: Sequelize.STRING(14), 
      allowNull: false, 
      validate: {
          notEmpty: {
              msg: 'El teléfono no puede ir vacío'
          }
      }
    },
});


module.exports = Users;
require('dotenv').config({path: './app/config/.env'})

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.PW_MYSQL_LOCALHOST,
  DB: "testdb",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
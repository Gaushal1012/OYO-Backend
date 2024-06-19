const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(process.env.SERVER, process.env.NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;

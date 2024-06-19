require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: "mysql",
    dialectModule: require("mysql2"),
  }
);

module.exports = sequelize;

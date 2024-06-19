const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "yourchoi_fptlc",
  "yourchoi_fptlc_user",
  "pa{T#$I@VK2$",
  {
    host: "192.185.74.209",
    dialect: "mysql",
  }
);

module.exports = sequelize;

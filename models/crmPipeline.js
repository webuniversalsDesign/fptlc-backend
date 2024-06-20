const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CrmPipeline = sequelize.define(
  "CrmPipeline",
  {
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opportunity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    revenue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CrmPipeline;

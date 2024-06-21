const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SalesOrder = sequelize.define(
  "SalesOrder",
  {
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_list: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_terms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terms_condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sales_person: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fiscal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approve: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sales_team: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    signature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SalesOrder;

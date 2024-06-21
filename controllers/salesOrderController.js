const SalesOrder = require("../models/salesOrder");

exports.createSalesOrder = async (req, res, next) => {
  try {
    const newSalesOrder = await SalesOrder.create(req.body);
    res.status(201).json(newSalesOrder);
  } catch (error) {
    next(error);
  }
};

exports.getSalesOrder = async (req, res, next) => {
  try {
    const salesOrders = await SalesOrder.findAll();
    res.status(201).json(salesOrders);
  } catch (error) {
    next(error);
  }
};

exports.getSalesOrderById = async (req, res, next) => {
  try {
    const salesOrders = await SalesOrder.findByPk(req.params.id);
    if (salesOrders) {
      await res.json(salesOrders);
    } else {
      res.status(404).send("Not Found");
    }
    res.json(salesOrders);
  } catch (error) {
    next(error);
  }
};

exports.updateSalesOrder = async (req, res, next) => {
  try {
    const salesOrders = await SalesOrder.findByPk(req.params.id);
    if (salesOrders) {
      await salesOrders.update(req.body);
      res.json(salesOrders);
    } else {
      res.status(404).send("Not Found");
    }
    res.json(salesOrders);
  } catch (error) {
    next(error);
  }
};

exports.deleteSalesOrder = async (req, res, next) => {
  try {
    const salesOrders = await SalesOrder.findByPk(req.params.id);
    if (salesOrders) {
      await salesOrders.destroy();
      res.status(204).send("Deleted Successfully");
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    next(error);
  }
};

const express = require("express");
const salesOrderController = require("../controllers/salesOrderController");
const salesRouter = express.Router();

salesRouter.post("/", salesOrderController.createSalesOrder);
salesRouter.get("/", salesOrderController.getSalesOrder);
salesRouter.get("/:id", salesOrderController.getSalesOrderById);
salesRouter.put("/:id", salesOrderController.updateSalesOrder);
salesRouter.delete("/:id", salesOrderController.deleteSalesOrder);

module.exports = salesRouter;

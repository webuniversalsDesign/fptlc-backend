const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const crmPipeline = require("./routes/crmpipelineRoute");
const salesOrder = require("./routes/salesOrderRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);

app.use("/api/crmpipeline", crmPipeline);
app.use("/api/salesorder", salesOrder);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection has been established successfully!");
    sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect", err);
  });

module.exports = app;

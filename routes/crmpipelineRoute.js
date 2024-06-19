const express = require("express");
const crmpipelineController = require("../controllers/crmpipelineController");
const router = express.Router();

router.post("/", crmpipelineController.createCrmpipeline);
router.get("/", crmpipelineController.getCrmpipeline);
router.get("/:id", crmpipelineController.getCrmpipelineById);
router.put("/:id", crmpipelineController.updateCrmpipeine);
router.delete("/:id", crmpipelineController.deleteCrmpipeline);

module.exports = router;

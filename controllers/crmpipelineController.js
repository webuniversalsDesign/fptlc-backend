const CrmPipeline = require("../models/crmPipeline");

exports.createCrmpipeline = async (req, res, next) => {
  try {
    const newCrmpipeline = await CrmPipeline.create(req.body);
    res.status(201).json(newCrmpipeline);
  } catch (error) {
    next(error);
  }
};

exports.getCrmpipeline = async (req, res, next) => {
  try {
    const crmpipelines = await CrmPipeline.findAll();
    res.json(crmpipelines);
  } catch (error) {
    next(error);
  }
};

exports.getCrmpipelineById = async (req, res, next) => {
  try {
    const crmpipeline = await CrmPipeline.findByPk(req.params.id);
    if (crmpipeline) {
      await res.json(crmpipeline);
    } else {
      res.status(404).send("Not Found");
    }
    res.json(crmpipeline);
  } catch (error) {
    next(error);
  }
};

exports.updateCrmpipeine = async (req, res, next) => {
  try {
    const crmpipeline = await CrmPipeline.findByPk(req.params.id);
    if (crmpipeline) {
      await crmpipeline.update(req.body);
      res.json(crmpipeline);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteCrmpipeline = async (req, res, next) => {
  try {
    const crmpipeline = await CrmPipeline.findByPk(req.params.id);
    if (crmpipeline) {
      await crmpipeline.destroy();
      res.status(204).send("Deleted Successfully");
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    next(error);
  }
};

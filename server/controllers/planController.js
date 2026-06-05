const Plan = require("../models/Plan");

exports.createPlan = async (req, res) => {
  try {
    const { name, price, features } = req.body;

    const plan = await Plan.create({
      name,
      price,
      features
    });

    res.status(201).json(plan);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getPlans = async (req, res) => {
  try {

    const plans = await Plan.find();

    res.json(plans);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
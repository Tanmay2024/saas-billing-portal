const Plan = require("../models/Plan");

exports.createPlan = async (req, res) => {

  try {

    const {
      name,
      price,
      features
    } = req.body;

    const plan =
      await Plan.create({
        name,
        price,
        features
      });

    res.status(201).json(plan);

  } catch (error) {

  console.log("CREATE PLAN ERROR:");
  console.log(error);

  res.status(500).json({
    message: error.message
  });

}

};

exports.getAllPlans = async (
  req,
  res
) => {

  try {

    const plans =
      await Plan.find();

    res.json(plans);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deletePlan = async (
  req,
  res
) => {

  try {

    await Plan.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
      "Plan deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
const Subscription =
require("../models/Subscription");

exports.subscribePlan = async (
  req,
  res
) => {

  try {

    const { planId } = req.body;

    const subscription =
      await Subscription.create({

        user: req.user.id,

        plan: planId,

        status: "active"

      });

    res.status(201).json(
      subscription
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
exports.getMySubscription = async (req, res) => {
  try {

    const subscription =
      await Subscription.findOne({
        user: req.user.id
      }).populate("plan");

    res.json(subscription);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
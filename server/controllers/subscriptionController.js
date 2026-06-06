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
exports.cancelSubscription = async (
  req,
  res
) => {

  try {

    const subscription =
      await Subscription.findOne({
        user: req.user.id
      });

    if (!subscription) {

      return res.status(404).json({
        message:
        "Subscription not found"
      });

    }

    subscription.status =
      "cancelled";

    await subscription.save();

    res.json({
      message:
      "Subscription cancelled",
      subscription
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
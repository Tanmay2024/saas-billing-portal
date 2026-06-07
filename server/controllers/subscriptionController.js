const Subscription =
  require("../models/Subscription");

exports.subscribePlan = async (
  req,
  res
) => {

  try {

    const { planId } = req.body;

    const existingSubscription =
      await Subscription.findOne({
        user: req.user.id,
        status: "active"
      });

    if (existingSubscription) {

      return res.status(400).json({
        message:
          "You already have an active subscription"
      });

    }

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
        user: req.user.id,
        status: "active"
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
        user: req.user.id,
        status: "active"
      });

    if (!subscription) {

      return res.status(404).json({
        message:
          "No active subscription found"
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
const User = require("../models/User");
const Plan = require("../models/Plan");
const Subscription = require("../models/Subscription");

exports.getStats = async (req, res) => {
  try {

    const users = await User.countDocuments();

    const plans = await Plan.countDocuments();

    const subscriptions =
      await Subscription.countDocuments();

    res.json({
      users,
      plans,
      subscriptions
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
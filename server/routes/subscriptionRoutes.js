const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const {
  subscribePlan,
  getMySubscription,
  cancelSubscription
} = require(
  "../controllers/subscriptionController"
);


router.post(
  "/",
  protect,
  subscribePlan
);
router.get(
  "/my",
  protect,
  getMySubscription
);

router.put(
  "/cancel",
  protect,
  cancelSubscription
);
module.exports = router;
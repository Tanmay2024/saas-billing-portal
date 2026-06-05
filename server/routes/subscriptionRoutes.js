const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const {
  subscribePlan,
  getMySubscription
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

module.exports = router;
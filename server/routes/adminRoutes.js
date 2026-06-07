const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const adminOnly =
require("../middleware/adminMiddleware");

const {
  getStats
} = require("../controllers/adminController");

const {
  createPlan,
  getAllPlans,
  deletePlan
} = require(
  "../controllers/adminPlanController"
);

router.get(
  "/dashboard",
  protect,
  adminOnly,
  (req, res) => {

    res.json({
      message:
      "Welcome Admin Dashboard"
    });

  }
);

router.get(
  "/stats",
  protect,
  adminOnly,
  getStats
);

router.post(
  "/plans",
  protect,
  adminOnly,
  createPlan
);

router.get(
  "/plans",
  protect,
  adminOnly,
  getAllPlans
);

router.delete(
  "/plans/:id",
  protect,
  adminOnly,
  deletePlan
);
module.exports = router;
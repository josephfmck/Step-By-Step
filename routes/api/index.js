const router = require("express").Router();
const stepByStepRoutes = require("./stepBySteps");

// Book routes
router.use("/stepbysteps", stepByStepRoutes);

module.exports = router;

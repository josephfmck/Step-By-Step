const router = require("express").Router();
const stepByStepRoutes = require("./stepBySteps");

// Book routes
router.use("/steps", stepByStepRoutes);

module.exports = router;

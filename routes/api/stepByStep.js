const router = require("express").Router();
const stepByStepsController = require("../../controllers/stepByStepsController");

// Matches with "/api/books"
router.route("/")
  .get(stepByStepsController.findAll)
  .post(stepByStepsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(stepByStepsController.findById)
  .put(stepByStepsController.update)
  .delete(stepByStepsController.remove);

module.exports = router;
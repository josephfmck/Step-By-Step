const router = require("express").Router();
const stepByStepsController = require("../../controllers/stepByStepsController");

// Matches with "/api/stepbysteps"
router.route("/")
  .get(stepByStepsController.findAll)
  .post(stepByStepsController.create);

// Matches with "/api/stepbysteps/:id"
router
  .route("/:id")
  .get(stepByStepsController.findById)
  .put(stepByStepsController.update)
  .delete(stepByStepsController.remove);


//router
//  .route("/:title")
//  .get(stepByStepsController.findAllByTitle)
//  .post(stepByStepsController.create);
  
module.exports = router;
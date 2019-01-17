const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepByStepSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  steps: { type: Array }
});

const StepByStep = mongoose.model("StepByStep", stepByStepSchema);

module.exports = StepByStep;

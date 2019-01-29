const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepByStepSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  stepone: { type: String, required: true },
  steptwo: { type: String, required: true },
  stepthree: { type: String, required: true },
  stepfour: { type: String, required: true },
  stepfive: { type: String, required: true }
});

const StepByStep = mongoose.model("StepByStep", stepByStepSchema);

module.exports = StepByStep;

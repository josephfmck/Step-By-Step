const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stepByStepSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  step1: { type: String },
  step2: { type: String },
  step3: { type: String },
  step4: { type: String }
});

const StepByStep = mongoose.model("StepByStep", stepByStepSchema);

module.exports = StepByStep;

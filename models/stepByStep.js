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

//TRY changing each step feature to false expect step one

//TRY changing all steps to one step data row that is an array

const StepByStep = mongoose.model("StepByStep", stepByStepSchema);

module.exports = StepByStep;

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/stepbysteptest"
);

const stepsSeed = [
  {
    title: "How to make a sandwhich",
    author: "Joe",
    description:
      "Step by step guide on making a sandwhich!",
    date: new Date(Date.now()),
    step1: "Get bread",
    step2: "Get ingredients",
    step3: "Place ingredients on one piece of bread",
    step4: "Place other piece of bread on top"
  },
  {
    title: "How to make wash a plate",
    author: "Joe",
    description:
      "Step by step guide on wash a plate!",
    date: new Date(Date.now()),
    step1: "Get plate",
    step2: "Get sink",
    step3: "Put soap on plate",
    step4: "Use sink to "
  },
  {
    title: "How to make a sandwhich",
    author: "Joe",
    description:
      "Step by step guide on making a sandwhich!",
    date: new Date(Date.now()),
    step1: "Get bread",
    step2: "Get ingredients",
    step3: "Place ingredients on one piece of bread",
    step4: "Place other piece of bread on top"
  }
];

db.Step
  .remove({})
  .then(() => db.StepByStep.collection.insertMany(stepsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

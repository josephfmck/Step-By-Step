const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/stepybystepdata";
 
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


const stepByStepItemSeed = [
  {
    title: "How to make a sandwhich",
    author: "Joe",
    description:
      "Step by step guide on making a sandwhich!",
    date: new Date(Date.now()),
    stepone: "Get bread",
    steptwo: "Get ingredients",
    stepthree: "Put ingredients on bread",
    stepfour: "Put other bread on top",
    stepfive: "Eat sandwhich"
  },
  {
    title: "How to wash a plate",
    author: "Joe",
    description:
      "Step by step guide on wash a plate!",
    date: new Date(Date.now()),
    stepone:  "Get plate",  
    steptwo: "Get water and soap",
    stepthree: "Get sponge",
    stepfour: "Put soap on sponge",
    stepfive: "Wash plate with sponge"
  },
  {
    title: "How to start a fire.",
    author: "Joe",
    description:
      "Step by step guide on starting a fire!",
    date: new Date(Date.now()),
    stepone:  "Get wood",  
    steptwo: "Pile wood up",
    stepthree: "Get kindling",
    stepfour: "Light kindling",
    stepfive: "Tend to fire"
  }
];

db.StepByStep
  .remove({})
  .then(() => db.StepByStep.collection.insertMany(stepByStepItemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

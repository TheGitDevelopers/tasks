const express = require("express");
const mongoose = require("mongoose");
const ExampleModel = require("../models/exampleModel.js");
const TaskModel = require("../models/taskModel.js");
const bodyParser = require("body-parser");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({
    message: "love"
  });
});
router.get("/api/tasks", (req, res, next) => {
  ExampleModel.findOne({ name: "test" }).then(result => {
    res.json({ name: result.name });
  });
});

router.post("/api/tasks", (req, res) => {
  console.log(req.body);
  task = new TaskModel({
    assignedTo: req.body.assignedTo,
    topic: req.body.topic,
    estimatedTime: req.body.estimatedTime,
    status: req.body.status,
    importanceLevel: req.body.importanceLevel,
    category: req.body.category
  });
  console.log(task);

  task
    .save()
    .then(task => {
      res.send(task);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

module.exports = router;

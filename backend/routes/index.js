const express = require("express");
const mongoose = require("mongoose");
const ExampleModel = require("../models/exampleModel.js");
const TaskModel = require("../models/taskModel.js");
const bodyParser = require("body-parser");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({
    message: "love"
  });
});
router.get("/api/tasks", (req, res, next) => {
  TaskModel.find()
    .then(tasks => {
      res.send(tasks);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

router.get("/api/tasks/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  if (!ObjectID.isValid(id)) {
    return res.status(400).send({ message: "Id is not valid" });
  }

  TaskModel.findById(id).then(task => {
    if (task) {
      res.send({ task });
    } else {
      res.status(404).send({ message: "Document with that id was not found" });
    }
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

const express = require("express");
const mongoose = require("mongoose");
const ExampleModel = require("../models/exampleModel.js");
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

module.exports = router;

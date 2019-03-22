const express = require("express");
const mongoose = require("mongoose");
const ExampleModel = require("../models/exampleModel.js");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    message: "love"
  });
});
router.get("/api/tasks", function(req, res, next) {
  ExampleModel.findOne({ name: "test" }).then(result => {
    res.json({ name: result.name });
  });
});

module.exports = router;

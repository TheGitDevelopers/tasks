const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema and Model

const ExampleModelSchema = new Schema({
  name: String
});

const exampleModel = mongoose.model("examplemodel", ExampleModelSchema);

module.exports = exampleModel;

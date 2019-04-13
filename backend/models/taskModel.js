const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskModelSchema = new Schema({
  assignedTo: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  estimatedTime: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  importanceLevel: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const taskModel = mongoose.model("taskmodel", TaskModelSchema);

module.exports = taskModel;

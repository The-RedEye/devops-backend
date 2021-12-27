const mongoose = require('../db/connection')

const TaskSchema = new mongoose.Schema({
  // projectID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:'Project'
  // },
  projectID: String,
  dev: String,
  completed: Boolean,
  subtask: Boolean,
  subtaskArr: [],
  masterTask: String,
  name: String,
  description: String,
  comments: [String]
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
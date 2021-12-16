const mongoose = require('../db/connection')

const TaskSchema = new mongoose.Schema({
  projectID: String,
  dev: String,
  completed: Boolean,
  subtask: Boolean,
  subtaskArr: [],
  masterTask: String
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
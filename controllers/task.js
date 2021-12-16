const mongoose = require('../db/connection')

const TaskSchema = mongoose.Schema({
  projectID: String,
  task: String,
  dev: String,
  completed: Boolean,
  subtask: Boolean,
  subtaskArr: [],
  masterTask: String
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task
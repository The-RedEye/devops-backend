const mongoose = require('../db/connection')

const ProjectSchema = new mongoose.Schema({
  name: String,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
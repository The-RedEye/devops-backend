const mongoose = require('../db/connection')

const ProjectSchema = new mongoose.Schema({
  name: String,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  comments: [{
    comment: String,
    author: String,
    targets: [String]
  }]
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
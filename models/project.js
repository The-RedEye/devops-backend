const mongoose = require('../db/connection')

const ProjectSchema = new mongoose.Schema({
  name: String
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project
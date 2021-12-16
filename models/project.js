const mongoose = require('../db/connection')

const ProjectSchema = new mongoose.Schema({
  name = String
})

const Project = mongoose.model('Gif', GifSchema)

module.exports = Project
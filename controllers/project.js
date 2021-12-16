const express = require('express')
const res = require('express/lib/response')
const Project = require('../models/project')

const ProjectRouter = express.Router()

//create Project Object
ProjectRouter.post('/', (req, res, next) => {
  Project.create(req.body)
    .then(project => res.json(project))
    .catch(next)
})

//get all project objects
ProjectRouter.get('/', (req, res, next) => {
  Project.find( {} )
    .then(projects => res.json(projects))
    .catch(next)
})


module.exports = ProjectRouter
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

//update (put) a project object
ProjectRouter.put('/:id', (req, res, next) => {
  Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(project => res.json(project))
    .catch(next)
})

//delete a project object
ProjectRouter.delete('/:id', (req, res, next) => {
  Project.findOneAndDelete({_id: req.params.id})
    .then(project => res.json(project))
    .catch(next)
})

//find a singular project using id
ProjectRouter.get('/:id', (req, res, next) => {
  Project.findById( {_id: req.params.id})
    .then(project => res.json(project))
    .catch(next)
})


module.exports = ProjectRouter
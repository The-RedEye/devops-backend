const express = require('express')
const Task = require('../models/task')

const TaskRouter = express.Router()

//create Task Object
TaskRouter.post('/', (req, res, next) => {
  Task.create(req.body)
    .then(task => res.json(task))
    .catch(next)
})

//get all Task Objects
TaskRouter.get('/', (req, res, next) => {
  Task.find( {} )
    .then(tasks => res.json(tasks))
    .catch(next)
})


module.exports = TaskRouter
const express = require('express')
const Task = require('../models/task')


const TaskRouter = express.Router()

//create Task Object
TaskRouter.post('/', (req, res, next) => {
  Task.create(req.body)
    .then(task => res.json(task))
    .catch(next)
})

TaskRouter.post("/", (req, res, next) => {
  const { task, projectId } = req.body;
  Task.create(task)
    .then((task) => {
      Project.findByIdAndUpdate(
        projectId,
        { $push: { tasks: task._id } },
        { new: true }
      )
        .populate("tasks")
        .then((project) => res.json(project));
    })
    .catch(next);
});

//get all Task Objects
TaskRouter.get('/', (req, res, next) => {
  Task.find( {} )
    .then(tasks => res.json(tasks))
    .catch(next)
})

//get a task by ID
TaskRouter.get('/:id', (req, res, next) => {
  Task.findById( {_id: req.params.id} )
    .then(task => res.json(task))
    .catch(next)
})

//update/put a Task object
TaskRouter.put('/:id', (req, res, next) => {
  Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(task => res.json(task))
    .catch(next)
})

//delete a Task object by ID
TaskRouter.delete('/:id', (req, res, next) => {
  Task.findOneAndDelete( {_id: req.params.id} )
    .then(task => res.json(task))
    .catch(next)
})


module.exports = TaskRouter
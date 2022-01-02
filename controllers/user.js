const express = require('express')
const User = require('../models/user')

const UserRouter = express.Router()

//create User Object
UserRouter.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

//get all User Objects
UserRouter.get('/', (req, res, next) => {
  User.find( {} )
    .then(users => res.json(users))
    .catch(next)
})

//get user by ID
UserRouter.get('/:id', (req, res, next) => {
  User.findById( {_id: req.params.id} )
    .then( user => res.json(user) )
    .catch(next)
})

//update/put a User object
UserRouter.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate( {_id: req.params.id}, req.body, {new: true})
    .then (user => res.json(user))
    .catch(next)
})

//delete a User object by ID
UserRouter.delete('/:id', (req, res, next) => {
  User.findOneAndDelete( {_id: req.params.id} )
    .then(user => res.json(user))
    .catch(next)
})

module.exports = UserRouter
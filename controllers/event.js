const express = require('express')
const Event = require('../models/event')

const EventRouter = express.Router()

//create Event Object
EventRouter.post('/', (req, res, next) => {
    if(req.body.isDefault===true){
     Event.findOneAndUpdate({isDefault: true}, {$set: {isDefault: false}})   
    }
    
    Event.create(req.body)
        .then(feedback => res.json (feedback))
    
})

//get all event objects
EventRouter.get('/', (req, res, next) => {
    Event.find( {} )
        .then(events => res.json(events))
        .catch(next)
})

//update (put) an event object by ID
EventRouter.put('/:id', (req, res, next) => {
    Event.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(feedback => res.json(feedback))
    .catch(next)
})

//delete a feedback object by ID
EventRouter.delete('/:id', (req, res, next) =>  {
    Event.findOneAndDelete( {_id: req.params.id} )
    .then(feedback =>res.json(feedback))
    .catch(next)
})

module.exports = EventRouter
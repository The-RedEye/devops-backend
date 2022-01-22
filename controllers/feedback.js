const express = require('express')
const Feedback = require('../models/feedback')

const FeedbackRouter = express.Router()

//create Feedback object
FeedbackRouter.post('/', (req, res, next) =>{
    Feedback.create(req.body)
        .then(feedback => res.json(feedback))
        .catch(next)
})

//get all feedback objects
FeedbackRouter.get('/', (req, res, next) => {
    Feedback.find( {} )
        .then(feedbackAll => res.json(feedbackAll))
        .catch(next)
})

//update (put) a feedback object
FeedbackRouter.put('/:id', (req, res, next) => {
    Feedback.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(feedback => res.json(feedback))
    .catch(next)
})

//delete a feedback object
FeedbackRouter.delete('/:id', (req, res, next) => {
    Feedback.findOneAndDelete({_id: req.params.id})
        .then(feedback => res.json(feedback))
        .catch(next)
})

//find a singular feedback using id
FeedbackRouter.get('/:id', (req, res, next) => {
    Feedback.findByID( {_id: req.params.id} )
        .then(feedback => res.json(feedback))
        .catch(next)
})

module.exports = FeedbackRouter
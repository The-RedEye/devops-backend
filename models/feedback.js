const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    userName: String,
    userID: String,
    anonymous: Boolean,
    eventID: String,
    relevancy: Number,
    comprehension: Number,
    completeness: Number,
    learned: Number,
    engagement: Number,
    comment: String,
})

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback
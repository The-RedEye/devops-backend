const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: String,
    date: String,
    description: String,
    isDefault: Boolean,
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
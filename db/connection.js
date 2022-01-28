const mongoose = require ('mongoose')

const mongoURI = 'mongodb://localhost/devops'
// const mongoURI = process.env.NODE_ENV === 'production'
//   ?process.env.DB_URL
//   :'mongodb://localhost/devops'

mongoose.connect(mongoURI)
  .then(instance =>
    console.log("I'm connected to the DevOps DB: "+ instance.connections[0].name))
  .catch(err => console.log("Connection to DevOps DB failed: ", err))

  module.exports = mongoose
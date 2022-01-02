const express = require('express')
const app = express()
const cors = require('cors')

app.set('port', process.env.PORT || 4000)

app.use(express.json())
app.use(express.urlencoded( {extended: true} ))
app.use(cors())

//Controllers --------------------

const ProjectController = require('./controllers/project')
app.use('/devops', ProjectController)

const TaskController = require('./controllers/task')
app.use('/task', TaskController)

const UserController = require('./controllers/user')
app.use('/user', UserController)

//end Controllers-----------------

//Listen clause
app.listen(app.get('port'), () => {
  console.log(`Connected to Port: ${app.get('port')}`)
})
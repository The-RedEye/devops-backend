const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

//Controllers --------------------

const ProjectController = require('./controllers/project')
app.use('/devops', ProjectController)

const TaskController = require('./controllers/task')
app.use('/task', TaskController)

//end Controllers-----------------

//Listen clause
app.listen(app.get('port'), () => {
  console.log(`Connected to Port: ${app.get('port')}`)
})
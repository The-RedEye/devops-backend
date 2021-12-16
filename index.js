const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

//Controllers --------------------

//end Controllers-----------------


//Listen clause
app.listen(app.get('port'), () => {
  console.log(`Connected to Port: ${app.get('port')}`)
})
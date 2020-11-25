const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.use(
    express.urlencoded({
      extended: true
    })
)

app.use(express.json())

////////////////////////////////////// Handlers for HTTP GET REQUEST ////////////////////////////////
app.get('/todos', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'get success!'})
})

////////////////////////////////////// Handlers for HTTP POST REQUEST ////////////////////////////////
app.post('/todos', (req, res) => {
  console.log(req.body.todo)
  console.log(req.body.name)
  console.log(req.body.age)
  res.status(200).send({message : 'post success!'})
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})




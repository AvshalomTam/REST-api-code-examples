////////////////////////////////////// HTTP POST REQUEST ////////////////////////////////
const axios = require('axios')

axios
  .post('http://localhost:3000/todos', {
    todo: 'Buy milk from store',
    name: 'Avshalom',
    age: 28
  })
  .then((res) => {
    console.log(`statusCode: ${res.status}`)
    console.log(res.data.message)
  })
  .catch(error => {
    console.error(error)
  })
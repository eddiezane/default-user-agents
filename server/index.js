const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  console.log(`${req.body.lang}:${req.body.lib}:${req.headers['user-agent']}`)

  res.status(200).end()
})

app.listen(3000, () => console.log('server started'))

const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', function (req, res) {
  res.status(200).send('server is run!')
})

app.listen(3000)
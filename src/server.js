const express = require('express')
require('dotenv').config()
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

// app.get('/', function (req, res) {
//   res.status(200).send('server is run!')
// })

app.listen(3000)
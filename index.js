'use strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(morgan('short'))

server.post('/', (req, res, next) => {
  res.send('HEY')
})


// 404 error definition
server.use((req, res) => res
  .status(404)
  .send({
    error: 'Not found',
  }))

server.listen(3000)

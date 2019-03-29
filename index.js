'use strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('strong-error-handler')
const connectToDb = require('./src/mongoConnection')
const env = require('./src/environment')

// eslint-disable-next-line no-process-env
const PORT = env('PORT') || 3000

const registerRouter = require('./src/register/register.route')

// Connect to database
connectToDb()

const app = express()

app.use(bodyParser.json())
app.use(morgan('short'))

app.use('/register', registerRouter)

// 404 error definition
app.use((req, res) => res
  .status(404)
  .send({
    error: `Method ${req.method} for path ${req.path} not found`,
  }))

// General error handler
app.use(errorHandler({
  debug: app.get('env') === 'development',
  log: app.get('env') === 'development',
}))

app.listen(PORT)

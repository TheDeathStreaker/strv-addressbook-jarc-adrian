'use strict'

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connectToDb = require('./src/mongoConnection')
const env = require('./src/environment')

// eslint-disable-next-line no-process-env
const PORT = env('PORT') || 3000

// Routers
const registerRouter = require('./src/register/register.route')
const loginRouter = require('./src/login/login.route')
const contactsRouter = require('./src/contacts/contacts.route')
// Validators
const validateJWT = require('./src/validators/validateJWT')

// Connect to database
connectToDb()

const app = express()


app.use(bodyParser.json())
app.use(morgan('short'))

// Register
app.use('/register', registerRouter)

// Login
app.use('/login', loginRouter)

// Contacts
app.use('/contacts', validateJWT, contactsRouter)

// 404 error definition
app.use((req, res) => res
  .status(404)
  .send({
    error: `Method ${req.method} for path ${req.path} not found`,
  }))

// General error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  const status = err.status || 500

  return res
    .status(status)
    .send({
      status,
      message: err.message,
      code: err.code,
    })
})

app.listen(PORT)

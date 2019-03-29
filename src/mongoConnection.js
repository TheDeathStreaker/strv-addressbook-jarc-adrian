'use strict'

const mongoose = require('mongoose')
const userSchema = require('./models/users')
const env = require('./environment')


const connectToMongo = () => {
  const connString = env('MONGODB_URI') || 'mongodb://localhost:27018/strv_addressbook-jarc-adrian'

  mongoose.connect(connString, {
    useNewUrlParser: true,
  })
  const db = mongoose.connection
  // eslint-disable-next-line no-console
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    // Init models
    global.USERS = userSchema(db)
  })
}

module.exports = connectToMongo

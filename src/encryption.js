'use strict'

const bcrypt = require('bcrypt')
const _ = require('lodash')
const env = require('./environment')

const encryptPassword = password => {
  let saltRounds = env('SALT_ROUNDS') || 10

  if (!_.isNaN(parseInt(saltRounds))) {
    saltRounds = parseInt(saltRounds)
  } else {
    saltRounds = 10
  }

  const hashedPassword = bcrypt.hash(password, saltRounds)

  return hashedPassword
}

const verifyPassword = (hash, password) => bcrypt.compare(password, hash)

module.exports = {
  encryptPassword,
  verifyPassword,
}

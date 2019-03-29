'use strict'

const bcrypt = require('bcrypt')
const env = require('./environment')

const encryptPassword = password => {
  const saltRounds = env('SALT_ROUNDS') || 10

  const hashedPassword = bcrypt.hash(password, saltRounds)

  return hashedPassword
}

const verifyPassword = (hash, password) => bcrypt.compare(password, hash)

module.exports = {
  encryptPassword,
  verifyPassword,
}

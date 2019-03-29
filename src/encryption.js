'use strict'

const bcrypt = require('bcrypt')
const env = require('./environment')

const encryptPassword = async password => {
  const saltRounds = env('SALT_ROUNDS') || 10

  const hashedPassword = bcrypt.hash(password, saltRounds)

  return hashedPassword
}

const comparePasswords = async (hash, password) => {

}

module.exports = {
  encryptPassword,
  comparePasswords,
}

'use strict'

const bcrypt = require('bcrypt')
const _ = require('lodash')
const env = require('./environment')

/**
 * @param {String} password Password to encrypt
 *
 * @returns {String} Hashed password
 *
 * @description Encrypts password to save to mongo db
 */
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

/**
 * @param {String} hash hash from db
 * @param {String} password password provided
 *
 * @returns {Boolean} does the password match the hash
 *
 * @description Check if password matches hash
 */
const verifyPassword = (hash, password) => bcrypt.compare(password, hash)

module.exports = {
  encryptPassword,
  verifyPassword,
}

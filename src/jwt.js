'use strict'

const jwt = require('jsonwebtoken')
const moment = require('moment')
const env = require('./environment')

const jwtSecret = env('JWT_SECRET') || 'developmentSecretYay'
const jwtIss = env('JWT_ISS') || 'localhost'

const createJWT = user => {
  const {
    email,
    firstName,
    lastName,
  } = user

  const exp = moment().add(1, 'hours').unix()

  return jwt.sign({
    email,
    firstName,
    lastName,
    exp,
    iss: jwtIss,
  }, jwtSecret)
}

module.exports = {
  createJWT,
}

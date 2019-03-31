'use strict'

const jwt = require('jsonwebtoken')
const moment = require('moment')
const env = require('./environment')

const jwtSecret = env('JWT_SECRET') || 'developmentSecretYay'
const jwtIss = env('JWT_ISS') || 'localhost'

/**
 * @param {{_id: String, email: String, firstName: String,
 * lastName: String}} user User to create JWT for
 *
 * @returns {String} Generated JWT
 *
 * @description Generates JWT
 */
const createJWT = user => {
  const {
    _id,
    email,
    firstName,
    lastName,
  } = user

  const exp = moment().add(1, 'hours').unix()

  return jwt.sign({
    _id,
    email,
    firstName,
    lastName,
    exp,
    iss: jwtIss,
  }, jwtSecret)
}

/**
 *
 * @param {String} token JWT token
 *
 * @returns {{_id: String, email: String, firstName: String,
 * lastName: String}} Decoded token
 *
 * @description Check if provided JWT is legitemate
 */
const checkJWT = token => jwt.verify(token, jwtSecret)

module.exports = {
  createJWT,
  checkJWT,
}

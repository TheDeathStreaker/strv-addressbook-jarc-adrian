'use strict'

const _ = require('lodash')
const isEmail = require('validator/lib/isEmail')
const errorGenerator = require('../errorGenerator')
const crypto = require('../encryption')
const jwt = require('../jwt')
const db = require('../DAL/db')

/**
 * @param {String} email Email to check
 *
 * @returns {void}
 *
 * @description Check if email provided exists and is an email
 */
const checkEmail = email => {
  if (_.isUndefined(email)) {
    throw errorGenerator.badRequest('Email is required')
  }

  if (!isEmail(email)) {
    throw errorGenerator.badRequest(`${email} is not an email`)
  }
}

/**
 * @param {String} password Password to check
 *
 * @returns {void}
 *
 * @description Check if password provided is defined and atleast 8 characters long
 */
const checkPassword = password => {
  if (_.isUndefined(password)) {
    throw errorGenerator.badRequest('Password is required')
  }

  if (password.length < 8) {
    throw errorGenerator.badRequest('Password must be atleast 8 characters long')
  }
}

/**
 * @param {String} email User email
 * @param {String} password User password
 *
 * @returns {{token: String}} User can log in
 *
 * @description Checks if user sent correct password and logs him in
 */
const login = async (email, password) => {
  const user = await db.users.findUserByEmail(email)

  const passwordCorrect = await crypto.verifyPassword(user.password, password)

  if (!passwordCorrect) {
    throw errorGenerator.unauthorized('Password incorrect')
  }

  return {
    token: jwt.createJWT(user),
  }
}

module.exports = {
  checkEmail,
  checkPassword,
  login,
}

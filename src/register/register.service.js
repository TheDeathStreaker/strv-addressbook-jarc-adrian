'use strict'

const _ = require('lodash')
const isEmail = require('validator/lib/isEmail')
const errorGenerator = require('../errorGenerator')
const crypto = require('../encryption')
const db = require('../DAL/db')

const checkPasswordRules = password => {
  const lowercaseRegex = new RegExp('\\p{Ll}', 'ug')
  const uppercaseRegex = new RegExp('\\p{Lu}', 'ug')
  const numberRegex = new RegExp('\\p{N}', 'ug')
  const specialRegex = new RegExp('\\p{P}|\\p{S}', 'ug')

  return lowercaseRegex.test(password)
  && uppercaseRegex.test(password)
  && numberRegex.test(password)
  && specialRegex.test(password)
}

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
 * @description Check if password provided is defined, atleast 8 characters long and has atleast
 * one lowercase, one uppercase, special character and one number
 */
const checkPassword = password => {
  if (_.isUndefined(password)) {
    throw errorGenerator.badRequest('Password is required')
  }

  if (password.length < 8) {
    throw errorGenerator.badRequest('Password must be atleast 8 characters long')
  }

  if (!checkPasswordRules(password)) {
    throw errorGenerator.badRequest('Password must consist of atleast one uppercase letter, one '
    + 'lowercase letter, one number and one special character')
  }
}

/**
 * @param {String} email User email
 * @param {String} password User password
 * @param {{firstName: String, lastName: String, phoneNumber: String}} [optional] User password
 *
 * @returns {{_id: String, email: String, firstName: String, lastName: String}} User was added
 *
 * @description Add user to mongo db
 */
const addUser = async (email, password, optional) => {
  password = await crypto.encryptPassword(password)

  const user = {
    firstName: optional.firstName || 'John',
    lastName: optional.lastName || 'Doe',
    email,
    password,
    phoneNumber: optional.phoneNumber,
  }

  const savedUser = await db.users.createUser(user)

  return _.pick(savedUser, ['_id', 'email', 'firstName', 'lastName'])
}

module.exports = {
  checkEmail,
  checkPassword,
  addUser,
}

'use strict'

const _ = require('lodash')
const isEmail = require('validator/lib/isEmail')
const errorGenerator = require('../errorGenerator')
const firebase = require('../firebase')

/**
 * @typedef CONTACT
 * @property {String} name Contact's name
 * @property {String} lastName Contact's last name
 * @property {String} email Contact's email
 * @property {String} [phoneNumber] Contact's phone number
 * @property {String} [nickname] Contact's nickname
 */

/**
 * @typedef TOKENUSER
 * @property {String} _id User's mongo id
 * @property {String} firstName User's name
 * @property {String} lastName User's last name
 * @property {String} email User's email
 */

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
 * @param {String} value Value to check
 * @param {String} type property name of value to check
 *
 * @returns {void}
 *
 * @description Check if value is defined
 */
const checkIfDefined = (value, type) => {
  if (_.isUndefined(value)) {
    throw errorGenerator.badRequest(`${type} is required`)
  }
}

/**
 * @param {TOKENUSER} user Logged in user
 * @param {CONTACT} contact Contact to add for user
 *
 * @returns {{status: String}} Contact was saved to firebase
 *
 * @description Check if value is defined
 */
const addContact = async (user, contact) => {
  const {
    _id,
  } = user

  const propertyName = contact.name
  + contact.lastName
  + contact.email.replace(/\p{P}|\p{S}/ug, '_')

  const toAdd = {}
  toAdd[propertyName] = contact

  await firebase.addToFirebase(toAdd, _id)

  return {
    status: 'OK',
  }
}

module.exports = {
  checkEmail,
  checkIfDefined,
  addContact,
}
